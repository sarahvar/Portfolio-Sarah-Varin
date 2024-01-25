import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Sarah Varin</h1>
          <h2>Développeuse web</h2>
          <div className="pdf">
            <a
              href="./media/Cv_Sarah_Varin_Developpeuse-Web.pdf"
              target="blank"
            >
              Télécharger CV
            </a>
            <figure>
              <h3>Présentation Sarah Varin</h3>
              <audio controls src="./src/assets/Présentation_Sarah_Varin.mp3">
                <a href="./src/assets/Présentation_Sarah_Varin.mp3">
                  Download audio
                </a>
              </audio>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
