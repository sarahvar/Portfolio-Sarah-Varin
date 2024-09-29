// src/WaveAnimation.jsx

import React from 'react';
import './WaveAnimation.css'; // Assurez-vous de créer ce fichier CSS

const WaveAnimation = () => {
    return (
        <div className="wave-container">
            <svg className="wave-background" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 10 Q 25 0, 50 10 T 100 10 V 10 Z" fill="rgba(255, 255, 255, 0.2)"></path>
            </svg>
        </div>
    );
};

export default WaveAnimation;
