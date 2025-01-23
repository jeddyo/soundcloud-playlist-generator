import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
  const navigate = useNavigate(); 

  const styles = {
    container: {
      background: 'linear-gradient(135deg, #1db954, #191414)',
      borderRadius: '20px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
      padding: '50px',
      maxWidth: '800px',
      margin: '50px auto',
      textAlign: 'center',
      color: '#fff',
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    },
    title: {
      color: '#1db954',
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      textTransform: 'uppercase',
    },
    description: {
      color: '#b3b3b3',
      fontSize: '1.2rem',
      lineHeight: '1.6',
      marginBottom: '30px',
    },
    featuresSection: {
      textAlign: 'left',
      marginTop: '30px',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
    },
    featureIcon: {
      fontSize: '1.5rem',
      marginRight: '10px',
      color: '#1db954',
    },
    cta: {
      backgroundColor: '#1db954',
      border: 'none',
      color: '#fff',
      fontSize: '1.2rem',
      padding: '10px 30px',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    ctaHover: {
      backgroundColor: '#1ed760',
    },
    footer: {
      textAlign: 'center',
      marginTop: '50px',
      color: '#b3b3b3',
    },
    footerLink: {
      color: '#1db954',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  const handleButtonHover = (e, isHover) => {
    e.target.style.backgroundColor = isHover
      ? styles.ctaHover.backgroundColor
      : styles.cta.backgroundColor;
  };

  const handleGetStarted = () => {
    navigate('/playlist');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Spotify Playlist Generator</h1>

      <p style={styles.description}>
        Discover playlists that match your mood, activity, or event with just a
        few clicks. Turn your ideas into the perfect soundtrack!
      </p>

      <div style={styles.featuresSection}>
        <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '20px' }}>
          Why Choose Us?
        </h2>
        <div style={styles.featureItem}>
          <span style={styles.featureIcon}>🎵</span>
          <p>Personalized playlists for every occasion</p>
        </div>
        <div style={styles.featureItem}>
          <span style={styles.featureIcon}>⚡</span>
          <p>Fast and intuitive user experience</p>
        </div>
        <div style={styles.featureItem}>
          <span style={styles.featureIcon}>🌎</span>
          <p>Access to a global library of tracks</p>
        </div>
        <div style={styles.featureItem}>
          <span style={styles.featureIcon}>📈</span>
          <p>Stay up-to-date with trending tracks</p>
        </div>
      </div>

      {}
      <button
        style={styles.cta}
        onMouseEnter={(e) => handleButtonHover(e, true)}
        onMouseLeave={(e) => handleButtonHover(e, false)}
        onClick={handleGetStarted}
      >
        Get Started
      </button>

      <div style={styles.footer}>
        <p>Made by TEAM 5 (Monty, John, Bikram, Arman, Amir)</p>
        <a
          href="https://www.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.footerLink}
        >
          Visit Spotify
        </a>
      </div>
    </div>
  );
};

export default Home;
