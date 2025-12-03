import React from 'react';
import './RingBackground.css';

const RingBackground = () => {
    return (
        <div className="ring-container scale-75 md:scale-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="ring-item"></div>
            <div className="ring-item"></div>
            <div className="ring-item"></div>
        </div>
    );
};

export default RingBackground;
