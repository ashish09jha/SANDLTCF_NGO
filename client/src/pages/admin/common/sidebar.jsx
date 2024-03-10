import React from 'react';
import logo from '../assets/logo.png';
import './Sidebar.css'; 

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="sidebar-header">
        SANDLTCF
      </div>
      <ul className="sidebar-nav">
        <li><a>Events</a></li>
        <li>Volunteer</li>
        <li>Media</li>
        <li>Gallery</li>
        <li>Donation</li>
        <li>Admin</li>
      </ul>
    </div>
  );
}

export default Sidebar;
