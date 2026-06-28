import { useEffect, useState, type CSSProperties } from "react";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

const INITIAL_DELAY = 200;
const CHAR_DELAY = 30;
const CHAR_DURATION = 500;
const NBSP = " ";

interface AnimatedChar {
  char: string;
  delay: number;
}

function AnimatedHeading({ text, className = "", style }: AnimatedHeadingProps) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), INITIAL_DELAY);
    return () => clearTimeout(timer);
  }, []);

  const lines = text.split("\n");

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => {
        const chars = Array.from(line);
        const words: AnimatedChar[][] = [[]];

        chars.forEach((char, charIndex) => {
          const delay = lineIndex * line.length * CHAR_DELAY + charIndex * CHAR_DELAY;
          words[words.length - 1].push({ char: char === " " ? NBSP : char, delay });
          if (char === " ") words.push([]);
        });

        return (
          <span key={lineIndex} className="block overflow-hidden pb-1">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {word.map((c, charIndex) => (
                  <span
                    key={charIndex}
                    className="inline-block transition-all ease-out"
                    style={{
                      transitionDuration: `${CHAR_DURATION}ms`,
                      transitionDelay: `${c.delay}ms`,
                      opacity: started ? 1 : 0,
                      transform: started ? "translateX(0)" : "translateX(-18px)",
                    }}
                  >
                    {c.char}
                  </span>
                ))}
              </span>
            ))}
          </span>
        );
      })}
    </h1>
  );
}

export default AnimatedHeading;
