import React, { useEffect, useRef } from 'react';
import './Auth.css'; // Ensure this path is correct

const Signup = ({ onClose }) => {
    const modalRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your signup logic here
        console.log("User signed up");
        onClose(); // Close the modal after signup
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
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Signup</button>
            </form>
            <p onClick={onClose} style={{ cursor: 'pointer' }}>Already have an account? Login</p>
            <button onClick={onClose} style={{ background: 'transparent', color: '#007bff', border: 'none', cursor: 'pointer' }}>Close</button>
        </div>
    );
};

export default Signup;
