import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/Photo-Sarah-Varin.jpeg" alt="profil" />
          <h3>Sarah Varin</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
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
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fa-solid fa-images"></i>
              <span>Portfolio</span>
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
      <div className="socialNetwork">
        <ul>
            <li>
                <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BXapQWn%2FASd2vVvNmc0TO%2FA%3D%3D">
                <i className="fa-brands fa-linkedin"></i>
                </a> 
            </li>
            <li>
                <a href="https://github.com/sarahvar">
                <i className="fa-brands fa-github"></i>
                </a> 
            </li>
        </ul>
        <div className="signature">
            <p>Sarah Varin - 2024</p>
        </div>
      </div>
    </div>
  );
}
