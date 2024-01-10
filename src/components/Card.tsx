import { cn } from "../lib/utils";
import { PropsWithChildren } from "react";
import { IconType } from "react-icons";
import { TypingAnimation } from "./TypingText";

interface Props {
  title: string;
  typing?: boolean;
  icon: IconType;
  ping?: boolean;
  className?: string;
}

export const Card: React.FC<PropsWithChildren<Props>> = ({
  title,
  icon: Icon,
  ping,
  typing,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden flex flex-col shadow-xl select-none space-y-2 dark:text-white w-full z-10 text-gray-700 bg-background-light/50 dark:bg-background-dark/80 transition-colors backdrop-blur-sm mt-10 p-6 mx-auto rounded-md border-[0.4px] border-background-dark/20 dark:border-background-light/20",
        className
      )}
    >
      <div className="relative flex h-6 w-6 aspect-square">
        {ping && (
          <Icon className="absolute animate-ping duration-1000 inline-flex h-full w-full rounded-full opacity-75" />
        )}
        <Icon className="inline-flex h-full w-full" />
      </div>
      {typing ? (
        <TypingAnimation text={title} />
      ) : (
        <h4 className="font-semibold text-lg mt-2">{title}</h4>
      )}

      <div className="h-full">{children}</div>
    </div>
  );
};
