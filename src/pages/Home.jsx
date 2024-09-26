import Navigation from "../components/Navigation";
import Announcement from "../components/Announcement"; // Import du composant Announcement

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>
            Sarah <span className="varin">Varin</span>
          </h1>
          <h2>Développeuse web FullStack</h2>
          <figure>
            <figcaption>
              {/* Intégration du composant Announcement */}
              <Announcement />
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
