import { Button } from "../../components/Button";
import { cn } from "../../lib/utils";
import { FaCheck } from "react-icons/fa6";

interface Props {
  className?: string;
  price: number;
  features: string[];
  recommended?: boolean;
  type: string;
}

export const Card: React.FC<Props> = ({ className, price, features, type }) => {
  return (
    <div
      className={cn(
        "bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-md text-black dark:text-white w-fit p-6 shadow-md rounded-lg max-w-xs",
        className
      )}
    >
      <h1 className="text-lg font-semibold mb-2">{type}</h1>
      <div className="text-2xl font-bold space-x-2">
        <span>${price}</span>
        <span className="opacity-60">per month</span>
      </div>
      <div className="shrink-0 bg-background-dark/30 dark:bg-background-light/30 h-[1px] w-full my-4"></div>
      <div className="text-sm space-y-3">
        {features.map((feature) => {
          return (
            <div className="flex items-center gap-2" key={feature}>
              <FaCheck className="fill-[#575ac7]" />
              <p>{feature}</p>
            </div>
          );
        })}
      </div>
      <Button className="text-black w-full dark:text-white mt-4 hover:bg-black/5 hover:dark:bg-white/10 rounded-md border text-sm font-medium border-transparent dark:border-white/20 bg-background-light dark:bg-background-dark shadow-lg dark:shadow-none">
        Get Started
      </Button>
    </div>
  );
};
