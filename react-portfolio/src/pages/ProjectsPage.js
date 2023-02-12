import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const ProjectsPage = ({ name }) => {
  const [photos] = useState([
    {
      i: "1",
      title: "Work Day Scheduler",
      description:
        "A scheduler for planning the users work day. Add text to each hourly section and they will persist on page reload. Colour coded to indicate whether the task is in the past, present or fututre.",
      linkApp: "https://sbillsborough.github.io/work-day-scheduler/",
      linkGithub: "https://github.com/sbillsborough/work-day-scheduler",
    },
    {
      i: "2",
      title: "Random Password Generator",
      description:
        "A random password generator that produces a password based on the users requirments. These include required length, upper/lowercase characters, special characters and numbers. Also checks to see if the password is at least 10 characters long.",
      linkApp: "https://sbillsborough.github.io/random-password-generator/",
      linkGithub: "https://github.com/sbillsborough/random-password-generator",
    },
    {
      i: "3",
      title: "Console Finances",
      description:
        "Project that loops through a nested array and logs the necessary information to the console.",
      linkApp: "https://github.com/sbillsborough/Console-Finances",
      linkGithub: "https://github.com/sbillsborough/Console-Finances",
    },
    {
      i: "4",
      title: "Team Profile Generator",
      description:
        "A command line app that prompts users then creates team members of a software development company based on their response.",
      linkApp: "https://github.com/sbillsborough/team-profile-generator",
      linkGithub: "https://github.com/sbillsborough/team-profile-generator",
    },
    {
      i: "5",
      title: "Bootstrap Portfolio",
      description: "A Web Developer Portfolio built in Bootstrap.",
      linkApp: "https://sbillsborough.github.io/Bootstrap-Portfolio/",
      linkGithub: "https://github.com/sbillsborough/Bootstrap-Portfolio",
    },
    {
      i: "6",
      title: "Music App",
      description:
        "A web app that allows users to search for a song, artist or band and see a dynamically generated link to a relevant YouTube video to said song/musician. We also display 5 similarly named artists in the 'Similar to your search' section.",
      linkApp: "https://zaitken1.github.io/music-app/",
      linkGithub: "https://github.com/zaitken1/music-app",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.name === name);

  return (
    <div id="spacecards">
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <Card id="card-projects" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={require(`../resources/img/${image.i}.png`).default}
              alt="portfolio project"
            />
            <Card.Body>
              <Card.Title>
                <span>{image.title}</span>
              </Card.Title>
              <Card.Text>{image.description}</Card.Text>
              <div id="btns-projects">
                <Button>
                  <a href={image.linkApp}>View deployed application</a>{" "}
                </Button>
                <br />
                <Button>
                  <a href={image.linkGithub}>View GitHub repository</a>{" "}
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
