import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import one from "../resources/img/1.png";
import two from "../resources/img/2.png";
import three from "../resources/img/3.png";
import four from "../resources/img/4.png";
import five from "../resources/img/5.png";
import six from "../resources/img/6.png";

const ProjectsPage = ({ name }) => {
  const [photos] = useState([
    {
      src: one,
      title: "Work Day Scheduler",
      description:
        "A scheduler for planning the users work day. Add text to each hourly section and they will persist on page reload. Colour coded to indicate whether the task is in the past, present or fututre.",
      linkApp: "https://sbillsborough.github.io/work-day-scheduler/",
      linkGithub: "https://github.com/sbillsborough/work-day-scheduler",
    },
    {
      src: two,
      title: "Random Password Generator",
      description:
        "A random password generator that produces a password based on the users requirments. These include required length, upper/lowercase characters, special characters and numbers. Also checks to see if the password is at least 10 characters long.",
      linkApp: "https://sbillsborough.github.io/random-password-generator/",
      linkGithub: "https://github.com/sbillsborough/random-password-generator",
    },
    {
      src: three,
      title: "Weather Dashboard",
      description:
        "A weather report dashboard that displays the current date. Allows the user to search for the current and 5 day weather in the city of their choice. Stores the search history and creates a button that allows the user to easily click and bring up the previous search history.",
      linkApp: "https://sbillsborough.github.io/weather-dashboard/",
      linkGithub: "https://github.com/sbillsborough/weather-dashboard",
    },
    {
      src: four,
      title: "Team Profile Generator",
      description:
        "A command line app that prompts users then creates team members of a software development company based on their response.",
      linkApp: "https://github.com/sbillsborough/team-profile-generator",
      linkGithub: "https://github.com/sbillsborough/team-profile-generator",
    },
    {
      src: five,
      title: "Bootstrap Portfolio",
      description: "A Web Developer Portfolio built in Bootstrap.",
      linkApp: "https://sbillsborough.github.io/Bootstrap-Portfolio/",
      linkGithub: "https://github.com/sbillsborough/Bootstrap-Portfolio",
    },
    {
      src: six,
      title: "Music App",
      description:
        "A web app that allows users to search for a song, artist or band and see a dynamically generated link to a relevant YouTube video to said song/musician. We also display 5 similarly named artists in the 'Similar to your search' section.",
      linkApp: "https://zaitken1.github.io/music-app/",
      linkGithub: "https://github.com/zaitken1/music-app",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.name === name);

  return (
    <>
      <h2>Projects</h2>
      <div id="spacecards">
        <div className="flex-row">
          {currentPhotos.map((image, i) => (
            <Card id="card-projects" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                key={i}
                src={image.src}
                alt="portfolio project"
              />
              <Card.Body>
                <Card.Title>
                  <span>{image.title}</span>
                </Card.Title>

                <Card.Text>{image.description}</Card.Text>

                <div id="btns-projects">
                  <Button>
                    <a href={image.linkApp}>Deployed Application</a>{" "}
                  </Button>
                  <br />
                  <Button>
                    <a href={image.linkGithub}>GitHub Repository</a>{" "}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
