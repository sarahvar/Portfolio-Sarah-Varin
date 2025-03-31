import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact() {
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
              <span>Orléans, Loiret, Centre Val de Loire, France entière</span>
            </li>
            <li>
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
            <li>
              <CopyToClipboard text="lavagueduweb@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("E-mail copié!");
                  }}
                >
                  lavagueduweb@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
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
                href="https://www.linkedin.com/in/sarah-varin-la-vague-du-web/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github</h4>
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
          <footer>
          Site créé par Sarah Varin - Hébergé sur Vercel
          <p>
            Ce site ne collecte aucune donnée personnelle. Les seules informations visibles sont
            celles que vous choisissez de partager en me contactant directement par e-mail.  
          </p>
          <p>
            J’utilise <strong>Vercel Analytics</strong> pour suivre l’audience du site de manière
            anonyme, sans stocker d’informations personnelles.  
          </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
