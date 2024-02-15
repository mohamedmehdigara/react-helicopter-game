// Mountain.js
import React from 'react';
import styled from 'styled-components';

// Styled component for the mountain wrapper
const MountainWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px; /* Adjust height as needed */
  background: linear-gradient(to bottom, #2c2c2c 0%, #555555 100%); /* Gradient for mountain base */
  overflow: hidden; /* Hide overflowing peaks */
`;

// Styled component for individual mountain peaks
const MountainPeak = styled.div`
  position: absolute;
  bottom: 0; /* Peaks are positioned at the bottom of the component */
  left: ${({ position }) => `${position}%`}; /* Adjust peak position */
  transform: translateX(-50%) translateY(-100%); /* Position peaks correctly */
  width: 30px; /* Adjust peak width */
  height: ${({ height }) => `${height}px`}; /* Adjust peak height */
  background-color: #888; /* Lighter color for peaks */
  border-radius: 10px; /* Rounded shape for peaks */
`;

// Mountain component with optional props for peak count and variation
const Mountain = ({ peakCount = 5 }) => {
  // Calculate the interval between peaks to evenly distribute them
  const peakInterval = 100 / (peakCount + 1);

  // Generate random peak heights and positions
  const peaks = Array.from({ length: peakCount }, (_, index) => ({
    height: Math.floor(Math.random() * 100) + 100, // Random height between 100 and 200
    position: peakInterval * (index + 1), // Calculate peak position
  }));

  return (
    <MountainWrapper>
      {peaks.map((peak, index) => (
        <MountainPeak key={index} height={peak.height} position={peak.position} />
      ))}
    </MountainWrapper>
  );
};

export default Mountain;
