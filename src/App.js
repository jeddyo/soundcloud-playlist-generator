import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
    <Router>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <Navbar />
        <nav style={{ textAlign: 'center', margin: '10px' }}>
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: isDarkMode ? '#1db954' : '#f0f0f0',
              color: isDarkMode ? '#fff' : '#000',
              border: '2px solid',
              borderRadius: '5px',
              padding: '10px 20px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
          >
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </nav>
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
