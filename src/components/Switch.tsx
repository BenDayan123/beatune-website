import { cn } from "../lib/utils";

interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export const Switch: React.FC<Props> = ({ checked, onChange, className }) => {
  return (
    <div
      className={cn(
        "relative flex aspect-video w-[44px] cursor-pointer justify-start rounded-full bg-gray-400/40 p-1 transition-colors dark:bg-white/40",
        checked && "justify-end bg-blue-500 dark:bg-blue-500",
        className
      )}
      tabIndex={0}
      onClick={() => onChange(!checked)}
    >
      <div className="max-w-1/2 aspect-square transition-all rounded-full bg-white"></div>
    </div>
  );
};
