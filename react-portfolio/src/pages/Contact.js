import { useState } from "react";

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
    <>
      <h2>My Information</h2>
      <ul>
        <li>Email: billsboroughscott@gmail.com</li>
        <li>
          <a
            href="https://docs.google.com/document/d/1jK2UPUtZUg3-36E1klYv7rK2zEPrgHrOlqdM6zpWD20/edit?usp=sharing"
            target="_blank"
          >
            CV
          </a>
        </li>
        <li>
          <a href="https://github.com/sbillsborough" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/scott-billsborough/"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <h3>Contact Me!</h3>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="text"
          placeholder="Enter your email address"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          cols="30"
          rows="10"
        ></textarea>
        <button>Submit</button>
      </form>

      {success && (
        <p className="success-message">
          Form submitted. Thank you for your message. I'll get back to you as
          soon as I can.
        </p>
      )}
    </>
  );
}

export default Contact;
