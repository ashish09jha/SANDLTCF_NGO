import React from 'react';
import Navbar from '../common/navbar.jsx';
import Sidebar from '../common/sidebar.jsx';
import MediaPhotoUpdate from './mediaPhotoUpdate.jsx';
import styled from 'styled-components';

function AllMedia() {
  return (
    <Container>
      <Navbar />
      <Sidebar />
      <MainContent>
        <MediaPhotoUpdate/>
      </MainContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; 
`;

const MainContent = styled.div`
  flex: 1;
  overflow-y: auto; 
`;

export default AllMedia;

 