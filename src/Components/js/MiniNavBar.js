// src/Components/js/MiniNavBar.js
import React from 'react';
import '../css/MiniNavBar.css'; // Import the CSS for styling

const MiniNavBar = () => {
    return (
        <nav className="mini-navbar">
            <div className="container">
                <a className="course-link" href="#programming">Programming</a>
                <a className="course-link" href="#ai">AI</a>
                <a className="course-link" href="#ml">ML</a>
                <a className="course-link" href="#hacking">Hacking</a>
                <a className="course-link" href="#data-science">Data Science</a>
                <a className="course-link" href="#web-development">Web Development</a>
            </div>
        </nav>
    );
};

export default MiniNavBar;
