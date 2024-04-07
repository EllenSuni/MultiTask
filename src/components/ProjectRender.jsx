import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../Context";

import styled from "styled-components";

const Project = styled.div`
    border: 1.5px solid #5e5e4a;
    border-radius: 8px;
    box-shadow: 2px 2px 4px #5e5e4a25;
    display: flex;
    flex-direction: column;
    width: 320px;
    padding: 16px 29px;
    margin-bottom: 15px;
  `,
  ProjectHeading = styled.h2`
    color: #5e5e4a;
    text-decoration: underline;
    align-self: center;
  `,
  ProjectTask = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
  `,
  ProjectTaskTitle = styled.label`
    color: $dark-color;
    font-size: 1.2rem;
  `;
function ProjectRender() {
  const [projects, setProjects] = useState([]);

  const { projectName } = useParams(),
    { user } = useContext(Context);

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((result) => {
        result = result.users[0];
        if (projectName) {
          result.projects.findIndex((item, i) => {
            if (item.name === projectName) {
              setProjects([result.projects[i]]);
            }
          });
        } else {
          setProjects(result.projects);
        }
      });
  }, [projectName]);

  return (
    <div>
      {user.isLoggedIn &&
        projects.map((project) => (
          <Project key={project.projectID}>
            <ProjectHeading>{projectName || project.name}</ProjectHeading>
            <div>
              {project.tasks.map((task) => (
                <ProjectTask key={task.id}>
                  <input
                    type="checkbox"
                    className="project__task__checkbox"
                    id={task.id}
                  />
                  <ProjectTaskTitle htmlFor={task.id}>
                    {task.title}
                  </ProjectTaskTitle>
                </ProjectTask>
              ))}
            </div>
          </Project>
        ))}
    </div>
  );
}

export default ProjectRender;
