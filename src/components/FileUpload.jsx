import React from 'react';
import  "bootstrap/dist/css/bootstrap.min.css";


const FileUpload = ({onFileChange}) => {
    const  handleFileChange = (event) =>{
        const file = event.target.files[0];
        onFileChange(file)
    }

    return (
        <div>
            <h1>File Upload</h1>
            <input type="file" accept=".mp3"  multiple onChange={handleFileChange} align='center' />
            </div>



        

        
        
    )

}


export default FileUpload