import React, { useEffect, useRef } from 'react';
import './Auth.css'; // Ensure this path is correct

const Login = ({ onClose, onSignup, onLogin }) => {
    const modalRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your login logic here
        console.log("User logged in");
        onLogin(); // Call onLogin function passed as prop
        onClose(); // Close the modal after login
    };

    // Close modal on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="auth-modal" ref={modalRef}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <p onClick={onSignup} style={{ cursor: 'pointer' }}>Don't have an account? Signup</p>
            <button onClick={onClose} style={{ background: 'transparent', color: '#007bff', border: 'none', cursor: 'pointer' }}>Close</button>
        </div>
    );
};

export default Login;
