import React from "react";

const FlipLink = ({ children, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden whitespace-nowrap text-2xl font-bold uppercase sm:text-3xl md:text-4xl text-astral-blue hover:text-white transition-colors w-fit"
            style={{
                lineHeight: 0.85,
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
                        className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 text-white"
                        style={{
                            transitionDelay: `${i * 25}ms`,
                        }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                ))}
            </div>
        </a>
    );
};

export default FlipLink;
