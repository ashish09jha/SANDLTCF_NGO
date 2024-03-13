import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <Container>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/about">About</Link></div>
      <div><Link to="/contact">Contact</Link></div>
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
