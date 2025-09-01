"use client";
import { useState, useRef } from "react";

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const removeFile = () => {
    setFile(null);
    fileInputRef.current.value = null; // reset input
  };

  return (
    <div className="upload-card">
      <h2 className="upload-title">Upload Your Resume</h2>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <button
        type="button"
        className="upload-btn"
        onClick={() => fileInputRef.current.click()}
      >
        Choose File
      </button>

      {file && (
        <div className="selected-file">
          <span className="file-name">{file.name}</span>
          <button className="remove-file" onClick={removeFile}>
            &times;
          </button>
        </div>
      )}

      <button className="analyze-btn">Analyze Resume</button>
    </div>
  );
}
