import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/users');
            setUserName(response.data.name);
        } catch (error) {
            setErrors([...errors, 'Failed to fetch user data']);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setEmail('');
        setPassword('');
        setErrors([]);
        setUserName('');
    };

    return (
        <div className="container">
            <h1>Login</h1>
            {isLoggedIn ? (
                <>
                    <h2>Welcome, {userName}</h2>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            )}
            {errors.length > 0 && (
                <div>
                    <ul>
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Login;