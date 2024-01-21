// FuelIndicator.js
import React from 'react';
import styled from 'styled-components';

const FuelIndicatorWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  color: #333;
`;

const FuelIndicator = ({ fuel }) => {
  return <FuelIndicatorWrapper>Fuel: {fuel}%</FuelIndicatorWrapper>;
};

export default FuelIndicator;
