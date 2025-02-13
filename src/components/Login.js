import React, { useState } from 'react';
import useStore from './store';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { setAuthenticated, setUserName } = useStore();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        setAuthenticated(true);
        setUserName(username); // Store username in Zustand
        navigate('/dashboard');
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Login</h3>
            <form onSubmit={handleLogin}>
                <input 
                    type="text" 
                    placeholder="Enter username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
