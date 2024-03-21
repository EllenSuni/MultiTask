import { useEffect, useState } from "react";

function ProjectRender() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.projects.Website.tasks);
        setTasks(result.projects.Website.tasks);
        // tasks.map((task) => console.log(task));
      });
  }, []);

  return (
    <>
      <div className="project">
        <h2 className="project__heading">Project 1</h2>
        <div>
          {tasks.map((task) => (
            <div
              key={task.id}
              className="project__task">
              <input
                type="checkbox"
                className="project__task__checkbox"
              />
              <label className="project__task__title">{task.title}</label>
              {/* Point label to checkbox */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectRender;
