import React, { useState, useEffect } from 'react';

export default function OtherSkills() {
  // État pour gérer la largeur de l'écran
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 320);

  // Fonction pour mettre à jour l'état lorsque la taille de l'écran change
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 320);
    };

    // Ajouter l'écouteur d'événement
    window.addEventListener('resize', handleResize);

    // Nettoyer l'écouteur d'événement à la désactivation du composant
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Style conditionnel
  const listItemStyle = {
    marginLeft: isMobile ? '0' : '0.5rem'
  };

  return (
    <div className="otherSkills">
      <h3>Autres compétences</h3>
      <div className="list">
        <ul>
          <li>
            <i className="fa-solid fa-square-check"></i>
            <span style={listItemStyle}>Anglais bases</span>
          </li>
          <li>
            <i className="fa-solid fa-square-check"></i>
            <span style={listItemStyle}>Github</span>
          </li>
          <li>
            <i className="fa-solid fa-square-check"></i>
            <span style={listItemStyle}>SEO</span>
          </li>
          <li>
            <i className="fa-solid fa-square-check"></i>
            <span style={listItemStyle}>Méthodes agiles</span>
          </li>
        </ul>
        <ul>
          <li>
            <i className="fa-solid fa-square-check"></i>
            <span style={listItemStyle}>Figma</span>
          </li>
          <li>
            <i className="fa-solid fa-square-check"></i>
            <span style={listItemStyle}>UI/UX Design</span>
          </li>
          <li>
            <i className="fa-solid fa-square-check"></i>
            <span style={listItemStyle}>Montage vidéo</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
