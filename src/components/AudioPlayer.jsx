
import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ file, onEnded }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current && file && file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => {
        audioRef.current.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', onEnded);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', onEnded);
      }
    };
  }, [onEnded]);

  if (!file || !(file instanceof Blob)) return null;

  return (
    <div>
      <h1>Now Playing</h1>
      <audio ref={audioRef} controls>
        Your browser does not support the audio element.
      </audio>
      <button></button>
    </div>
  );
};

export default AudioPlayer;
