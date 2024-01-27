// ChatHeader.js
import React, { useState } from 'react';
import '../css/ChatHeader.css';

const ChatHeader = ({ title, subtitle, onClose }) => {
  const [showProfileSidebar, setShowProfileSidebar] = useState(false);

  const handleProfileClick = () => {
    setShowProfileSidebar(true);
  };

  const handleCloseProfileSidebar = () => {
    setShowProfileSidebar(false);
  };

  return (
    <div className="chat-header">
      <div className="header-content">
        <div className="profile-section" onClick={handleProfileClick}>
          <img src="./profile.png" alt="Profile" className='chat-hed-icons'/>
        </div>
        <div className="header-text">
          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="header-icons">
          {/* Add your icon images with proper paths */}
          <img src="path/to/icon-1.png" alt="Icon 1" className='chat-hed-icons'/>
          <img src="path/to/icon-2.png" alt="Icon 2" className='chat-hed-icons'/>
          {/* Add more icons as needed */}
        </div>
      </div>

      {showProfileSidebar && (
        <div className="profile-sidebar">
          {/* Add user profile settings content */}
          <div className="cover-photo"></div>
          <div className="profile-info">
            <img src="./profile.png" alt="Profile" className="profile-photo" />
            <h3>User Name</h3>
            {/* Add additional profile items */}
            <p>Email: user@example.com</p>
            <p>Location: City, Country</p>
            <p>Joined: January 2022</p>
          </div>
          <div className='btn_div'>
          {/* Add other settings components */}
          <button onClick={handleCloseProfileSidebar} className='Profile_btn'>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
