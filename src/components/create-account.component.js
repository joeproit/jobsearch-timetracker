import React, { useState } from 'react';
import axios from 'axios';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [uniqueUrl, setUniqueUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/generate', { username, password });
      console.log(response.data); // you can remove this in production
      // Display the unique URL to the user
      setUniqueUrl(response.data.uniqueUrl);
    } catch (error) {
      // Handle error. Possibly update state to show an error message.
      console.error('Account creation failed', error);
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password (optional):</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
      {uniqueUrl && <div>Your unique URL: {uniqueUrl}</div>}
    </div>
  );
};

export default CreateAccount;