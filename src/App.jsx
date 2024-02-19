
import React, { useState, useEffect } from 'react';
import FileUpload from './components/FileUpload';
import Playlist from './components/Playlist';
import AudioPlayer from './components/AudioPlayer';

const App = () => {
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState(null);

  useEffect(() => {
    const lastFile = JSON.parse(sessionStorage.getItem('lastFile'));
    if (lastFile) setCurrentFile(lastFile);
  }, []);

  const handleFileChange = (file) => {
    setFiles((prevFiles) => [...prevFiles, file]);
  };

  const handleFileSelect = (file) => {
    setCurrentFile(file);
    sessionStorage.setItem('lastFile', JSON.stringify(file));
  };

  return (
    <div>
      <h1>React Audio Player</h1>
      <div className="container-md" align='center'> 

      <FileUpload onFileChange={handleFileChange} />
      <Playlist files={files} onFileSelect={handleFileSelect} />
      <AudioPlayer file={currentFile} />
    </div>
    </div>
  );
};

export default App;




























