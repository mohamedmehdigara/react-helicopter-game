// ScoreBoard.js
import React from 'react';
import styled from 'styled-components';

const ScoreBoardWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  color: #333;
`;

const ScoreBoard = ({ score }) => {
  return <ScoreBoardWrapper>Score: {score}</ScoreBoardWrapper>;
};

export default ScoreBoard;
