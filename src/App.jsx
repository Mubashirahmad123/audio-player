import React, { useState, useEffect } from 'react';
import FileUpload from './components/FileUpload';
import Playlist from './components/Playlist';
import AudioPlayer from './components/AudioPlayer';

const App = () => {
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState(null);

  // useEffect(() => {
  //   const lastFile = JSON.parse(localStorage.getItem('lastFile'));
  //   if (lastFile) setCurrentFile(lastFile);
  // }, []);

  useEffect(() => {
    const lastFile = JSON.parse(localStorage.getItem('lastFile')); // Retrieve the file object from localStorage
    if (lastFile) {
      setCurrentFile(lastFile); // Set the file object as the currentFile
      console.log('Setting current file:', lastFile);
    }
  }, []);
  

  const handleFileChange = (file) => {
    setFiles((prevFiles) => [...prevFiles, file]);
  };

  const handleFileSelect = (file) => {
    setCurrentFile(file);
    localStorage.setItem('lastFile', JSON.stringify(file));
  };

  return (
    <div>
      <h1>React Audio Player</h1>
      <div className="container1-md">
        <FileUpload onFileChange={handleFileChange} />
      </div>
      <div className="container-md">
        <Playlist files={files} onFileSelect={handleFileSelect} />
      </div>
      <div className="container-md">
        <AudioPlayer file={currentFile} />
      </div>
    </div>
  );
};

export default App;
