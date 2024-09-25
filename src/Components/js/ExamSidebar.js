import React from 'react';

const ExamSidebar = ({ onSubjectSelect }) => {
    const subjects = ['Math', 'Science', 'English']; // Add your subjects here

    return (
        <div className="exam-sidebar">
            <h3>Select Subject</h3>
            {subjects.map((subject) => (
                <button key={subject} onClick={() => onSubjectSelect(subject)}>
                    {subject}
                </button>
            ))}
        </div>
    );
};

export default ExamSidebar;
