import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Container>
      <div><StyledLink to="/">Home</StyledLink></div>
      <div><StyledLink to="/about">About</StyledLink></div>
      <div><StyledLink to="/contact">Contact</StyledLink></div>
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

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: lightgray;
  }
`;

export default Navbar;
