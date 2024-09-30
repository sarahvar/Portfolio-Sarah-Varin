import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(
    window.innerWidth <= 850
  );

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth <= 850);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="id">
        {!isTabletOrMobile && (
          <div className="idContent">
            <img src="./media/Sarah-Varin.jpg" alt="profil" />
            <h3>Sarah Varin</h3>
          </div>
        )}
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <i className="fa-solid fa-house"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fa-solid fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/projets" activeClassName="navActive">
              <i className="fa-solid fa-images"></i>
              <span>Projets</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fa-solid fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
