// App.js
import React, { useState, useEffect } from 'react';
import LoginPopup from './popups/LoginPopup';
import ChatSidebar from './components/ChatSidebar';
import MessageDisplay from './components/MessageDisplay';
import ChatHeader from './components/ChatHeader';
import MessageHeader from './components/MessageHeader';
import './App.css';

function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(true);

  useEffect(() => {
    // Check local storage or any other logic to determine if the user has already logged in
    const hasLoggedIn = localStorage.getItem('hasLoggedIn');

    if (hasLoggedIn) {
      setShowLoginPopup(true);
    }
  }, []);

  const handleLoginClose = () => {
    setShowLoginPopup(false);
    // Set a flag in local storage to indicate that the user has logged in
    localStorage.setItem('hasLoggedIn', 'true');
  };

  return (
    <div className="app">






      <div className="chat-container">
      
        <ChatSidebar />
        <MessageDisplay />
      </div>

      {showLoginPopup && <LoginPopup onClose={handleLoginClose} />}
    </div>
  );
}

export default App;
