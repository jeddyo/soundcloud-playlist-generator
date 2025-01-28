import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import './assets/components/global.css';
import Navbar from './assets/components/Navbar';
import AppRoutes from './routes';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AuthProvider> {/* Wrap the entire app with AuthProvider */}
      <Router>
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <Navbar />
        <nav style={{ textAlign: 'center', margin: '10px' }}>
          <button
            onClick={toggleTheme}
            style={{
              position: 'fixed',
              bottom: '10px',
              right: '20px',
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              cursor: 'pointer',
              scale: '.6',
            }}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </nav>
        <AppRoutes />
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;