// import resources
import headshot from "../resources/img/headshot.jpg";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Home function with about me section

function Home() {

  useEffect(()=>{
    AOS.init({
      easing: 'ease',
  });
  },[])

  return (
    <>
      <div className="home-wrapper">
        <img data-aos="flip-left" data-aos-delay="800" data-aos-duration="800" src={headshot} className="headshot" alt="Scott Billsborough" />
        <h1 data-aos="fade-left" data-aos-delay="1100" data-aos-duration="600">Web Developer</h1>
        <p data-aos="fade-right" data-aos-delay="1300" data-aos-duration="600">Hi, I'm Scott and I am a Web Developer. Welcome to my portfolio.</p>
      </div>
      <div className="icons-wrapper">
        <div className="icons">
          <i data-aos="flip-down" data-aos-delay="1500" data-aos-duration="600" className="fa-brands fa-html5"></i>
          <i data-aos="flip-down" data-aos-delay="1700" data-aos-duration="600" className="fa-brands fa-css3-alt"></i>
          <i data-aos="flip-down" data-aos-delay="1900" data-aos-duration="600" className="fa-brands fa-js"></i>
          <i data-aos="flip-down" data-aos-delay="2100" data-aos-duration="600" className="fa-brands fa-react"></i>
          <i data-aos="flip-down" data-aos-delay="2300" data-aos-duration="600" className="fa-brands fa-bootstrap"></i>
          <i data-aos="flip-down" data-aos-delay="2500" data-aos-duration="600" className="fa-brands fa-node"></i>
          <i data-aos="flip-down" data-aos-delay="2700" data-aos-duration="600" className="fa-brands fa-npm"></i>
          <i data-aos="flip-down" data-aos-delay="2900" data-aos-duration="600" className="fa-brands fa-github"></i>
        </div>
      </div>
    </>
  );
}

export default Home;
