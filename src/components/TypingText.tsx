import { useEffect, useState } from "react";

interface Props {
  text: string;
}

export const TypingAnimation: React.FC<Props> = ({ text }) => {
  const [index, setIndex] = useState(0);
  const currentText = text.slice(0, index);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (forward && index < text.length) setIndex((prev) => prev + 1);
      else if (!forward && index > 0) setIndex((prev) => prev - 1);
      else setForward((f) => !f);
    }, 150);

    return () => clearInterval(timeout);
  }, [index, text, forward]);

  return (
    <div className="text-lg font-bold relative flex">
      <p className="absolute">
        {text.slice(0, index)}
        {currentText != text && <span className="animate-pulse">|</span>}
      </p>

      <p className="invisible">{text}</p>
    </div>
  );
};
