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
      color: 'white',
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      textTransform: 'uppercase',
    },
    description: {
      color: '#eaeaea',
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
      marginTop: '30px', // Add margin to position the button
    },
    ctaHover: {
      backgroundColor: '#1ed760',
    },
    footer: {
      textAlign: 'center',
      marginTop: '30px', // Adjust margin to position the footer
      color: '#b3b3b3',
    },
    spotifyButton: {
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
    spotifyButtonHover: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    spotifyLogo: {
      width: '24px',
      height: '24px',
    },
    spotifyText: {
      color: '#1db954',
      fontWeight: 'bold',
    },
  };

  const handleButtonHover = (e, isHover) => {
    e.target.style.backgroundColor = isHover
      ? styles.ctaHover.backgroundColor
      : styles.cta.backgroundColor;
  };

  const handleSpotifyButtonHover = (e, isHover) => {
    e.target.style.backgroundColor = isHover
      ? styles.spotifyButtonHover.backgroundColor
      : 'transparent';
  };

  const handleGetStarted = () => {
    navigate('/playlist'); // Navigate to the playlist page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Spotify Playlist Generator</h1>

      <p style={styles.description}>
      Generate playlist based on the music you love.
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

      {/* Get Started Button */}
      <button
        style={styles.cta}
        onMouseEnter={(e) => handleButtonHover(e, true)}
        onMouseLeave={(e) => handleButtonHover(e, false)}
        onClick={handleGetStarted}
      >
        Get Started
      </button>

      {/* Footer Section */}
      <div style={styles.footer}>
        
        <button
          style={styles.spotifyButton}
          onMouseEnter={(e) => handleSpotifyButtonHover(e, true)}
          onMouseLeave={(e) => handleSpotifyButtonHover(e, false)}
          onClick={() => window.open('https://www.spotify.com', '_blank')}
        >
          <img
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