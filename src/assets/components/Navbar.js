import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Modal from './Modal'; // Import the Modal component
import axios from 'axios'; // For API requests

const Navbar = () => {
  const { token, setToken } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      color: '#ffffff', // White text for better contrast
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      fontFamily: "'Poppins', sans-serif", // Modern font
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', // Dark shadow for better visibility
      transition: 'transform 0.3s ease, opacity 0.3s ease',
    },
    brandHover: {
      transform: 'scale(1.05)', // Slight scale on hover
      opacity: '0.9', // Slight fade on hover
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
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
    loginButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#ffffff',
      fontSize: '1.1rem',
      padding: '8px 15px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    loginButtonHover: {
      backgroundColor: '#1ed760',
      color: '#000',
    },
  };

  const handleBrandHover = (e, isHover) => {
    e.target.style.transform = isHover ? styles.brandHover.transform : 'none';
    e.target.style.opacity = isHover ? styles.brandHover.opacity : '1';
  };

  const handleLinkHover = (e, isHover) => {
    e.target.style.backgroundColor = isHover
      ? styles.linkHover.backgroundColor
      : 'transparent';
    e.target.style.color = isHover ? styles.linkHover.color : styles.link.color;
  };

  const handleLoginSignup = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleLogout = () => {
    setToken(''); // Clear the token
    localStorage.removeItem('token'); // Remove token from localStorage
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/auth/login' : '/auth/signup';
    try {
      const response = await axios.post(endpoint, { email, password });
      if (isLogin) {
        setToken(response.data.token); // Save the token in context
        setIsModalOpen(false); // Close the modal after successful login
      } else {
        setIsLogin(true); // Switch to login form after successful signup
        alert('Signup successful! Please log in.');
      }
    } catch (error) {
      console.error(isLogin ? 'Login failed:' : 'Signup failed:', error.response?.data);
      alert(isLogin ? 'Login failed. Please try again.' : 'Signup failed. Please try again.');
    }
  };

  return (
    <>
      <nav style={styles.navbar}>
        {/* Brand Logo */}
        <Link
          to="/"
          style={styles.brand}
          onMouseEnter={(e) => handleBrandHover(e, true)}
          onMouseLeave={(e) => handleBrandHover(e, false)}
        >
          Spotify Playlist Generator
        </Link>

        {/* Navigation Links */}
        <div style={styles.navLinks}>
          {/* Login/Signup or Logout Button */}
          {token ? (
            <button
              style={styles.loginButton}
              onMouseEnter={(e) => handleLinkHover(e, true)}
              onMouseLeave={(e) => handleLinkHover(e, false)}
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              style={styles.loginButton}
              onMouseEnter={(e) => handleLinkHover(e, true)}
              onMouseLeave={(e) => handleLinkHover(e, false)}
              onClick={handleLoginSignup}
            >
              {isLogin ? 'Login' : 'Signup'}
            </button>
          )}

          {/* Home Button */}
          <Link
            to="/"
            style={styles.link}
            onMouseEnter={(e) => handleLinkHover(e, true)}
            onMouseLeave={(e) => handleLinkHover(e, false)}
          >
            Home
          </Link>

          {/* Playlists Button */}
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

      {/* Login/Signup Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 style={{ color: '#1db954', marginBottom: '20px' }}>
          {isLogin ? 'Login' : 'Signup'}
        </h2>
        <form onSubmit={handleAuthSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              borderRadius: '5px',
              border: '1px solid #535353',
              backgroundColor: '#282828',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none',
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              borderRadius: '5px',
              border: '1px solid #535353',
              backgroundColor: '#282828',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none',
            }}
            required
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#1db954',
              border: 'none',
              borderRadius: '5px',
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '20px',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#1ed760')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#1db954')}
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>
        <p
          style={{
            color: '#b3b3b3',
            marginTop: '15px',
            cursor: 'pointer',
            fontSize: '0.9rem',
          }}
          onClick={() => setIsLogin(!isLogin)}
          onMouseEnter={(e) => (e.target.style.color = '#fff')}
          onMouseLeave={(e) => (e.target.style.color = '#b3b3b3')}
        >
          {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
        </p>
      </Modal>
    </>
  );
};

export default Navbar;