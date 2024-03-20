import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li className="username">Username</li>
          <li>
            <Link
              to="/"
              className="link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="link">
              Projects
            </Link>
            <ul className="project-list">
              <li className="project-list__item">Project 1</li>
              <li className="project-list__item">Project 2</li>
              <li className="project-list__item">Project 3</li>
            </ul>
          </li>
          <li className="settings">Settings</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
