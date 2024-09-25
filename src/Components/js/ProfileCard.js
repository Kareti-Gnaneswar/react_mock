import React from 'react';

const ProfileCard = ({ onLogout, onClose, onDashboard }) => {
    return (
        <div className="profile-card">
            <button onClick={onDashboard}>Dashboard</button>
            <button onClick={onLogout}>Logout</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default ProfileCard;
