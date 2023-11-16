import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="background">
        <svg></svg>
      </div>
      <section>
        <ul className="socials">
          <li>
            <a class="fa-brands fa-linkedin"></a>
            <a class="fa-brands fa-github"></a>
            <a class="fa-regular fa-envelope"></a>
          </li>
        </ul>
        <nav className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </section>
      <p class="legal">&copy; 2023 Scott Billsborough</p>
    </footer>
  );
}
export default Footer;
