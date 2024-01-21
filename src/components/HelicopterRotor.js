// HelicopterRotor.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateRotor = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotorWrapper = styled.div`
  position: absolute;
  left: ${({ x }) => `${x}px`};
  bottom: ${({ y }) => `${y}px`};
  width: 30px;
  height: 2px;
  background-color: #666;
  transform-origin: left center;
  animation: ${rotateRotor} 0.8s linear infinite;
`;

const HelicopterRotor = ({ x, y }) => {
  return <RotorWrapper x={x} y={y} />;
};

export default HelicopterRotor;
