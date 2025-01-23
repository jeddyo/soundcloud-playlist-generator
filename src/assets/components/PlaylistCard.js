import React from 'react';

const PlaylistCard = ({ title, description, image, onViewPlaylist }) => {
  const styles = {
    card: {
      backgroundColor: '#191414', 
      borderRadius: '15px',
      overflow: 'hidden',
      textAlign: 'center',
      padding: '20px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.5)', 
      transition: 'transform 0.3s, background-color 0.3s',
      width: '100%', 
      maxWidth: '300px',
    },
    cardHover: {
      transform: 'scale(1.05)',
      backgroundColor: '#1db954',
    },
    image: {
      width: '100%',
      height: '300px', 
      objectFit: 'cover',
      borderRadius: '10px',
      marginBottom: '15px',
    },
    title: {
      fontSize: '1.5rem', 
      color: '#fff',
      marginBottom: '10px',
    },
    description: {
      fontSize: '1.1rem',
      color: '#b3b3b3', 
      marginBottom: '20px',
    },
    button: {
      backgroundColor: '#1db954',
      color: '#fff',
      border: 'none',
      borderRadius: '25px',
      padding: '12px 25px', 
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#1ed760', 
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.cardHover.transform;
        e.currentTarget.style.backgroundColor = styles.cardHover.backgroundColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.backgroundColor = styles.card.backgroundColor;
      }}
    >
      <img src={image} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        onClick={onViewPlaylist}
      >
        View Playlist
      </button>
    </div>
  );
};

export default PlaylistCard;
