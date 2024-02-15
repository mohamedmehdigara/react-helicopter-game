// Cloud.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for cloud movement
const moveClouds = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Define keyframes for subtle cloud animations
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

// Styled component for the cloud
const CloudWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: #fff;
  border-radius: 50%;
  animation: ${moveClouds} 60s linear infinite, ${floatAnimation} 5s ease-in-out infinite alternate;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Add a subtle shadow effect */
`;

// Cloud component with props for customization
const Cloud = ({ top, left, width = 80, height = 40 }) => {
  return <CloudWrapper top={top} left={left} width={width} height={height} />;
};

export default Cloud;
