import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const handleLogin = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('token');
    };

    return (
        <>
        <Router>
            <Routes>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/dashboard" element={token ? <Dashboard token={token} onLogout={handleLogout} /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
        </>
    );
}

export default App;
