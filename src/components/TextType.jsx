import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';

// ----------------------------------------------------------------------
// 1. CSS Styles (Injected for Single File Portability)
// ----------------------------------------------------------------------
const styles = `
.text-type {
  display: inline-block;
  white-space: pre-wrap;
  font-family: inherit; 
  font-weight: bold;
}

/* Keyframes for the cursor blinking */
@keyframes text-type-blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

.text-type__cursor {
  margin-left: 0.1rem;
  display: inline-block;
  opacity: 1;
  color: #00ffff; /* astral-blue */
  /* Apply animation by default */
  animation-name: text-type-blink;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.text-type__cursor--hidden {
  display: none;
}
`;

// ----------------------------------------------------------------------
// 2. TextType Component Logic
// ----------------------------------------------------------------------
const TextType = ({
    text,
    as: Component = 'div',
    typingSpeed = 50,
    initialDelay = 0,
    pauseDuration = 2000,
    deletingSpeed = 30,
    loop = true,
    className = '',
    showCursor = true,
    hideCursorWhileTyping = false,
    cursorCharacter = '|',
    cursorClassName = '',
    cursorBlinkDuration = 0.5, // Duration for half-cycle (fade out)
    textColors = [],
    variableSpeed,
    onSentenceComplete,
    startOnVisible = false,
    reverseMode = false,
    ...props
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(!startOnVisible);
    const cursorRef = useRef(null);
    const containerRef = useRef(null);

    const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

    const getRandomSpeed = useCallback(() => {
        if (!variableSpeed) return typingSpeed;
        const { min, max } = variableSpeed;
        return Math.random() * (max - min) + min;
    }, [variableSpeed, typingSpeed]);

    const getCurrentTextColor = () => {
        if (textColors.length === 0) return;
        return textColors[currentTextIndex % textColors.length];
    };

    useEffect(() => {
        if (!startOnVisible || !containerRef.current) return;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [startOnVisible]);

    // Logic for typing animation
    useEffect(() => {
        if (!isVisible) return;

        let timeout;
        const currentText = textArray[currentTextIndex];
        if (!currentText) return;

        const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

        const executeTypingAnimation = () => {
            if (isDeleting) {
                if (displayedText === '') {
                    setIsDeleting(false);
                    if (currentTextIndex === textArray.length - 1 && !loop) {
                        return;
                    }

                    if (onSentenceComplete) {
                        onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
                    }

                    setCurrentTextIndex(prev => (prev + 1) % textArray.length);
                    setCurrentCharIndex(0);
                    timeout = setTimeout(() => { }, pauseDuration);
                } else {
                    timeout = setTimeout(() => {
                        setDisplayedText(prev => prev.slice(0, -1));
                    }, deletingSpeed);
                }
            } else {
                if (currentCharIndex < processedText.length) {
                    timeout = setTimeout(
                        () => {
                            setDisplayedText(prev => prev + processedText[currentCharIndex]);
                            setCurrentCharIndex(prev => prev + 1);
                        },
                        variableSpeed ? getRandomSpeed() : typingSpeed
                    );
                } else if (textArray.length >= 1) {
                    if (!loop && currentTextIndex === textArray.length - 1) return;
                    timeout = setTimeout(() => {
                        setIsDeleting(true);
                    }, pauseDuration);
                }
            }
        };

        if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
            timeout = setTimeout(executeTypingAnimation, initialDelay);
        } else {
            executeTypingAnimation();
        }

        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currentCharIndex,
        displayedText,
        isDeleting,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
        textArray,
        currentTextIndex,
        loop,
        initialDelay,
        isVisible,
        reverseMode,
        variableSpeed,
        onSentenceComplete
    ]);

    const shouldHideCursor =
        hideCursorWhileTyping && (currentCharIndex < textArray[currentTextIndex]?.length || isDeleting);

    const Tag = Component;

    return (
        <Tag ref={containerRef} className={`text-type ${className}`} {...props}>
            <style>{styles}</style>
            <span className="text-type__content" style={{ color: getCurrentTextColor() || 'inherit' }}>
                {displayedText}
            </span>
            {showCursor && (
                <span
                    ref={cursorRef}
                    className={`text-type__cursor ${cursorClassName} ${shouldHideCursor ? 'text-type__cursor--hidden' : ''}`}
                    // We double the duration because the GSAP logic was likely "duration" (one way) + yoyo.
                    // CSS Keyframe is a full cycle (100%), so 0.5s one way becomes 1s total cycle.
                    style={{ animationDuration: `${cursorBlinkDuration * 2}s` }}
                >
                    {cursorCharacter}
                </span>
            )}
        </Tag>
    );
};

export default TextType;
