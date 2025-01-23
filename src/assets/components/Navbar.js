import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      background: 'linear-gradient(135deg, #1db954, #191414)', 
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    },
    brand: {
      color: '#ffffff', 
      fontSize: '2rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      fontFamily: "'Montserrat', sans-serif", 
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)', 
      transition: 'transform 0.3s ease',
    },
    brandHover: {
      transform: 'scale(1.1)', 
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
    },
    link: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1.1rem',
      padding: '8px 15px',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    linkHover: {
      backgroundColor: '#1ed760', 
      color: '#000', 
    },
  };

  const handleBrandHover = (e, isHover) => {
    e.target.style.transform = isHover ? styles.brandHover.transform : 'none';
  };

  const handleLinkHover = (e, isHover) => {
    e.target.style.backgroundColor = isHover
      ? styles.linkHover.backgroundColor
      : 'transparent';
    e.target.style.color = isHover ? styles.linkHover.color : styles.link.color;
  };

  return (
    <nav style={styles.navbar}>
      <Link
        to="/"
        style={styles.brand}
        onMouseEnter={(e) => handleBrandHover(e, true)}
        onMouseLeave={(e) => handleBrandHover(e, false)}
      >
        Spotify Playlist Generator
      </Link>
      <div style={styles.navLinks}>
        <Link
          to="/"
          style={styles.link}
          onMouseEnter={(e) => handleLinkHover(e, true)}
          onMouseLeave={(e) => handleLinkHover(e, false)}
        >
          Home
        </Link>
        <Link
          to="/playlist"
          style={styles.link}
          onMouseEnter={(e) => handleLinkHover(e, true)}
          onMouseLeave={(e) => handleLinkHover(e, false)}
        >
          Playlists
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
