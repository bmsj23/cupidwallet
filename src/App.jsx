//App,jsx

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Confetti from 'react-confetti';
import axios from 'axios';

const sections = ["hero", "reasons", "gallery"];

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [audio] = useState(new Audio("music/robdeniel-sinta.mp3"));

  useEffect(() => {
    if (sections[currentSection] === "reasons" || sections[currentSection] === "gallery") {
      audio.play();
      audio.loop = true;
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [currentSection, audio]);

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={sections[currentSection]}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="section active"
        >
          {sections[currentSection] === "hero" && <HeroSection />}
          {sections[currentSection] === "reasons" && <ReasonsSection />}
          {sections[currentSection] === "gallery" && (
            <>
              <ImageGallery />
              <AnswerSection accepted={accepted} setAccepted={setAccepted} />
            </>
          )}
        </motion.div>
      </AnimatePresence>
      
      {currentSection < sections.length - 1 && (
        <button className="next-button" onClick={nextSection} style={{ textTransform: "none" }}>
          {currentSection === 0 ? "start" : "nixt"}
        </button>
      )}
    </div>
  );
};

const HeroSection = () => (
  <div className="hero-section enhanced">
    <h1 className="hero-title">Welcome to the Cupid Wallet ❤️</h1>
    <p className="hero-text">Join the waitlist by entering your email!</p>
    <input type="email" className="email-input" placeholder="Enter your email" />
  </div>
);

const reasonsData = [
  { text: "bc u r my baby u care for me 🥰", image: "images/reason1.png" },
  { text: "bc u make me happy and u support me 😊", image: "images/reason2.png" },
  { text: "bc u r erna hehi 😆", image: "images/reason3.png" }
];

const ReasonsSection = () => {
  const [currentReason, setCurrentReason] = useState(0);

  const nextReason = () => {
    setCurrentReason((prev) => (prev + 1) % reasonsData.length);
  };

  const prevReason = () => {
    setCurrentReason((prev) => (prev - 1 + reasonsData.length) % reasonsData.length);
  };

  return (
    <div className="reasons-section enhanced">
      <h3 className="reasons-title">wow, you're inside my heart na! Since Valentine's Day is approaching, I appreciate you, and here are some of the reasons why I love you! 💕</h3>
      <div className="slideshow-container">
        <motion.div
          key={currentReason}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="reason-slide"
        >
          <img src={reasonsData[currentReason].image} alt="reason" className="reason-image" />
          <p className="reason-text">{reasonsData[currentReason].text}</p>
        </motion.div>
        <button className="prev-button" onClick={prevReason}>❮</button>
        <button className="next-button" onClick={nextReason}>❯</button>
      </div>
    </div>
  );
};

const ImageGallery = () => {
  const images = [
    "images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg",
    "images/photo4.jpg", "images/photo5.jpg", "images/photo6.jpg",
    "images/photo7.jpg", "images/photo8.jpg", "images/photo9.jpg",
    "images/photo10.jpg"
  ];

  const [isPaused, setIsPaused] = useState(false);
  const galleryRef = useRef(null);

  return (
    <div className="gallery-section enhanced">
      <h2 className="gallery-title">Our Beautiful Memories 📸</h2>
      <div 
        className="slideshow-container" 
        ref={galleryRef} 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        <motion.div
          className="image-carousel"
          animate={{
            x: isPaused ? 0 : '-100%'
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }
          }}
          style={{ 
            display: 'flex',
            gap: '15px'
          }}
        >
          {[...images, ...images].map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt={`Memory ${index + 1}`} 
              className="gallery-image"
              style={{ pointerEvents: 'none' }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const AnswerSection = ({ accepted, setAccepted }) => {

  const handleYesClick = async () => {
    setAccepted(true);
  
    try {
      const response = await axios.post('http://localhost:3000/send-email');
      console.log(response.data); // logs the response from the server
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  const handleNoClick = () => alert("Wrong answer, try again! 😏");

  return (
    <div className="answer-section">
      {accepted && (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="answer-text">
            YAY! It is official, you are now my Valentine! ❤️🎉
          </motion.h2>
        </>
      )}
      {!accepted && (
        <>
          <h2 className="answer-title">Will you be my Valentine? 💘</h2>
          <div className="valentine-buttons">
            <button className="yes-button" onClick={handleYesClick}>Yes 💖</button>
            <button className="no-button" onClick={handleNoClick}>No 😏</button>
          </div>
        </>
      )}
    </div>
  );
};


export default App;
