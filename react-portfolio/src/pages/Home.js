// import resources
import headshot from "../resources/img/headshot.jpg";

// Home function with about me section

function Home() {
  return (
    <>
      <div className="home-wrapper">
        <img src={headshot} className="headshot" alt="Scott Billsborough" />
        <h1>Web Developer</h1>
        <p>Hi, I'm Scott and I am a Web Developer. Welcome to my portfolio.</p>
      </div>
      <div className="icons">
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-js"></i>
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-bootstrap"></i>
        <i class="fa-brands fa-node"></i>
        <i class="fa-brands fa-npm"></i>
        <i class="fa-brands fa-github"></i>
      </div>
    </>
  );
}

export default Home;
