import React, { useState } from 'react';
import astralmedia from '../assets/astralmeditation.mp3';
// MusicPlayer component code here...

const BinauralBeatsPlayer = () => {
  const binauralBeats = [
    { name: 'Alpha Wave', src: astralmedia },
    { name: 'Theta Wave', src: astralmedia },
    { name: 'Delta Wave', src: astralmedia },
    // Add more binaural beats as needed
  ];

  const [selectedBeat, setSelectedBeat] = useState(null);

  const selectBeat = (beat) => {
    setSelectedBeat(beat);
  };

  return (
    <div>
      <h2>Select a Binaural Beat</h2>
      <ul>
        {binauralBeats.map((beat, index) => (
          <li key={index} onClick={() => selectBeat(beat)}>
            {beat.name}
          </li>
        ))}
      </ul>
      {selectedBeat && (
        <div>
          <h3>Now Playing: {selectedBeat.name}</h3>
          <MusicPlayer src={selectedBeat.src} />
        </div>
      )}
    </div>
  );
};

export default BinauralBeatsPlayer;
