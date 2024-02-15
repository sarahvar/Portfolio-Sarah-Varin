import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact() {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Orléans</span>
            </li>
            <li>
              <i className="fa-solid fa-mobile"></i>
              <CopyToClipboard text="0762793411">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié!");
                  }}
                >
                  07 67 28 30 54
                </span>
              </CopyToClipboard>
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
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="https://www.linkedin.com/in/sarah-varin/"
             target="_blank"
             rel="noopener noreferer">
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>

            <a href="https://github.com/sarahvar"
             target="_blank"
             rel="noopener noreferer">
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
