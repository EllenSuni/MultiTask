import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectRender() {
  const [tasks, setTasks] = useState([]);

  const { projectName } = useParams();

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((result) => {
        result.projects.findIndex((item, i) => {
          if (item.name === projectName) {
            setTasks(result.projects[i].tasks);
          }
        });
      });
  }, [projectName]);

  return (
    <>
      <div className="project">
        <h2 className="project__heading">{projectName}</h2>
        <div>
          {tasks.map((task) => (
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
    </>
  );
}

export default ProjectRender;
