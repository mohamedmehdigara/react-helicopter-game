// FuelIndicator.js
import React from 'react';
import styled from 'styled-components';

// Styled component for the fuel indicator wrapper
const FuelIndicatorWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  color: #333;
`;

// Styled component for the fuel indicator bar
const FuelBar = styled.div`
  width: 100px; /* Adjust the width of the fuel indicator bar */
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  margin-top: 5px;
  overflow: hidden;
`;

// Styled component for the fuel level indicator
const FuelLevel = styled.div`
  width: ${({ fuel }) => `${fuel}%`};
  height: 100%;
  background-color: ${({ fuel }) => fuel > 20 ? '#4caf50' : '#f44336'}; /* Change color based on fuel level */
`;

// FuelIndicator component with props for fuel level
const FuelIndicator = ({ fuel }) => {
  return (
    <FuelIndicatorWrapper>
      Fuel: {fuel}%
      <FuelBar>
        <FuelLevel fuel={fuel} />
      </FuelBar>
    </FuelIndicatorWrapper>
  );
};

export default FuelIndicator;
