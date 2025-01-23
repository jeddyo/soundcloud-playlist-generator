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
    spotifyButton: { // Monty
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      borderRadius: '20px',
      transition: 'background-color 0.3s ease',
    },
    spotifyButtonHover: { // Monty
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    spotifyLogo: { // Monty
      width: '24px',
      height: '24px',
    },
    spotifyText: { // Monty
      color: '#1db954',
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

  const handleSpotifyButtonHover = (e, isHover) => { // Monty
    e.target.style.backgroundColor = isHover
      ? styles.spotifyButtonHover.backgroundColor
      : 'transparent';
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
        <button // Monty
          style={styles.spotifyButton}
          onMouseEnter={(e) => handleSpotifyButtonHover(e, true)}
          onMouseLeave={(e) => handleSpotifyButtonHover(e, false)}
          onClick={() => window.open('https://www.spotify.com', '_blank')}
        >
          <img // Monty
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            alt="Spotify Logo"
            style={styles.spotifyLogo}
          />
          <span style={styles.spotifyText}>Visit Spotify</span> 
        </button>
      </div>
    </div>
  );
};

export default Home;