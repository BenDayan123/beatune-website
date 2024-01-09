import Logo from "../assets/logo.png";

interface Props {}

export const NavBar: React.FC<Props> = () => {
  return (
    <nav className="sticky px-6 inset-x-0 text-black dark:text-white left-0 right-0 top-0 z-[99999] w-full h-14 flex items-center border-b border-gray-500/30 dark:border-white/20 bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-lg">
      <div className="flex justify-between items-center w-full gap-6">
        <div className="flex gap-2 items-center">
          <img src={Logo} className="w-7 aspect-square" />
          <a aria-current="page" className="font-bold" href="/">
            Beatune 2.0
          </a>
        </div>
        <ul className="flex-gap gap-6 flex-1 hidden sm:flex">
          <li role="button" className="list-none">
            <a
              aria-current="page"
              className="text-sm text-muted-foreground hover:text-foreground font-medium"
              href="/#features"
            >
              Features
            </a>
          </li>
          <li role="button" className="list-none">
            <a
              aria-current="page"
              className="text-sm text-muted-foreground hover:text-foreground font-medium"
              href="/#pricing"
            >
              Pricing
            </a>
          </li>
          <li role="button" className="list-none">
            <a
              aria-current="page"
              className="text-sm text-muted-foreground hover:text-foreground font-medium"
              href="/docs/features"
            >
              Docs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
