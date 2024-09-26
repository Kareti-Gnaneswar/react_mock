// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
// Import other components/pages here if needed

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Add other routes here */}
                {/* Example: <Route path="/dashboard" element={<Dashboard />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
