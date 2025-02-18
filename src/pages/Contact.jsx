import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Envoi en cours...');

    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("/src/api/send-email.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    const result = await response.json();
    setFormStatus(result.message);
  };

  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        {/* Header Section */}
        <div className="header"></div>

        {/* Contact Box Section */}
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Orléans</span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <CopyToClipboard text="sarahvarin95@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("E-mail copié!");
                  }}
                >
                  sarahvarin95@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nom:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Envoyer</button>
            {formStatus && <p>{formStatus}</p>}
          </form>
        </div>

        {/* Social Network Section */}
        <div className="socialNetwork">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/sarah-varin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>LinkedIn</h4>
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sarahvar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github</h4>
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
