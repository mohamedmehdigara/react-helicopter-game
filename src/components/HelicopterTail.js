// HelicopterTail.js
import React from 'react';
import styled from 'styled-components';

const TailWrapper = styled.div`
  position: absolute;
  left: ${({ x }) => `${x}px`};
  bottom: ${({ y }) => `${y}px`};
  width: 10px;
  height: 10px;
  background-color: #333;
  border-radius: 50%;
`;

const HelicopterTail = ({ x, y }) => {
  return <TailWrapper x={x} y={y} />;
};

export default HelicopterTail;
