// ChatSidebar.js
import React from 'react';
import '../css/ChatSidebar.css'; // Import the CSS file for ChatSidebar
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './ChatHeader';
import ChatHeader from './ChatHeader';


const dummyChats = [
  { id: 1, name: 'John Doe', lastMessage: 'Hello there!', profileImage: 'profile.png' },
  { id: 23, name: 'Jane Smith', lastMessage: 'How are you?', profileImage: 'profile.png' },
  { id: 24, name: 'Jane Smith', lastMessage: 'How are you?', profileImage: 'profile.png' },
  { id: 25, name: 'Jane Smith', lastMessage: 'How are you?', profileImage: 'profile.png' },
  { id: 233, name: 'Jane Smith', lastMessage: 'How are you?', profileImage: 'profile.png' },
  { id: 255, name: 'Jane Smith', lastMessage: 'How are you?', profileImage: 'profile.png' },
  { id: 266, name: 'Jane Smith', lastMessage: 'How are you?', profileImage: 'profile.png' },
  { id: 26, name: 'Jane Smith', lastMessage: 'How are you?', profileImage: 'profile.png' },
  { id: 215, name: 'Jane Smith', lastMessage: 'How are you?', profileImage: 'profile.png' },
  { id: 276, name: 'Jane Smith', lastMessage: 'How are you?', profileImage: 'profile.png' },
  { id: 236, name: 'Jane Smith', lastMessage: 'How are you?', profileImage: 'profile.png' },
  // Add more dummy chats as needed
];

const ChatSidebar = () => {
  return (
    <div className="chat-sidebar">
 
 <ChatHeader/>

      {/* <div className="search-bar">
        <input type="text" placeholder="Search a chat or start a new " />
        <button className="filter-button">
          <i className="fas fa-filter"></i>
        </button>
      </div>
 */}






      <div className="chats-list">


        {dummyChats.map((chat) => (
          <div key={chat.id} className="chat-item">
            <img src={require(`./${chat.profileImage}`).default}  className='profile-icons'/>
            <div className="chat-info">
              <div className="chat-name">{chat.name}</div>
              <div className="last-message">{chat.lastMessage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
