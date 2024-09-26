import React, { useState, useEffect } from 'react';
import '../css/TeamMembers.css'; // Ensure this path is correct

const TeamMembers = ({ isDarkMode }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // Close sidebar when clicking outside
    const handleClickOutside = (event) => {
        const sidebar = document.querySelector('.sidebar');
        if (isSidebarOpen && sidebar && !sidebar.contains(event.target)) {
            setSidebarOpen(false); // Close sidebar if clicked outside
        }
    };

    // useEffect hook to handle click outside event listener
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        // Cleanup function to remove event listener when the component unmounts or isSidebarOpen changes
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isSidebarOpen]); // Include isSidebarOpen as a dependency

    const members = [
        {
            name: 'Gnaneswar',
            role: 'Founder and CEO',
            image: 'https://via.placeholder.com/150',
            description: 'Gnaneswar is an AI engineer with 5 years of experience in building intelligent systems.'
        },
        {
            name: 'Hemanth',
            role: 'ML Engineer',
            image: 'https://via.placeholder.com/150',
            description: 'Hemanth specializes in data analysis and machine learning algorithms.'
        },
        {
            name: 'Chandu',
            role: 'ML Researcher',
            image: 'https://via.placeholder.com/150',
            description: 'Chandu is focused on research and development of new ML techniques.'
        },
        {
            name: 'Dana',
            role: 'Frontend Developer',
            image: 'https://via.placeholder.com/150',
            description: 'Dana is a frontend developer passionate about creating user-friendly interfaces.'
        },
        {
            name: 'Priya',
            role: 'Backend Developer',
            image: 'https://via.placeholder.com/150',
            description: 'Priya has expertise in building scalable backend systems and APIs.'
        }
    ];

    return (
        <div className={`team-members ${isDarkMode ? 'dark' : 'light'}`}>
            {/* Sidebar Toggle Button */}
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isSidebarOpen ? '✖' : '☰'} {/* Toggle between open and close icon */}
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>✖</button>
                <h2>Navigation</h2>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            {/* Team Members Section */}
            <h2>Meet Our Team</h2>
            <div className="members-container">
                {members.map((member, index) => (
                    <div className="member-card" key={index}>
                        <img src={member.image} alt={`${member.name}`} className="member-image" />
                        <h3>{member.name}</h3>
                        <h4>{member.role}</h4>
                        <p>{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembers;
