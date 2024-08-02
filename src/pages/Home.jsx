import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Sarah <span className="varin">Varin</span></h1>
          <h2>Développeuse Informatique</h2>
          <figure>
            <h4> Je suis passionnée par le développement et actuellement en formation développeuse d'application JavaScript/React. À partir d'août 2024, je serai disponible pour un contrat d'apprentissage via OpenClassrooms. Cette formation, d'une durée de deux ans, se déroulera à raison de quatre jours en entreprise.</h4>
          </figure>
          <div className="pdf">
            <a
              href="./media/CV_Sarah-Varin_developpeuse-informatique.pdf"
              target="_blank"
              className="desktop-cv"
            >
              Télécharger mon CV
            </a>
            <a
              href="./media/recommandation_de_Celine_Bernardo.pdf"
              target="_blank"
            >
              Télécharger ma lettre de recommandation Girelle Production
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

