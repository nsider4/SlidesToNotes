import React from 'react';
import { Helmet } from 'react-helmet';
import UploadComponent from '../../components/UploadSection/UploadComponent';
import './Home.css';
import NoteCount from '../../components/UploadSection/uploads/NoteCount';

const cardData = [
  {
    title: 'Efficient Study Tools',
    description: 'Utilize intelligent tools to streamline your study process.',
    imgSrc: 'https://img.icons8.com/ios/100/000000/clipboard.png',
  },
  {
    title: 'Generate Notes Quickly',
    description: 'Turn your PowerPoint presentations into concise notes effortlessly and free.',
    imgSrc: 'https://img.icons8.com/color/144/000000/note.png',
  },
  {
    title: 'Interactive Learning',
    description: 'Engage with interactive learning materials tailored to your needs.',
    imgSrc: 'https://img.icons8.com/color/144/000000/learning.png',
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>SlidesToNotes</title>
      </Helmet>

      <h1>Welcome to SlidesToNotes</h1>
      <p class="main-description">
        Upload your PowerPoint presentations to let us generate notes for free! 
        SlidesToNotes is an AI-free text extractor for PowerPoint files. 
      </p>
      
      <UploadComponent />
      <NoteCount />
      
      <div className="info-cards">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imgSrc} alt={card.title} className="card-image" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      
      <section className="additional-info">
        <h2>How We Help You</h2>

        <div className="info-content">
          <div className="text-section">
            <p>
              <span className="highlight">Transform your learning experience.</span> <br />
              Our app automates note-taking from .ppt and .pptx files, saving you time and effort. Convert your PowerPoint slides into detailed, organized notes in just a few clicks.
            </p>
            <p>
              Our intelligent algorithms ensure precision, providing you with study materials tailored to your needs. Make your sessions more productive and efficient!
            </p>
          </div>
          <img
            src="https://i.imgur.com/ZNtTYhk.png"
            alt="Interactive learning process"
          />
        </div>
        

        <div className="info-content">
          <div className="text-section">
            <p>
              Beyond simple note generation, we give you the choice to <span className="highlight">easily manage it</span> with interactive tools. Structure and improve your learning process like never before. Whether you’re preparing for exams, working on projects, or organizing research, our platform streamlines everything.
            </p>
            <p>
              Stay organized, save time, and focus on what matters—your academic success. With advanced features that adapt to your needs, you’ll always be one step ahead in your learning journey.
            </p>
          </div>
          <img
            src="https://i.imgur.com/Qpb7aUU.png"
            alt="Engaging study tools"
          />
        </div>

        <div className="info-content">
          <div className="text-section">
            <p>
              You can now <span className="highlight">download the metadata</span> for your uploaded presentations, including the notes and images, all in a well-formatted package.
            </p>
            <p>
              The metadata includes detailed notes and images extracted from your PowerPoint file, organized and ready for use in your study materials.
            </p>
          </div>
          <img
            src="https://i.imgur.com/JTSPVlK.png"
            alt="Metadata download example"
            className="metadata-image"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;