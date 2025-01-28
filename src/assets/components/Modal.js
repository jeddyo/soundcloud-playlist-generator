import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const styles = {
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: '#191414', // Spotify's dark background
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
      maxWidth: '400px',
      width: '100%',
      color: '#fff',
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      textAlign: 'center',
      position: 'relative', // Needed for absolute positioning of the close button
    },
    closeButton: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      backgroundColor: 'transparent',
      border: 'none',
      color: '#b3b3b3',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '5px',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    closeButtonHover: {
      backgroundColor: '#535353', // Darker background on hover
      color: '#fff', // White on hover
    },
  };

  return (
    <div style={styles.modalOverlay} onClick={onClose}> {/* Close modal when clicking outside */}
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}> {/* Prevent clicks inside the modal from closing it */}
        <button
          style={styles.closeButton}
          onClick={onClose}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.closeButtonHover.backgroundColor;
            e.target.style.color = styles.closeButtonHover.color;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = styles.closeButton.color;
          }}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;