import React, { useRef } from 'react';
import AudioPlayer from 'react-audio-player';

// const AudioPlayerComponent = ({ audioUrl }) => {
//   const audioRef = useRef(null);

//   return (
//     <div>
//       <AudioPlayer ref={audioRef} src={audioUrl} controls />
//     </div>
//   );
// };

const AudioPlayerComponent = ({ audioUrl }) => {
    return (
      <div className="audio-player">
        <audio controls>
          <source src={audioUrl} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  };

export default AudioPlayerComponent;