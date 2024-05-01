import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
        <h1>Sarah <span class="varin">Varin</span></h1>
          <h2>Développeuse Full Stack</h2>
          <div className="pdf">
            <a
              href="./media/CV_Sarah-Varin_developpeuse-Full Stack.pdf"
              target="blank"
            >
              Télécharger mon CV
            </a>
            <figure>
           <h4> Diplômée de la formation Developpeuse web, je suis passionée par le monde de l'informatique et la programmation.
            Je me forme en Java et Angular.
             Je suis disponible pour une alternance, un CDI ou un CDD à compter d'août 2024.</h4>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
