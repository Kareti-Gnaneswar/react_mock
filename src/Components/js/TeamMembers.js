// src/Components/js/TeamMembers.js
import React from 'react';
import '../css/TeamMembers.css'; // Ensure this path is correct

const TeamMembers = ({ isDarkMode }) => { // Accept isDarkMode prop
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
        }
        
    ];

    return (
        <div className={`team-members ${isDarkMode ? 'dark' : 'light'}`}>
            <h2>Meet Our Team</h2>
            <div className="members-container">
                {members.map((member, index) => (
                    <div className="member-card" key={index}>
                        <img src={member.image} alt={member.name} className="member-image" />
                        <h4>{member.name}</h4>
                        <h5>{member.role}</h5>
                        <p>{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembers;
