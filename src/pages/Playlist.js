import React, { useState } from 'react';
import PlaylistCard from '../assets/components/PlaylistCard';
import ChillVibesImage from '../assets/images/chillvibes.jpeg';
import WorkoutImage from '../assets/images/workout.jpg';

const Playlist = () => {
  const [samplePlaylist, setSamplePlaylist] = useState([
    {
      id: 1,
      title: 'Chill Vibes',
      description: 'Relax and unwind with these soothing tracks.',
      image: ChillVibesImage,
    },
    {
      id: 2,
      title: 'Workout Hits',
      description: 'Pump up your energy with these upbeat tunes.',
      image: WorkoutImage,
    },
  ]);

  const [newPlaylist, setNewPlaylist] = useState({
    title: '',
    description: '',
    image: null,
  });

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlaylist((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewPlaylist((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPlaylist = () => {
    if (!newPlaylist.title || !newPlaylist.description) {
      alert('Please fill in all fields');
      return;
    }

    setSamplePlaylist((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: newPlaylist.title,
        description: newPlaylist.description,
        image: newPlaylist.image || ChillVibesImage, 
      },
    ]);


    setNewPlaylist({ title: '', description: '', image: null });
    setShowForm(false);
  };

  return (
    <div style={{ padding: '40px',  color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#1db954', marginBottom: '30px', fontSize: '2.5rem' }}>
        Your Generated Playlists
      </h1>
      <button
        style={{
          backgroundColor: '#1db954',
          color: '#fff',
          border: 'none',
          borderRadius: '25px',
          padding: '12px 20px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: '20px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Close Form' : 'Add New Playlist'}
      </button>

      {showForm && (
        <div style={{ margin: '20px auto', maxWidth: '500px' }}>
          <input
            type="text"
            name="title"
            placeholder="Playlist Title"
            value={newPlaylist.title}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}
          />
          <textarea
            name="description"
            placeholder="Playlist Description"
            value={newPlaylist.description}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              resize: 'none',
            }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
            }}
          />
          <button
            style={{
              backgroundColor: '#1db954',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              padding: '10px 20px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
            onClick={handleAddPlaylist}
          >
            Save Playlist
          </button>
        </div>
      )}

      <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {samplePlaylist.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            title={playlist.title}
            description={playlist.description}
            image={playlist.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
