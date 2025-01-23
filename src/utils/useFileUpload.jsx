import { useState } from 'react';
import axios from 'axios';

const useFileUpload = () => {
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isNotesGenerated, setIsNotesGenerated] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [removeImages, setRemoveImages] = useState(true);
  const [imageFormat, setImageFormat] = useState('png');

  
  const showError = (message) => {
    setError(message);
    setTimeout(() => setError(''), 3000);
  };

  const handleFileChange = (selectedFile) => {
    if (selectedFile) {
      setFile(selectedFile);
      setError('');
      setIsFileUploaded(false);
      setNotes('');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const selectedFile = e.dataTransfer.files[0];
    
    if (selectedFile && (selectedFile.name.endsWith('.pptx') || selectedFile.name.endsWith('.ppt'))) {
      if (isNotesGenerated) {
        setNotes('');
        setIsNotesGenerated(false);
        setIsFileUploaded(false);
      }
      handleFileChange(selectedFile);
    } else {
      showError('Please upload a valid .ppt or .pptx file.');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleImageFormatChange = (event) => {
    setImageFormat(event.target.value);
  };

  const handleSubmit = async () => {
    if (!file) {
      showError('Please select a file to upload.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('removeImages', removeImages);
  
    setLoading(true);
  
    try {
      const response = await axios.post('https://slidestonotes-spring.onrender.com/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      setNotes(response.data);
      setIsNotesGenerated(true);
      setIsFileUploaded(true);
      setError('');
    } catch (err) {
      if (err.response) {
        const errorMessage = err.response.status === 429
          ? err.response.data || 'Too many requests - please wait a moment and try again.'
          : `Upload failed: ${err.response.data}`;
        showError(errorMessage);
      } else if (err.request) {
        showError('Upload failed: No response from server.');
      } else {
        showError(`Upload failed: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setNotes('');
    setIsNotesGenerated(false);
    setIsFileUploaded(false);
  };

  const handleDoAnotherOne = () => {
    handleRemoveFile();
  };

  const handleRemoveImagesChange = async (e) => {
      const checked = e.target.checked;
      setRemoveImages(checked);
    
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('removeImages', checked);
    
        try {
          setLoading(true);
          const response = await axios.post('https://slidestonotes-spring.onrender.com/api/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          setNotes(response.data);
        } catch (error) {
          if (error.response) {
            if (error.response.status === 429) {
              showError('Too many requests - please wait a moment and try again.');
            } else {
              showError(`Error updating notes: ${error.response.data}`);
            }
          } else if (error.request) {
            showError('Error: No response from server.');
          } else {
            showError(`Error: ${error.message}`);
          }
        } finally {
          setLoading(false);
      }
    }
  };
  

  return {
    file,
    notes,
    error,
    loading,
    isNotesGenerated,
    isFileUploaded,
    removeImages,
    imageFormat,
    handleFileChange,
    handleDrop,
    handleDragOver,
    handleImageFormatChange,
    handleSubmit,
    handleRemoveFile,
    handleDoAnotherOne,
    handleRemoveImagesChange,
  };
};

export default useFileUpload;