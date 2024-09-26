import React from "react";

const Announcement = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>✨ Grande nouvelle ! ✨</h2>
      <p style={styles.text}>
        Après <strong>plus de 2 ans d'aventures passionnantes dans le développement web</strong>, 
        je suis très fière de partager que j'ai brillamment réussi ma dernière formation en{' '}
        <strong>développement d'applications JavaScript/React</strong> 🎉, finalisée le{' '}
        <strong>13 août 2024</strong> !
      </p>
      <p style={styles.text}>
        💻 En tant que <strong>Développeuse web passionnée</strong>, je suis prête à transformer vos idées en{' '}
        <strong>applications web modernes et performantes</strong>.
      </p>
      <p style={styles.text}>
        🌟 <strong>Prête à relever tous les défis techniques</strong>, je suis là pour contribuer au succès de vos projets innovants.
      </p>
      <p style={styles.callToAction}>
        👉 <strong>Envie de collaborer ?</strong> Let's build something amazing together!
      </p>
      <p style={styles.portfolioInvite}>
      🌐 N'hésitez pas à plonger dans mon <strong>portfolio</strong> pour découvrir des projets captivants qui pourraient inspirer notre collaboration !
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#black",
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
    color: "white",
    marginBottom: "15px",
  },
  callToAction: {
    fontSize: "20px",
    color: "#1abc9c",
    marginTop: "20px",
    fontWeight: "bold",
  },
  portfolioInvite: {
    fontSize: '20px',
    marginTop: '20px',
    color: '#ffffff',
  },
};

export default Announcement;
