import { useEffect, useRef, useState } from "react";
import { lyrics } from "./lyrics";
import { cn } from "../../lib/utils";

const lines = lyrics.split("\n");

export const LyricsBox: React.FC = () => {
  const [lineIndex, setLine] = useState(2);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    return;
    // Array.from(ref.current?.children ?? []).forEach((child) => {
    //   console.log();
    // });
    const id = setInterval(() => {
      setLine((line) => {
        const index = lines.length > line ? line + 1 : 0;
        if (ref.current) {
          //   const child = ref.current.querySelector(`.line:nth-child(${index})`);
          //   ref.current.scroll({ top: child?.scrollTop });
        }
        return index;
      });
    }, 10000);

    return () => clearInterval(id);
  }, []);
  return (
    <div
      ref={ref}
      className="lines relative px-5 p-3 my-auto overflow-hidden rounded-md max-h-[150px]"
    >
      <div className="rounded-md z-[5] w-full h-full absolute top-0 left-0 bg-gradient-to-b from-background-light dark:from-background-dark to-transparent"></div>
      {lines.map((line, i) => (
        <p
          key={i}
          className={cn(
            "relative line z-[1] font-bold text-2xl opacity-60 transition-all text-center",
            lineIndex === i && "opacity-100 scale-125 drop-shadow-md z-10"
          )}
        >
          {line}
        </p>
      ))}
      <div className="rounded-md z-[5] w-full h-full absolute bottom-0 left-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent"></div>
    </div>
  );
};
