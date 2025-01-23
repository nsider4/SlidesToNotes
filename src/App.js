import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import Features from './pages/FeaturesPage/Features';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
