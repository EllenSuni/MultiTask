import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <h4>Username</h4>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
