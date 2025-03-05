import { useState } from "react";
import cv from "../resources/img/cv.png";

function Contact() {
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "d522da59-27c6-47b8-ab00-ec0423cf7d44",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setFormData({
          ...formData,
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      });
  };

  return (
    <div className="contact-container">
      <h1>My Information</h1>
      <div className="info-wrapper">
        <div className="info-icons">
          <ul>
            <li>
              <a
                href="https://docs.google.com/document/d/1jK2UPUtZUg3-36E1klYv7rK2zEPrgHrOlqdM6zpWD20/edit?usp=sharing"
                target="_blank"
              >
                <img src={cv} className="cv" alt="CV Icon" />
                <p>CV</p>
              </a>
            </li>
            <li>
              <a href="https://github.com/sbillsborough" target="_blank">
                <i className="fa-brands fa-github"></i>
                <p>GitHub</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/scott-billsborough/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
                <p>LinkedIn</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="contact-wrapper">
        <h3>Contact Me</h3>
        <form id="form" onSubmit={handleSubmit}>
          <input
            className="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
          />
          <input
            className="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="text"
            placeholder="Email"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>

          <button>Submit</button>
        </form>
      </div>

      {success && (
        <p className="success-message">
          Form submitted. Thank you for your message. I'll get back to you as
          soon as I can.
        </p>
      )}
    </div>
  );
}

export default Contact;
