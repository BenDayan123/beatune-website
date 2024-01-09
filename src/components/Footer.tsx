export const Footer = () => {
  return (
    <footer
      className="px-24 dark:bg-[#0c0e19] bg-white text-black/90 dark:text-white/90"
      id="features"
    >
      <div className="py-10 max-w-screen-lg">
        <div className="font-semibold text-lg">Beatune 2.0</div>
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
    </footer>
  );
};
