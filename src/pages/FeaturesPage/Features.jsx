import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Features.css';
import { Helmet } from 'react-helmet';

const cardData = [
  {
    title: 'Upload Presentations',
    description: 'Effortlessly upload PowerPoint presentations with a simple drag-and-drop interface.',
    imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/upload.png',
  },
  {
    title: 'Generate Notes',
    description: 'Automatically generate well-structured notes from your uploaded slides.',
    imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/clipboard.png',
  },
  {
    title: 'Download as .DOCX',
    description: 'Easily download your notes as a DOCX file with just one click.',
    imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/test-passed.png',
  },
];

const Features = () => {
  const navigate = useNavigate();

  const handleTryItClick = () => {
    navigate('/');
  };

  return (
    <div className="features-container">
      <Helmet>
        <title>Features - SlidesToNotes</title>
      </Helmet>

      <h1>Features</h1>

      <section className="intro-section">
        <h2>Welcome to Your Study Companion</h2>
        <p>
          Our application is designed to streamline your study process. 
          With a user-friendly interface, you can upload presentations, 
          generate notes, and easily download them as DOCX files.
        </p>
      </section>

      <div className="features-grid">
        {cardData.map((card, index) => (
          <div className="feature-card" key={index}>
            <img src={card.imgSrc} alt={card.title} className="feature-icon" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <button className="try-it-button" onClick={handleTryItClick}>Try it</button>

      <section className="conclusion-section">
        <h2>Maximize Your Learning Potential</h2>
        <p>
          Transform the way you study with our powerful features. 
          Whether you're preparing for exams or simply want to enhance your knowledge, 
          our application provides all the tools you need to succeed. 
          Join us today and take the first step towards effective learning!
        </p>
      </section>
    </div>
  );
};

export default Features;