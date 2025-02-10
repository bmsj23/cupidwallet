// HeroSection.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroContainer = styled.div`
  text-align: center;
  padding: 100px 20px; /* Increased padding */
  background: linear-gradient(to bottom, #fffaf0, #f0f8ff); /* Gradient background */
  animation: ${fadeIn} 1s ease-in-out; /* Fade-in animation */
`;

const HeroTitle = styled.h1`
  font-size: 3em; /* Larger title */
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5em;
  color: #777; /* Muted color */
  margin-bottom: 30px;
`;

const HeroText = styled.p`
  font-size: 1.2em;
  max-width: 600px;
  margin: 0 auto; /* Center the text */
`;

function HeroSection() {
  return (
    <HeroContainer>
      <HeroTitle>Roses are red, Violets are blue...</HeroTitle>
      
    </HeroContainer>
  );
}

export default HeroSection;
