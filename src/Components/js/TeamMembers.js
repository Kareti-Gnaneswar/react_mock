// src/Components/js/TeamMembers.js
import React, { useState } from 'react';
import '../css/TeamMembers.css'; // Ensure this path is correct

const TeamMembers = ({ isDarkMode }) => { 
    const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

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
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {sidebarOpen ? 'Close Menu' : 'Open Menu'}
            </button>

            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <h2>Sidebar</h2>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div className="team-content">
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
        </div>
    );
};

export default TeamMembers;
