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
  overflow: hidden; /* Hide overflowing peaks */
`;

// Styled component for individual mountain peaks
const MountainPeak = styled.div`
  position: absolute;
  bottom: 0; /* Peaks are positioned at the bottom of the component */
  left: ${({ position }) => `${position}%`}; /* Adjust peak position */
  transform: translateX(-50%) translateY(-100%); /* Position peaks correctly */
  width: ${({ width }) => `${width}px`}; /* Adjust peak width */
  height: ${({ height }) => `${height}px`}; /* Adjust peak height */
  background-color: ${({ color }) => color}; /* Lighter color for peaks */
  border-radius: ${({ borderRadius }) => `${borderRadius}px`}; /* Rounded shape for peaks */
  opacity: ${({ opacity }) => opacity}; /* Adjust opacity for layering effect */
`;

// Mountain component with optional props for peak count, peak width, peak color, peak border radius, and mountain layer count
const Mountain = ({ peakCount = 5, peakWidth = 30, peakColor = '#888', peakBorderRadius = 10, layerCount = 3 }) => {
  // Calculate the interval between peaks to evenly distribute them
  const peakInterval = 100 / (peakCount + 1);

  // Generate random peak heights and positions for each layer
  const mountainLayers = Array.from({ length: layerCount }, (_, layerIndex) => {
    return Array.from({ length: peakCount }, (_, peakIndex) => ({
      height: Math.floor(Math.random() * 100) + 100, // Random height between 100 and 200
      position: peakInterval * (peakIndex + 1), // Calculate peak position
      opacity: 1 - layerIndex * (1 / layerCount), // Decrease opacity for layering effect
    }));
  });

  return (
    <MountainWrapper>
      {mountainLayers.map((layer, layerIndex) => (
        <React.Fragment key={layerIndex}>
          {layer.map((peak, peakIndex) => (
            <MountainPeak
              key={`${layerIndex}-${peakIndex}`}
              height={peak.height}
              position={peak.position}
              width={peakWidth}
              color={peakColor}
              borderRadius={peakBorderRadius}
              opacity={peak.opacity}
            />
          ))}
        </React.Fragment>
      ))}
    </MountainWrapper>
  );
};

export default Mountain;
