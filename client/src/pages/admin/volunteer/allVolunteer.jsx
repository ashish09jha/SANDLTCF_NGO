import React from 'react';
import Navbar from '../common/navbar.jsx';
import Sidebar from '../common/sidebar.jsx';
import VolunteerInformation from './volunteerInformation.jsx';
import styled from 'styled-components';

function AllVolunteer() {
  return (
    <Container>
      <Navbar />
      <Container1>
        <Sidebar />
        <VolunteerInformation />
      </Container1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction:row;
`;

export default AllVolunteer;
