// imports NavLink from React Router
import { NavLink } from "react-router-dom";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {

  useEffect(()=>{
    AOS.init({
      easing: 'ease',
  });
  },[])

  return (
    <header>
      <h3 data-aos="fade-down" data-aos-delay="600" data-aos-duration="600">Scott Billsborough</h3>

      <div className="navbar">
        <nav>
          <NavLink data-aos="fade-down" data-aos-delay="800" data-aos-duration="600" to="/">Home</NavLink>
          <NavLink data-aos="fade-down" data-aos-delay="1000" data-aos-duration="600" to="/projects">Projects</NavLink>
          <NavLink data-aos="fade-down" data-aos-delay="1200" data-aos-duration="600" to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
