import React from 'react';

const TrackList = ({ tracks }) => {
  return (
    <div className="mt-4">
      <h3>Track List</h3>
      <ul className="list-group">
        {tracks.map((track, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{track.name}</strong> by {track.artist}
            </div>
            <span className="badge bg-primary rounded-pill">{track.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
