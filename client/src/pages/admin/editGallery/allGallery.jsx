import React from 'react';
import Navbar from '../common/navbar.jsx';
import Sidebar from '../common/sidebar.jsx';
import GalleryPhotoUpdate from './galleryPhotoUpdate.jsx';
import styled from 'styled-components';

function AllGallery() {
  return (
    <Container>
      <Navbar />
      <Sidebar />
      <MainContent>
        <GalleryPhotoUpdate/>
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

export default AllGallery;

 