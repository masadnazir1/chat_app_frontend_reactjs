// Header.js
import React from 'react';
import '../css/Header.css'; // Import the CSS file for Header
import profileImage from './profile.png'; // Import your profile image

const Header = () => {
  return (
    <div className="header">
      <div className="profile-section">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="search-bar-header">
        <input type="text" placeholder="Search" className="search-bar-input"/>
      </div>
      <div className="action-buttons">
        <button className="header-button">Group</button>
        <button className="header-button">Status</button>
        <button className="header-button">Add New Chat</button>
        <div className="more-options">
          <button className="header-button">...</button>
          {/* Add additional buttons or options as needed */}
        </div>
      </div>
    </div>
  );
};

export default Header;
