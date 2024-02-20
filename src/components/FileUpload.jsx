import React, { useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const FileUpload = ({ onFileChange }) => {
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        onFileChange(file);
    }

    const handleButtonClick = () => {
        fileInputRef.current.click();
    }

    return (
        <div className="container1-md">
            <h2>Upload</h2>
            <input
                type="file"
                ref={fileInputRef}
                accept=".mp3"
                multiple
                onChange={handleFileChange}
                style={{ display: 'none' }} 
            />
            <button type="button" className="btn btn-primary"  onClick={handleButtonClick}>Choose File</button>
        </div>
    );
}

export default FileUpload;
