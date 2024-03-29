import { useDarkMode } from "usehooks-ts";
import Logo from "../assets/logo.png";
import { Switch } from "./Switch";
import { PropsWithChildren } from "react";

interface Props {}

export const NavBar: React.FC<Props> = () => {
  const { toggle, isDarkMode } = useDarkMode();
  return (
    <nav className="sticky px-6 inset-x-0 text-black dark:text-white left-0 right-0 top-0 z-[99999] w-full h-14 flex items-center border-b border-gray-500/30 dark:border-white/20 bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-lg">
      <div className="flex justify-between items-center w-1/2 mx-auto gap-6 max-lg:w-full">
        <div className="flex gap-2 items-center">
          <img src={Logo} className="w-7 aspect-square" />
          <a aria-current="page" className="font-bold text-nowrap" href="/">
            Beatune 2.0
          </a>
        </div>
        <ul className="gap-6 flex-1 hidden sm:flex">
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link>Docs</Link>
        </ul>
        <div className="flex items-center gap-3 font-bold">
          <p className="dark:opacity-20">☀️</p>
          <Switch checked={isDarkMode} onChange={toggle} />
          <p className="opacity-40 dark:opacity-100">🌑</p>
        </div>
      </div>
    </nav>
  );
};

const Link: React.FC<
  PropsWithChildren<
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  >
> = ({ children, ...props }) => {
  return (
    <li role="button" className="list-none">
      <a
        {...props}
        className="text-sm font-semibold opacity-80 hover:opacity-100 hover:scale-110"
      >
        {children}
      </a>
    </li>
  );
};
