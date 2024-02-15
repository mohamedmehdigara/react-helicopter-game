// HelicopterBody.js
import React from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.div`
position: absolute;
left: ${({ x }) => `${x}px`};
bottom: ${({ y }) => `${y}px`};
width: 120px;
height: 40px;
background-color: #434343;
border-radius: 10px;
border: 2px solid #333;
box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
/* Add more details like doors, windows, and panels */
`;

const HelicopterBody = ({ x, y }) => {
  return <BodyWrapper x={x} y={y} />;
};

export default HelicopterBody;
