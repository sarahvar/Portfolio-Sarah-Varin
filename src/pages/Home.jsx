import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Sarah <span className="varin">Varin</span></h1>
          <h2>Développeuse Full Stack</h2>
            <figure>
              <h4> Diplômée de la formation Développeuse web, actuellement en formation développeuse d'application JavaScript/React, je suis passionnée par le monde de l'informatique et la programmation. Je me forme en Java et Angular. Je suis disponible pour une alternance, un CDI ou un CDD à compter d'août 2024.</h4>
            </figure>
          <div className="pdf">
            <a
              href="./media/CV_Sarah-Varin_developpeuse-Full Stack.pdf"
              target="_blank"
            >
              Télécharger mon CV 
            </a>
            <a
              href="./media/recommandation_de_Celine_Bernardo.pdf"
              target="_blank"
            >
              Télécharger ma lettre de recommandation Girelle Production
            </a>
            <a
              href="./media/Lettre de recommandation_Omer_Ben-Salah.pdf"
              target="_blank"
            >
              Télécharger ma lettre de recommandation Mentor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

