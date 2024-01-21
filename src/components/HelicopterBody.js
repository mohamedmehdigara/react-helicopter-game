// HelicopterBody.js
import React from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.div`
  position: absolute;
  left: ${({ x }) => `${x}px`};
  bottom: ${({ y }) => `${y}px`};
  width: 40px;
  height: 20px;
  background-color: #333;
  border-radius: 8px;
`;

const HelicopterBody = ({ x, y }) => {
  return <BodyWrapper x={x} y={y} />;
};

export default HelicopterBody;
