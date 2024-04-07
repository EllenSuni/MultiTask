import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

function Header() {
  const [projects, setProjects] = useState([]),
    { user } = useContext(Context);

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((result) => {
        result = result.users[0];
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
              {user.username || "Log in"}
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
              {user.isLoggedIn &&
                projects.map((project) => (
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
