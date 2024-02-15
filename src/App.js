// App.js
import React, { useState, useEffect, useRef } from 'react';
import HelicopterBody from './components/HelicopterBody';
import HelicopterTail from './components/HelicopterTail';
import HelicopterRotor from './components/HelicopterRotor';
import Ground from './components/Ground';
import Obstacle from './components/Obstacle';
import ScoreBoard from './components/ScoreBoard';
import Sky from './components/Sky';
import Cloud from './components/Cloud';
import FuelIndicator from './components/FuelIndicator';
import Mountain from './components/Mountain';
import styled from 'styled-components';

const GameContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border: 2px solid #000;
  overflow: hidden;
`;

const App = () => {
  const [helicopterPosition, setHelicopterPosition] = useState({ x: 180, y: 180 });
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [fuel, setFuel] = useState(100);
  const gameRef = useRef(null);

// App.js (continued)
// App.js (continued)
// App.js (continued)
const resetGame = () => {
  alert(`Game Over! Your score: ${score}`);
  setHelicopterPosition({ x: 180, y: 180 });
  setObstacles([]);
  setScore(0);
  setFuel(100);
  startGame();
};

const generateObstacle = () => {
  const newObstacle = {
    x: Math.random() * 400,
    height: Math.random() * 150 + 50,
    speed: Math.random() * 3 + 1, // Varying obstacle speeds
  };
  setObstacles((prevObstacles) => [...prevObstacles, newObstacle]);
};

const gameLoop = () => {
  setHelicopterPosition((prevPosition) => ({
    x: Math.max(0, Math.min(prevPosition.x + 2, 400 - 40)),
    y: prevPosition.y + 2,
  }));

  setObstacles((prevObstacles) =>
    prevObstacles.map((obstacle) => ({ ...obstacle, x: obstacle.x - obstacle.speed }))
  );

  setFuel((prevFuel) => Math.max(prevFuel - 0.1, 0));

  if (Math.random() < 0.02) {
    generateObstacle();
  }

  setObstacles((prevObstacles) => prevObstacles.filter((obstacle) => obstacle.x + 30 > 0));

  const helicopterBounds = {
    left: helicopterPosition.x,
    right: helicopterPosition.x + 40,
    top: helicopterPosition.y,
    bottom: helicopterPosition.y + 20,
  };

  const collided = obstacles.some(
    (obstacle) =>
      obstacle.x < helicopterBounds.right &&
      obstacle.x + 30 > helicopterBounds.left &&
      obstacle.height > helicopterBounds.top
  );

  if (collided || fuel === 0) {
    resetGame();
  } else {
    setScore((prevScore) => prevScore + 1);

    setTimeout(() => {
      requestAnimationFrame(gameLoop);
    }, 1600);
  }
};

const startGame = () => {
  gameRef.current = requestAnimationFrame(gameLoop);
};

useEffect(() => {
  startGame();

  return () => {
    cancelAnimationFrame(gameRef.current);
  };
}, [helicopterPosition, obstacles, score, fuel]);

  return (
    <GameContainer ref={gameRef}>
      <Sky />
      <Mountain/>
      <HelicopterBody x={helicopterPosition.x} y={helicopterPosition.y} />
      <HelicopterTail x={helicopterPosition.x - 5} y={helicopterPosition.y + 15} />
      <HelicopterRotor x={helicopterPosition.x} y={helicopterPosition.y} />
      <Ground />
      {obstacles.map((obstacle, index) => (
        <Obstacle key={index} x={obstacle.x} height={obstacle.height} />
      ))}
      <ScoreBoard score={score} />
      <Cloud top={50} left={30} />
      <Cloud top={120} left={200} />
      <Cloud top={200} left={100} />
      <FuelIndicator fuel={fuel} />
    </GameContainer>
  );
};

export default App;
