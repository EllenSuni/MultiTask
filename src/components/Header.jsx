import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((result) => {
        setProjects(result.projects);
      });
  }, []);

  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li className="username">
            <Link
              to="/profile"
              className="link">
              Username here
            </Link>
          </li>
          <li className="dashboard">
            <Link
              to="/"
              className="link">
              Dashboard
            </Link>
          </li>
          <li className="projects">
            Projects
            <ul>
              {projects.map((project) => (
                <li
                  key={project.projectID}
                  className="project-link">
                  <Link
                    to={`/project/${project.name}`}
                    className="link">
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="settings">Settings</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
