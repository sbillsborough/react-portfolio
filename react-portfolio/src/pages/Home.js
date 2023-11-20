// import resources
import headshot from "../resources/img/headshot.jpg";

// Home function with about me section

function Home() {
  return (
    <>
      <div className="home-wrapper">
        <h1>Web Developer</h1>
        <img src={headshot} className="headshot" alt="Scott Billsborough" />

        <p>
          Dedicated and passionate web developer with a strong foundation in
          front-end development and a keen eye for creating visually appealing
          and user-friendly websites. Armed with Trilogy's Front-End Engineer
          Certificate from edX and a career-path qualification in Web
          Development from CodeCademy, I am eager to leverage my technical
          skills and drive for innovation to contribute to dynamic web projects.
          With expertise in HTML5, CSS3, JavaScript, and a toolkit that includes
          ReactJS, jQuery, and Bootstrap, I am ready to transform creative
          concepts into responsive code. Committed to continuous learning and
          staying up-to-date with the latest industry trends, I am poised to
          deliver high-quality web solutions while thriving in collaborative
          team environments.
        </p>
      </div>
      <div className="icons-wrapper">
        <div className="icons">
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-bootstrap"></i>
          <i className="fa-brands fa-node"></i>
          <i className="fa-brands fa-npm"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>
    </>
  );
}

export default Home;
