// Cloud.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveClouds = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const CloudWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  width: 80px;
  height: 40px;
  background-color: #fff;
  border-radius: 8px;
  animation: ${moveClouds} 30s linear infinite;
`;

const Cloud = ({ top, left }) => {
  return <CloudWrapper top={top} left={left} />;
};

export default Cloud;
