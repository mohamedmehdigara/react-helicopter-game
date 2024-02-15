// Mountain.js
import React from 'react';
import styled from 'styled-components';

const MountainWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px; /* Adjust height as needed */
  background: linear-gradient(to bottom, #ccc, #999);
`;

const Mountain = () => {
  return <MountainWrapper />;
};

export default Mountain;
