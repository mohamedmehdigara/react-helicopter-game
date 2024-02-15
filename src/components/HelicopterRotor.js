// HelicopterRotor.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for rotor rotation
const rotateRotor = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled component for the rotor wrapper
const RotorWrapper = styled.div`
  position: absolute;
  left: ${({ x }) => `${x}px`};
  bottom: ${({ y }) => `${y}px`};
  width: 30px;
  height: 30px; /* Increase height for better visibility */
  transform-origin: center center;
  animation: ${rotateRotor} 0.8s linear infinite;
`;

// Styled component for individual rotor blades
const RotorBlade = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px; /* Adjust width of rotor blades */
  height: 100%; /* Make rotor blades span the entire height */
  background-color: #666;
  transform-origin: bottom center;
  transform: rotate(${({ angle }) => `${angle}deg`}); /* Rotate each blade individually */
`;

// HelicopterRotor component with props for position and number of blades
const HelicopterRotor = ({ x, y, blades = 3 }) => {
  // Calculate angle increment for each blade
  const angleIncrement = 360 / blades;

  // Generate rotor blades based on the number of blades
  const rotorBlades = Array.from({ length: blades }, (_, index) => (
    <RotorBlade key={index} angle={index * angleIncrement} />
  ));

  return <RotorWrapper x={x} y={y}>{rotorBlades}</RotorWrapper>;
};

export default HelicopterRotor;
