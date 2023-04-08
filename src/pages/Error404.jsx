import { NavLink } from "react-router-dom"

export default function Error404 () {
    return (
     <div className="error404">
        <div className="error404Content">
            <h3>Désolée cette page n'existe pas !</h3>
            <NavLink exact to="/">
                <i className="fa-solid fa-house"></i>
                <span> Accueil</span>
            </NavLink>
        </div>
     </div>
    )
}