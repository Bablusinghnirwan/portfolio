import React, { useState, useEffect } from 'react';
import TetrisLoading from './TetrisLoading';

const LoadingScreen = ({ onComplete }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoaded(true);
            setTimeout(() => {
                if (onComplete) onComplete();
            }, 1000); // Wait for fade out animation
        }, 4000); // Show for 4 seconds

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-astral-black transition-opacity duration-1000 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            <TetrisLoading size="lg" speed="fast" />
        </div>
    );
};

export default LoadingScreen;
