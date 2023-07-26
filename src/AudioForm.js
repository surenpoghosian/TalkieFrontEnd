import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AudioPlayerComponent from './AudioPlayer';
import { BallTriangle } from 'react-loader-spinner'; // Replace BallTriangle with the desired loader component
import LogoTalkie from './LogoTalkie';
import Instructions from './instructions.pdf'

const AudioForm = () => {
    const [audioUrl, setAudioUrl] = useState(null); // Change to null to handle generated audio data
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
  
    const handlePromptChange = (e) => {
      setPrompt(e.target.value);
    };
  
    const generateAudio = async () => {
      setAudioUrl(null); // Reset audioUrl to null before generating new audio
      try {
        setLoading(true);
        const response = await axios.post('http://localhost:6969/api/generate_audio', { text: prompt }, { responseType: 'arraybuffer' });
        const blob = new Blob([response.data], { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(blob);
        setAudioUrl(audioUrl);
        toast.success('Audio generated successfully!', { autoClose: 3000 });
      } catch (error) {
        console.error('Error generating audio:', error);
        toast.error('Error generating audio. Please try again!', { autoClose: 3000 });
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="audio-player-container">
        <LogoTalkie/>
      <div className="audio-inputs">
        <input
          type="text"
          placeholder="Enter Text"
          value={prompt}
          onChange={handlePromptChange}
        />
        <button className='generateButton' onClick={generateAudio}>Generate Audio</button>
        <a
        className='instructionsLabel'
            href={Instructions}
            download="instructions.pdf" 
          >
            Prompting Instructions
      </a>
      </div>
      {loading ? ( 
        <div className="loader-container">
          <BallTriangle type="Oval" color="#c209c1" height={140} width={140} />
        </div>
      ) : (
        audioUrl && <AudioPlayerComponent audioUrl={audioUrl} /> // Render the AudioPlayerComponent when loading is false
      )}
      <ToastContainer />
    </div>
  );
};

export default AudioForm;
