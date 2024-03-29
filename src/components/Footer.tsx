import Logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="dark:bg-[#0c0e19] bg-white text-black/90 dark:text-white/90">
      <div className="w-1/2 max-md:w-full mx-auto px-10">
        <div className="py-10 max-w-screen-lg">
          <div className="flex gap-2 items-center">
            <img src={Logo} className="w-7 aspect-square" />
            <p className="font-bold text-xl text-nowrap">Beatune 2.0</p>
          </div>
          <p className="mt-6 text-black/60 dark:text-white/60">
            Created by{" "}
            <a
              className="link"
              href="https://www.linkedin.com/in/ben-dayan/"
              target="_blank"
            >
              @bendayan
            </a>
          </p>
        </div>
        <div className="h-px bg-transparent bg-gradient-to-r from-transparent via-[#2a2c3c] to-transparent opacity-75"></div>
        <div className="py-6 flex justify-between items-center md:grid-cols-2 space-y-4 md:space-y-0 max-sm:flex-col">
          <div className="flex gap-4 text-xs">
            <div>Privacy Policy</div>
            <div>·</div>
            <div>Terms of Conditions</div>
          </div>
          <div className="text-xs">
            © {new Date().getFullYear()} Beatune. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
