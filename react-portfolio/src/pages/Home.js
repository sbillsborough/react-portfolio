// import resources
import headshot from "../resources/img/headshot.jpg";

// Home function with about me section

function Home() {
  return (
    <div>
      <img src={headshot} alt="Scott Billsborough" />
      <h1>Web Developer</h1>
      <p>Hi, I'm Scott and I am a Web Developer. Welcome to my portfolio.</p>
    </div>
  );
}

export default Home;
