import React from "react";
import FlipText from "./FlipText";

const FlipParagraph = ({ children, className = "" }) => {
    const words = children.split(" ");

    return (
        <div className={`flex flex-wrap gap-x-1.5 gap-y-1 ${className}`}>
            {words.map((word, i) => (
                <FlipText key={i} className="inline-block">
                    {word}
                </FlipText>
            ))}
        </div>
    );
};

export default FlipParagraph;
