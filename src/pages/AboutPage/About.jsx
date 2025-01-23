import React from 'react';
import './About.css';
import { Helmet } from 'react-helmet';

function About() {
    return (
        <div className="about-container">
            <Helmet>
                <title>About - SlidesToNotes</title>
            </Helmet>
            <h2 className="about-title">About SlidesToNotes</h2> 
            
            <section className="about-section about-why-us">
                <h3 className="about-subtitle">Why Use SlidesToNotes?</h3>
                <p className="about-text">
                    SlidesToNotes simplifies the process of converting your PowerPoint presentations into well-organized notes. Our tool uses intelligent algorithms to extract key points, saving you hours of manual effort and enabling more efficient studying.
                </p>
            </section>

            <section className="about-section about-beneficiaries">
                <h3 className="about-subtitle">Who Can Benefit?</h3>
                <div className="about-benefits">
                    <div className="about-benefit">
                        <strong>Students:</strong>
                        <p>Transform lectures or class presentations into concise notes, making exam preparation easier and faster.</p>
                    </div>
                    <div className="about-benefit">
                        <strong>Educators:</strong>
                        <p>Generate structured handouts from your teaching materials, helping students focus on key takeaways.</p>
                    </div>
                    <div className="about-benefit">
                        <strong>Professionals:</strong>
                        <p>Create summaries of team presentations or workshops for quick reference and effective communication.</p>
                    </div>
                </div>
            </section>

            <section className="about-section about-history">
                <h3 className="about-subtitle">A Brief History of SlidesToNotes</h3>
                <div className="about-history">
                    <div className="timeline-container">
                        <div className="timeline">
                            <div className="timeline-content">
                            <div className="timeline-item">
                                <div className="about-card left">
                                    <div className="date">2022</div>
                                    <p>The idea of automating note generation was born to address the challenges faced by students in summarizing lengthy presentations.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="about-card right">
                                    <div className="date">2023</div>
                                    <p>A detailed plan was made to code the solution, outlining the features and goals for the project.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="about-card left">
                                    <div className="date">2024</div>
                                    <p>Coding began on the project, focusing on extracting key content from slides and developing the underlying algorithms.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="about-card right">
                                    <div className="date">2025</div>
                                    <p>SlidesToNotes was officially released and completed, offering a fully functional automated note generation solution.</p>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section about-get-started">
                <h3 className="about-subtitle">Get Started</h3>
                <p className="about-text">
                    <a className="about-link" href='/'>Upload your slides</a> today and let SlidesToNotes do the hard work for you. Streamline your study or work process with ease!
                </p>
            </section>
        </div>
    );
}

export default About;