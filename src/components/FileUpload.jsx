import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const FileUpload = ({ onFileChange }) => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        onFileChange(file);
    }

    return (
        <div className="container1-md">
            <h1>File Upload</h1>
            <input type="file" accept=".mp3" multiple onChange={handleFileChange} /><br />
        </div>
    );
}

export default FileUpload;
