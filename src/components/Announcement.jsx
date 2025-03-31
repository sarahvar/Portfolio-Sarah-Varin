import React from "react";

const Announcement = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>✨ Une nouvelle aventure commence ! ✨</h2>
      <p style={styles.text}>
        🚀 Après <strong>3 ans d’expérience en développement web</strong>, j’ai créé ce site pour vous présenter mon <strong>portfolio</strong> : 
        une collection de projets réalisés <strong>en autodidacte</strong> et lors de mes formations, reflétant ma passion et mon expertise du web.
      </p>
      <p style={styles.text}>
        🎯 Grâce à ma <strong>deuxième formation en développement web</strong>, j’ai acquis des compétences solides que je mets aujourd’hui au service 
        des <strong>freelances, auto-entrepreneurs, PME et start-ups</strong>, pour les aider à booster leur présence en ligne.
      </p>
      <p style={styles.text}>
        💡 Forte de cette expertise, j’ai fondé <strong>La Vague du Web</strong>, une entreprise dédiée à la <strong>création de sites performants et optimisés</strong>. 
        Découvrez mes services et ma vision sur <a href="https://sarah-varin-la-vague-du-web.netlify.app/" style={styles.link} target="_blank" rel="noopener noreferrer">La Vague du Web</a>.
      </p>
      <p style={styles.text}>
        🔥 <strong>Prête à donner vie à vos idées</strong>, je conçois des <strong>sites modernes, ergonomiques et impactantes</strong> pour vous démarquer sur le web.
      </p>
      <p style={styles.callToAction}>
        👉 <strong>Besoin d’un site web qui fait la différence ?</strong> Discutons de votre projet et créons ensemble une solution à la hauteur de vos ambitions !
      </p>
      <p style={styles.portfolioInvite}>
        🌐 Explorez mon <strong>portfolio</strong> et laissez-vous inspirer par mes réalisations !
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    color: "#4FEDD2",
    marginBottom: "15px",
    padding: "2rem",
  },
  text: {
    fontSize: "18px",
    color: "#feea3d",
    marginBottom: "15px",
  },
  callToAction: {
    fontSize: "20px",
    color: "#1abc9c",
    marginTop: "20px",
    fontWeight: "bold",
  },
  portfolioInvite: {
    fontSize: "20px",
    marginTop: "20px",
    color: "#ffffff",
  },
  link: {
    color: "#4FEDD2",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Announcement;
