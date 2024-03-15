import React from "react";
import Navbar from "../common/navbar.jsx";
import  Sidebar  from "../common/sidebar.jsx";
import Events from "./Events.jsx";

function AllEvents() {
  return (
    <div>
        <Navbar/> 
        <Sidebar/>
        <Events/>
    </div>
  );
}

export default AllEvents;