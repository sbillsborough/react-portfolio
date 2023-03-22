// imports NavLink from React Router
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h3>Scott Billsborough</h3>

      <div className="navbar">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
