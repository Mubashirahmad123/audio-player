// import React, { useRef, useEffect } from 'react';

// const AudioPlayer = ({ file }) => {
//   const audioRef = useRef(null);

//   if (!file) return null;

//   return (
//     <div>
//       <h1>Now Playing</h1>
//       <audio ref={audioRef} controls>
//         <source src={URL.createObjectURL(file)} type="audio/mp3" />
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// };

// export default AudioPlayer;



import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ file, onEnded }) => {
  const audioRef = useRef(null);

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

  if (!file) return null;

  return (
    <div>
      <h1>Now Playing</h1>
      <audio ref={audioRef} controls>
        <source src={URL.createObjectURL(file)} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
