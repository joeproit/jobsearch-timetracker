import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const login = () => {
        axios.post('http://localhost:5000/login', { username, password })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    };
    
    return (
        <div>
        <h2>Login</h2>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={login}>Login</button>
        </div>
        );
    }
    