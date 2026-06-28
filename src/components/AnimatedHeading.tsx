import { useEffect, useState } from "react";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

const INITIAL_DELAY = 200;
const CHAR_DELAY = 30;
const CHAR_DURATION = 500;
const NBSP = " ";

function AnimatedHeading({ text, className = "" }: AnimatedHeadingProps) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), INITIAL_DELAY);
    return () => clearTimeout(timer);
  }, []);

  const lines = text.split("\n");

  return (
    <h1 className={className}>
      {lines.map((line, lineIndex) => {
        const chars = Array.from(line);
        return (
          <span key={lineIndex} className="block overflow-hidden pb-1">
            {chars.map((char, charIndex) => {
              const delay = lineIndex * line.length * CHAR_DELAY + charIndex * CHAR_DELAY;
              return (
                <span
                  key={charIndex}
                  className="inline-block transition-all ease-out"
                  style={{
                    transitionDuration: `${CHAR_DURATION}ms`,
                    transitionDelay: `${delay}ms`,
                    opacity: started ? 1 : 0,
                    transform: started ? "translateX(0)" : "translateX(-18px)",
                  }}
                >
                  {char === " " ? NBSP : char}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}

export default AnimatedHeading;
