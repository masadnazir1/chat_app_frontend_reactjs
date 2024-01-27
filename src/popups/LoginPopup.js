
import React, { useState } from 'react';
import '../css/LoginPopup.css';
// LoginPopup.js


const LoginPopup = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Hardcoded login credentials (for demonstration purposes)
    const hardcodedPhoneNumber = '03408882796';
    const hardcodedPassword = '03408882796';

    if (phoneNumber === hardcodedPhoneNumber && password === hardcodedPassword) {
      // Implement your login logic here
      console.log(`Successfully logged in with phone number: ${phoneNumber}`);
      onClose();
    } else {
      setError('Invalid phone number or password. Please try again.');
    }
  };

  return (
    <div className="login-popup">
      <div className="login-content">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPopup;