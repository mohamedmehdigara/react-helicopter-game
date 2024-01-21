// Sky.js
import React from 'react';
import styled from 'styled-components';

const SkyWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #87ceeb, #87ceeb, #add8e6);
`;

const Sky = () => {
  return <SkyWrapper />;
};

export default Sky;
