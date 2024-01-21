// Obstacle.js
import React from 'react';
import styled from 'styled-components';

const ObstacleWrapper = styled.div`
  position: absolute;
  left: ${({ x }) => `${x}px`};
  bottom: 0;
  width: 30px;
  height: ${({ height }) => `${height}px`};
  background-color: #c33;
`;

const Obstacle = ({ x, height }) => {
  return <ObstacleWrapper x={x} height={height} />;
};

export default Obstacle;
