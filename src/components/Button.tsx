import { PropsWithChildren } from "react";
import { cn } from "../lib/utils";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "py-2 px-6 rounded-full font-semibold transition-all active:scale-90",
        className
      )}
    >
      {children}
    </button>
  );
};
