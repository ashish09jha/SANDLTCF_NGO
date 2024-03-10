import React from "react";
import Navbar from "../common/navbar.jsx";
import  Sidebar  from "../common/sidebar.jsx";
import VolunteerInformation from "./volunteerInformation.jsx";

function AllVolunteer() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <VolunteerInformation/>
    </div>
  );
}

export default AllVolunteer;
