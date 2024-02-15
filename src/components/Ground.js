// Ground.js
import React from 'react';
import styled from 'styled-components';

// Styled component for the ground wrapper
const GroundWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px; /* Increase height for better visibility */
  background-color: #393939; /* Darker color for better contrast */
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5); /* Add shadow for depth */
  /* Add texture or pattern for a more realistic appearance */
  background-image: linear-gradient(to right, #555 2%, transparent 2.5%),
    linear-gradient(to bottom, #555 2%, transparent 2.5%);
  background-size: 30px 30px; /* Adjust size of texture */
`;

// Ground component
const Ground = () => {
  return <GroundWrapper />;
};

export default Ground;
