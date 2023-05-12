import React, { useState } from 'react';
import axios from 'axios';

const AuthenticateAccount = () => {
  const [uniqueUrl, setUniqueUrl] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/authenticate', { uniqueUrl, password });
      console.log(response.data); // you can remove this in production
      // Handle successful authentication. For example, you might set some state or
      // store data in localStorage/sessionStorage, or redirect the user to another page.
    } catch (error) {
      // Handle error. Possibly update state to show an error message.
      console.error('Authentication failed', error);
    }
  };

  return (
    <div>
      <h2>Authenticate Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="uniqueUrl">Unique URL:</label>
          <input
            type="text"
            id="uniqueUrl"
            name="uniqueUrl"
            required
            value={uniqueUrl}
            onChange={(e) => setUniqueUrl(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password (if you set one):</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Authenticate</button>
      </form>
    </div>
  );
};

export default AuthenticateAccount;
