// import React, { useRef, useEffect, useState } from 'react';
// import { FaPlayCircle, FaPauseCircle, FaForward, FaBackward } from 'react-icons/fa'; // Import icons from react-icons

// const AudioPlayer = ({ file, onEnded }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);

//   useEffect(() => {
//     if (audioRef.current && file && file instanceof Blob) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         audioRef.current.src = reader.result;
//       };
//       reader.readAsDataURL(file);
//     }
//   }, [file]);

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.addEventListener('ended', () => {
//         setIsPlaying(false); // When audio ends, set isPlaying to false
//         onEnded(); // Call the onEnded callback
//       });
//     }
//     return () => {
//       if (audioRef.current) {
//         audioRef.current.removeEventListener('ended', () => {
//           setIsPlaying(false); // Cleanup: Remove event listener
//           onEnded(); // Call the onEnded callback
//         });
//       }
//     };
//   }, [onEnded]);

//   const togglePlayPause = () => {
//     if (audioRef.current.paused) {
//       audioRef.current.play();
//       setIsPlaying(true);
//     } else {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   const skipBackward = () => {
//     audioRef.current.currentTime -= 10; // Skip 10 seconds backward
//   };

//   const skipForward = () => {
//     audioRef.current.currentTime += 10; // Skip 10 seconds forward
//   };

//   if (!file || !(file instanceof Blob)) return null;

//   return (
//     <div className="audio-controls">
//       <button onClick={skipBackward}>
//         <FaBackward /> {/* Backward button */}
//       </button>
//       <button onClick={togglePlayPause}>
//         {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />} {/* Toggle play/pause icon */}
//       </button>
//       <button onClick={skipForward}>
//         <FaForward /> {/* Forward button */}
//       </button>
//       <audio ref={audioRef} controls />
//     </div>
//   );
// };

// export default AudioPlayer;


import React, { useRef, useEffect, useState } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa'; 

const AudioPlayer = ({ file, onEnded }) => {
  const [isPlaying, setIsPlaying] = useState(false);
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
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false); // When audio ends, set isPlaying to false
        onEnded(); // Call the onEnded callbacl
      });
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', () => {
          setIsPlaying(false); // Cleanup: Remove event listener
          onEnded(); // Call the onEnded callback
        });
      }
    };
  }, [onEnded]);

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 10; // Skip 10 seconds backward
  };

  const skipForward = () => {
    audioRef.current.currentTime += 10; // Skip 10 seconds forward
  };

  if (!file || !(file instanceof Blob)) return null;

  return (
    <div className="audio-player">
      <audio ref={audioRef} controls />
      <div className="audio-controls">
        <button onClick={skipBackward}>
          <FaBackward /> {/* Backward button */}
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />} {/* Toggle play/pause icon */}
        </button>
        <button onClick={skipForward}>
          <FaForward /> {/* Forward button */}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
