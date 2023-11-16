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
        <ul className="links">
          <li>
            <a href="">
              <NavLink to="/">Home</NavLink>
            </a>
          </li>
          <li>
            <a href="">
              <NavLink to="/projects">Projects</NavLink>
            </a>
          </li>
          <li>
            <a href="">
              <NavLink to="/contact">Contact</NavLink>
            </a>
          </li>
        </ul>
      </section>
      <p class="legal">&copy; 2023 Scott Billsborough</p>
    </footer>
  );
}
export default Footer;
