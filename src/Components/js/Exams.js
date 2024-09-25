// src/code/js/Exams.js
import React from 'react';

const Exams = ({ onSubjectSelect }) => {
    const subjects = ['Math', 'Science', 'AI', 'ML'];

    return (
        <div className="exams">
            <h2>Available Exams</h2>
            <ul>
                {subjects.map((subject, index) => (
                    <li key={index}>
                        <button onClick={() => onSubjectSelect(subject)}>{subject} Exam</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Exams;
