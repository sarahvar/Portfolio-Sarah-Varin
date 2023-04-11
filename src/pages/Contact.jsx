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
                  07 62 79 34 11
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
            <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BXapQWn%2FASd2vVvNmc0TO%2FA%3D%3D"
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

            <a
              href="https://codepen.io/sasardine"
              target="_blank"
              rel="noopener noreferer"
            >
              <h4>CodePen</h4>
              <i className="fab fa-codepen"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
