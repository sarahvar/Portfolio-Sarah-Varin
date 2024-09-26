import React from 'react';

const Announcement = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>✨ Grande nouvelle ! ✨</h2>
      <p style={styles.text}>
        Je suis fière d'annoncer l'achèvement de ma formation en{' '}
        <strong>développement d'applications JavaScript/React</strong> 🎉, finalisée le{' '}
        <strong>13 août 2024</strong>, après <strong>1 an et 2 mois</strong> de travail intense.
      </p>
      <p style={styles.text}>
        💻 <strong>Développeuse web passionnée</strong>, je suis prête à transformer vos idées en{' '}
        <strong>applications web modernes et performantes</strong>.
      </p>
      <p style={styles.text}>
        🌟 <strong>Prête à relever tous les défis techniques</strong>, je mets mon expertise au service de projets
        innovants pour propulser votre entreprise vers le succès.
      </p>
      <p style={styles.callToAction}>👉 <strong>Envie de collaborer ?</strong> Let's build something amazing together !</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#black',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#4FEDD2',
    marginBottom: '10px',
  },
  text: {
    fontSize: '18px',
    color: 'white',
    marginBottom: '10px',
  },
  callToAction: {
    fontSize: '20px',
    color: '#007BFF',
    marginTop: '20px',
    fontWeight: 'bold',
  },
};

export default Announcement;
