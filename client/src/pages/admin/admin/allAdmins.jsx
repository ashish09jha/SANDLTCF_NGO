import React from 'react';
import Navbar from '../common/navbar.jsx';
import Sidebar from '../common/sidebar.jsx';
import AdminInformation from './addAdmin.jsx';
import styled from 'styled-components';

function AllAdmin() {
  return (
    <Container>
      <Navbar />
      <Sidebar />
      <MainContent>
        <AdminInformation />
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

export default AllAdmin;
