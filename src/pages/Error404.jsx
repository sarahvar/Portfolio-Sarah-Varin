import { NavLink } from "react-router-dom";

export default function Error404() {
  return (
    <div className="error404">
      {/* Ajout du GIF du phare */}
      <div className="phare-container">
        <img src="/public/media/phare.gif" alt="Phare" className="phare-gif" />
      </div>
      <div className="error404Content">
        <h3>Désolée cette page n'existe pas !</h3>
        <NavLink exact="true" to="/">
          <i className="fa-solid fa-house"></i>
          <span> Accueil</span>
        </NavLink>
      </div>
    </div>
  );
}
