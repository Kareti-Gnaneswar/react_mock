import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import Updates from './Components/js/Updates';
import Login from './Auth/Login'; 
import Signup from './Auth/Signup'; 
import TeamMembers from './Components/js/TeamMembers';
import Exams from './Components/js/Exams';
import ExamSidebar from './Components/js/ExamSidebar';
import ProfileCard from './Components/js/ProfileCard';

const HomePage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const profileRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedInStatus);

        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleLogin = () => {
        setIsLoginOpen(!isLoginOpen);
    };

    const toggleSignup = () => {
        setIsSignupOpen(!isSignupOpen);
        setIsLoginOpen(false);
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoginOpen(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
        setIsProfileOpen(false);
        navigate('/'); 
    };

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const handleSubjectSelect = (subject) => {
        setSelectedSubject(subject);
    };

    return (
        <div className={`homepage ${isDarkMode ? 'dark' : 'light'}`}>
            <nav className="navbar">
                <div className="logo">
                    {isDarkMode ? 'AI & ML Mock Test Platform (Dark)' : 'AI & ML Mock Test Platform (Light)'}
                </div>
                <div className="navbar-links">
                    <a href="#about">About Us</a>
                    <a href="#careers">Careers</a>
                    <input type="text" className="search-bar" placeholder="Search..." />
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    {isLoggedIn ? (
                        <div className="profile-section" style={{ position: 'relative' }}>
                            <button className="profile-btn" onClick={toggleProfile}>Profile</button>
                            {isProfileOpen && (
                                <div ref={profileRef}>
                                    <ProfileCard 
                                        onLogout={handleLogout} 
                                        onClose={toggleProfile} 
                                        onDashboard={() => navigate('/dashboard')} 
                                    />
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <button className="login-btn" onClick={toggleLogin}>Login</button>
                            <button className="signup-btn" onClick={toggleSignup}>Signup</button>
                        </>
                    )}
                </div>
            </nav>

            {/* Modal for Login and Signup */}
            {isLoginOpen && <Login onClose={toggleLogin} onSignup={toggleSignup} onLogin={handleLogin} />}
            {isSignupOpen && <Signup onClose={toggleSignup} />} 

            <ExamSidebar onSubjectSelect={handleSubjectSelect} />

            <div className="main-content">
                <header className="header">
                    <h1>Welcome to AI & ML Mock Test Platform</h1>
                    <p>Your gateway to mastering AI, ML, and Data Science skills.</p>
                    <Exams onSubjectSelect={handleSubjectSelect} />
                    <Updates />
                    <TeamMembers isDarkMode={isDarkMode} /> {/* Pass isDarkMode here */}
                </header>

                {selectedSubject && (
                    <div className="test-container">
                        <h2>{selectedSubject} Test</h2>
                        <button onClick={() => navigate(`/test/${selectedSubject}`)}>Start Test</button>
                    </div>
                )}
            </div>

            <footer className="footer">
                <p>&copy; 2024 AI & ML Mock Test Platform. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
