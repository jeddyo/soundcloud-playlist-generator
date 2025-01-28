import React, { useState } from 'react';
import PlaylistCard from '../assets/components/PlaylistCard';
import ChillVibesImage from '../assets/images/chillvibes.jpeg';
import WorkoutImage from '../assets/images/workout.jpg';
const Playlist = () => {
  const [playlists, setPlaylists] = useState([
    {
      id: 1,
      title: 'Chill Vibes',
      description: 'Relax and unwind with these soothing tracks.',
      image: ChillVibesImage,
      tracks: [
        { id: 1, title: 'Someone Like You', artist: 'Adele' },
        { id: 2, title: 'Fix You', artist: 'Coldplay' },
        { id: 3, title: 'Let Her Go', artist: 'Passenger' },
        { id: 4, title: 'Stay With Me', artist: 'Sam Smith' },
        { id: 5, title: 'Gravity', artist: 'John Mayer' },
      ],
    },
    {
      id: 2,
      title: 'Workout Hits',
      description: 'Pump up your energy with these upbeat tunes.',
      image: WorkoutImage,
      tracks: [
        { id: 1, title: 'Stronger', artist: 'Kanye West' },
        { id: 2, title: 'Eye of the Tiger', artist: 'Survivor' },
        { id: 3, title: 'Can’t Hold Us', artist: 'Macklemore & Ryan Lewis' },
        { id: 4, title: 'Lose Yourself', artist: 'Eminem' },
        { id: 5, title: 'Don’t Stop the Music', artist: 'Rihanna' },
      ],
    },
  ]);
  const [preferences, setPreferences] = useState({
    name: '',
    description: '',
    genre: 'Pop',
    mood: 'Happy',
    era: '2000s',
    tempo: 'Medium',
    instrumentation: 'Mixed',
    activity: 'Studying',
    image: null,
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const questions = [
    { label: 'Playlist Name', name: 'name', type: 'text', placeholder: 'Enter playlist name' },
    {
      label: 'Playlist Description',
      name: 'description',
      type: 'textarea',
      placeholder: 'Enter a description',
    },
    {
      label: 'Genre',
      name: 'genre',
      type: 'select',
      options: ['Pop', 'Rock', 'Jazz', 'Classical', 'Hip-Hop', 'Country', 'Reggae', 'Electronic'],
    },
    {
      label: 'Mood',
      name: 'mood',
      type: 'select',
      options: ['Happy', 'Relaxed', 'Energetic', 'Melancholy', 'Romantic'],
    },
    {
      label: 'Era',
      name: 'era',
      type: 'select',
      options: ['1980s', '1990s', '2000s', '2010s', '2020s'],
    },
    { label: 'Tempo', name: 'tempo', type: 'select', options: ['Slow', 'Medium', 'Fast', 'Variable'] },
    {
      label: 'Instrumentation',
      name: 'instrumentation',
      type: 'select',
      options: ['Acoustic', 'Electronic', 'Mixed'],
    },
    {
      label: 'Activity',
      name: 'activity',
      type: 'select',
      options: ['Party', 'Studying', 'Commuting', 'Sleeping', 'Exercise', 'Cooking'],
    },
    { label: 'Image', name: 'image', type: 'file' },
  ];
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: name === 'image' ? files[0] : value,
    }));
  };
  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://picsum.photos/500');
      setPreferences((prev) => ({
        ...prev,
        image: response.url,
      }));
    } catch (error) {
      console.error('Error fetching random image:', error);
      alert('Failed to fetch a random image. Please try again.');
    }
  };
  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/openai/generate-playlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preferences),
      });
      if (!response.ok) {
        alert('Failed to generate playlist. Please try again.');
        return;
      }
      const data = await response.json();
      setPlaylists((prev) => [...prev, data.newPlaylist]);
      setIsModalOpen(false);
      setCurrentStep(0);
    } catch (error) {
      console.error('Error generating playlist:', error);
      alert('An error occurred. Please try again.');
    }
  };
  const handleViewPlaylist = (playlist) => {
    console.log('Selected Playlist:', playlist);
    setSelectedPlaylist(playlist);
  };
  const handleCloseView = () => {
    setSelectedPlaylist(null);
  };
  const renderQuestion = () => {
    const question = questions[currentStep];
    if (question.name === 'image') {
      return (
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="image" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
              Attach an Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleInputChange}
              style={{ marginBottom: '10px' }}
            />
          </div>
          <button
            onClick={fetchRandomImage}
            style={{
              backgroundColor: '#1DB954',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              padding: '10px 20px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Find Random Image
          </button>
          {preferences.image && typeof preferences.image === 'string' && (
            <div>
              <img
                src={preferences.image}
                alt="Random Preview"
                style={{
                  maxWidth: '100%',
                  marginTop: '10px',
                  borderRadius: '10px',
                }}
              />
            </div>
          )}
        </div>
      );
    }
    switch (question.type) {
      case 'text':
        return (
          <input
            type="text"
            name={question.name}
            placeholder={question.placeholder}
            value={preferences[question.name]}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
          />
        );
      case 'textarea':
        return (
          <textarea
            name={question.name}
            placeholder={question.placeholder}
            value={preferences[question.name]}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
          />
        );
      case 'select':
        return (
          <select
            name={question.name}
            value={preferences[question.name]}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
          >
            {question.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };



return (
    <div style={{ padding: '40px', color: '#fff' }}>
      <h1 style={{ textAlign: 'center', color: '#1DB954' }}>Generate Your Playlist</h1>
      <button
        onClick={() => {
          setIsModalOpen(true);
          setCurrentStep(0);
        }}
        style={{
          backgroundColor: '#1DB954',
          color: '#fff',
          border: 'none',
          borderRadius: '25px',
          padding: '10px 20px',
          display: 'block',
          margin: '20px auto',
        }}
      >
        Open Playlist Generator
      </button>
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: '#1E1E1E',
              color: '#fff',
              padding: '30px',
              borderRadius: '15px',
              maxWidth: '500px',
              width: '90%',
              position: 'relative',
            }}
          >
            <button
              onClick={() => {
                setIsModalOpen(false);
                setCurrentStep(0);
              }}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              
            </button>
            <h2 style={{ marginBottom: '20px' }}>{questions[currentStep].label}</h2>
            {renderQuestion()}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  style={{
                    backgroundColor: '#444',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '10px 20px',
                  }}
                >
                  Back
                </button>
              )}
              {currentStep < questions.length - 1 ? (
                <button
                  onClick={handleNext}
                  style={{
                    backgroundColor: '#1DB954',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '10px 20px',
                  }}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: '#1DB954',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '10px 20px',
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <h2 style={{ textAlign: 'center', color: '#1DB954', marginTop: '40px' }}>Your Playlists</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginTop: '20px',
        }}
      >
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            title={playlist.title}
            description={playlist.description}
            image={playlist.image}
            onViewPlaylist={() => handleViewPlaylist(playlist)}
          />
        ))}
      </div>
      {selectedPlaylist && (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        fontFamily: 'Spotify Circular, Arial, sans-serif',
      }}
    >
      <div
        style={{
          backgroundColor: '#121212',
          color: '#fff',
          padding: '40px',
          borderRadius: '20px',
          maxWidth: '600px',
          width: '90%',
          textAlign: 'center',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
        }}
      >
        <img
          src={selectedPlaylist.image}
          alt={selectedPlaylist.title}
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '15px',
            marginBottom: '20px',
          }}
        />
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>
          {selectedPlaylist.title}
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#B3B3B3', marginBottom: '20px' }}>
          {selectedPlaylist.description}
        </p>
        <div style={{ textAlign: 'left', marginTop: '20px' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>Tracks:</h3>
          <ul style={{ paddingLeft: '20px', listStyleType: 'none', margin: 0 }}>
            {selectedPlaylist.tracks.map((track) => (
              <li
                key={track.id}
                style={{
                  fontSize: '1.1rem',
                  color: '#B3B3B3',
                  marginBottom: '8px',
                  lineHeight: '1.5',
                }}
              >
                <strong style={{ color: '#fff' }}>{track.title}</strong> by {track.artist}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={handleCloseView}
          style={{
            backgroundColor: '#1DB954',
            color: '#fff',
            border: 'none',
            borderRadius: '25px',
            padding: '15px 35px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Close
        </button>
      </div>
    </div>
  )}
    </div>
  );
};
export default Playlist;