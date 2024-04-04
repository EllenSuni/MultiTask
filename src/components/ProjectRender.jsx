import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectRender() {
  const [projects, setProjects] = useState([]);

  const { projectName } = useParams();

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
    <>
      {projects.map((project) => (
        <div
          className="project"
          key={project.projectID}>
          <h2 className="project__heading">{projectName || project.name}</h2>
          <div>
            {project.tasks.map((task) => (
              <div
                key={task.id}
                className="project__task">
                <input
                  type="checkbox"
                  className="project__task__checkbox"
                  id={task.id}
                />
                <label
                  className="project__task__title"
                  htmlFor={task.id}>
                  {task.title}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectRender;
