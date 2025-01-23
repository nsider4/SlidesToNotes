import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                
                <div className="footer-links">
                    <a href="/" className="footer-link">Home</a>
                    <a href="/features" className="footer-link">Features</a>
                    <a href="/about" className="footer-link">About</a>
                </div>

                <div className="social-media">
                    <a href="https://www.facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" />
                    </a>
                    <a href="https://www.twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter-squared.png" alt="Twitter" />
                    </a>
                    <a href="https://www.instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
                    </a>
                </div>
                
                <div className="copyright">
                    &copy; {new Date().getFullYear()} SlidesToNotes. All rights reserved. Icons by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a>.
                </div>
            </div>
        </footer>
    );
};

export default Footer;