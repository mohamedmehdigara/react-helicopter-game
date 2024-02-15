// HelicopterTail.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for tail rotor rotation
const rotateTailRotor = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled component for the tail wrapper
const TailWrapper = styled.div`
  position: absolute;
  left: ${({ x }) => `${x}px`};
  bottom: ${({ y }) => `${y}px`};
  width: 40px; /* Adjust width for better visibility */
  height: 8px; /* Adjust height for better visibility */
  background-color: #434343; /* Darker color for housing */
  border-radius: 4px;
  transform-origin: left center;
`;

// Styled component for the tail rotor
const TailRotor = styled.div`
  position: absolute;
  top: 50%;
  left: 4px; /* Adjust position within the housing */
  width: 20px; /* Adjust width for rotor */
  height: 4px; /* Adjust height for rotor */
  border-radius: 2px;
  transform-origin: left center;
  animation: ${rotateTailRotor} 0.8s linear infinite;
`;

// HelicopterTail component with props for position
const HelicopterTail = ({ x, y }) => {
  return (
    <TailWrapper x={x} y={y}>
      <TailRotor />
    </TailWrapper>
  );
};

export default HelicopterTail;
