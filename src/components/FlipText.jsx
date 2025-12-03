import React from "react";

const FlipText = ({ children, className = "" }) => {
    return (
        <div
            className={`group relative block overflow-hidden whitespace-nowrap w-fit ${className}`}
            style={{
                lineHeight: 1.1, // Adjusted for better fit with headers
            }}
        >
            {/* Top Text Layer (Moves Up on Hover) */}
            <div className="flex">
                {children.split("").map((letter, i) => (
                    <span
                        key={i}
                        className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
                        style={{
                            transitionDelay: `${i * 25}ms`,
                        }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                ))}
            </div>

            {/* Bottom Text Layer (Moves Up from below on Hover) */}
            <div className="absolute inset-0 flex">
                {children.split("").map((letter, i) => (
                    <span
                        key={i}
                        className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
                        style={{
                            transitionDelay: `${i * 25}ms`,
                        }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default FlipText;
