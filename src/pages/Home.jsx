import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>
            Sarah <span className="varin">Varin</span>
          </h1>
          <h2>Développeuse web</h2>
          <figure>
            <figcaption>
              <h4>
                Passionnée par le développement, je suis ravie d'annoncer que j'ai terminé ma formation en développement d'application JavaScript/React le 13 août 2024, qui a duré un an et deux mois.
                <p>
                  Cette formation m'a apporté beaucoup de connaissances et de pratiques. Je suis disponible pour un contrat d'apprentissage dans le développement web. Cette formation, d'une durée de deux ans, se déroulera à raison de quatre jours en entreprise et un jour en école.
                </p>
              </h4>
            </figcaption>
          </figure>
          <div className="pdf">
            <a
              href="./media/CV_Sarah-Varin_developpeuse-web.pdf"
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
