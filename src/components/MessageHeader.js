// MessageHeader.js
import React, { useState } from 'react';
import '../css/MessageHeader.css';







const MessageHeader = ({ title, onClose }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="message-header">
      <div className="header-content">
        <div className="chat-info">
          <img src="./profile.png" alt="Icon" className='chat-hed-icons' />
          <span>{title}</span>
        </div>
        <div className="search-icon">
          <img src="path/to/search-icon.png" alt="Search Icon" className='chat-hed-icons' />
        </div>
        <div className="dots-menu" onClick={handleMenuClick}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      {showMenu && (
        <div className="menu-popup">
          {/* Add menu items and actions */}
          <div>Menu Item 1</div>
          <div>Menu Item 2</div>
          <div>Menu Item 3</div>
        </div>
      )}

      <button className="close-button" onClick={onClose}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default MessageHeader;
