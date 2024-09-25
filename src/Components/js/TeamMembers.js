// src/Components/js/TeamMembers.js
import React from 'react';
import '../css/TeamMembers.css'; // Ensure this path is correct

const TeamMembers = ({ isDarkMode }) => { // Accept isDarkMode prop
    const members = [
        { 
            name: 'Gnaneswar', 
            role: 'Founder and CEO', 
            image: 'https://media.licdn.com/dms/image/v2/D5603AQEmZc3ZNQbwAg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726319583959?e=1732752000&v=beta&t=Yrh9W8igcVhoNbNsdA0EdA73MxCG9pOuiUkW3LN4syI',
            description: 'Gnaneswar is an AI engineer with 5 years of experience in building intelligent systems.'
        },
        { 
            name: 'Hemanth', 
            role: 'ML Engineer', 
            image: 'https://media.licdn.com/dms/image/v2/D5603AQHpHbAc0xGzBQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695139110426?e=1732752000&v=beta&t=ofuCF-7MedPxfI-l6iNemUOcosXtUEeawaLoYFa_RcA',
            description: 'Hemanth specializes in data analysis and machine learning algorithms.'
        },
        { 
            name: 'Chandu', 
            role: 'ML Researcher', 
            image: 'https://media.licdn.com/dms/image/v2/D5635AQG83xPDQ4HSsA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1694596965909?e=1727895600&v=beta&t=1xUCL_8l_hDSjkkZuDNVw8Wm2BHeX8m8GUsWYswVrdk',
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
            image: 'https://via.placeholder.com/150', // Placeholder image
            description: 'Priya has expertise in building scalable backend systems and APIs.'
        }
    ];

    return (
        <div className={`team-members ${isDarkMode ? 'dark' : 'light'}`}> {/* Apply class based on isDarkMode */}
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
