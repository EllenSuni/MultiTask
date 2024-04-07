import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../Context";
import PropTypes from "prop-types";

function ProjectRender({ quote }) {
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
    <>
      <h2 className="quote">{quote}</h2>
      {user.isLoggedIn &&
        projects.map((project) => (
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

ProjectRender.propTypes = {
  quote: PropTypes.string,
};

export default ProjectRender;
