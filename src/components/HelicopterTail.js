// HelicopterTail.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateTailRotor = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const TailWrapper = styled.div`
position: absolute;
left: ${({ x }) => `${x}px`};
bottom: ${({ y }) => `${y}px`};
width: 20px;
height: 4px;
background-color: #666;
border-radius: 2px;
transform-origin: left center;
animation: ${rotateTailRotor} 0.8s linear infinite;
/* Add more detailed rotor blades and housing */
`;

const HelicopterTail = ({ x, y }) => {
  return <TailWrapper x={x} y={y} />;
};

export default HelicopterTail;
