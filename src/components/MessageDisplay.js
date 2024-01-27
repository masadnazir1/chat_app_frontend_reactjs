// MessageDisplay.js
import React, { useState } from 'react';
import '../css/MessageDisplay.css'; // Import the CSS file for MessageDisplay
import MessageHeader from './MessageHeader';

const MessageDisplay = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Handle sending the message (you can implement this logic)
    console.log(`Sending message: ${message}`);
    setMessage(''); // Clear the message input after sending
  };

  const handlePlusButtonClick = () => {
    // Handle the plus button click (you can implement this logic)
    console.log('Plus button clicked');
    // Show the small menu popup (you can implement this logic)
  };

  return (
    <div className="message-display">
      <MessageHeader/>
      {/* Display messages */}
      <div className="messages">
        {/* Example message */}
        <div className="message">John Doe: Hello there!</div>
        {/* Add more messages as needed */}
      </div>

      {/* Write placeholder and buttons */}
      <div className="write-section">
        <div className="plus-button" onClick={handlePlusButtonClick}>
          <i className="fas fa-plus"></i>
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="send-button" onClick={handleSendMessage}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default MessageDisplay;
