import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Container>
      <div>Home</div>
      <div>About</div>
      <div>Contact</div>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: white;
  background-color: rgb(41, 43, 44);
  width: 100%;
  height: 60px;
  div {
    margin-right: 50px;
  }
`;

export default Navbar;
