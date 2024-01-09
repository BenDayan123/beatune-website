import { useState } from "react";
import { cn } from "./lib/utils";
import { ImageContainer } from "./components/ImageContainer";
import Image from "./assets/screenshot.png";
import { Button } from "./components/Button";
import { NavBar } from "./components/Nav";
import { Footer } from "./components/Footer";

function App() {
  const [isDark, setTheme] = useState<boolean>(false);

  return (
    <div className={cn(isDark ? "dark" : "light", "w-full overflow-auto")}>
      <div className="relative w-full h-fit bg-background-light dark:bg-background-dark overflow-hidden">
        <NavBar />
        <div className="absolute inset-x-0 -top-40 z-[1] transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
          <div className="relative opacity-20 left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-sky-400 dark:from-sky-900 to-purple-500 dark:to-purple-900 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="min-h-[30vh] py-8 w-full px-6 gap-5 pt-32 flex flex-col justify-center text-center relative z-10">
          <div className="animate-scrollIn inline-flex items-cente bg-[#242533] text-[#fafafa] rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-fit mx-auto">
            Under construction
          </div>
          <h1 className="animate-scrollIn animate-delay-200 text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-t from-[#111827] dark:from-white via-[#4b5563] dark:via-[#e5e7eb] to-[#111827] dark:to-white">
            Hear sound all around.
          </h1>
          <p className="animate-scrollIn animate-delay-[400ms] text-black/70 dark:text-white/70">
            Listen and discover. In perfect harmony.
          </p>
          <div className="flex justify-center gap-2">
            <Button className="text-white bg-[#4d4ea4] hover:brightness-90 shadow-lg dark:shadow-none animate-scrollIn animate-delay-[.6s]">
              Download
            </Button>
            <Button className="text-black dark:text-white hover:bg-black/5 hover:dark:bg-white/10 border border-transparent dark:border-white/20 bg-background-light dark:bg-background-dark shadow-lg dark:shadow-none animate-scrollIn animate-delay-[.7s]">
              Github
            </Button>
          </div>
        </div>
        <ImageContainer src={Image} />
        <div className="w-full h-screen"></div>

        <div className="glow"></div>

        <div className="z-20 max-sm:p-4 py-12 border-t border-white dark:border-background-dark mt-24 px-24 bg-background-light/50 dark:bg-background-dark/50 backdrop-blur-sm shadow-lg">
          <h3 className="font-semibold text-2xl text-black dark:text-white">
            Convinced yet?
          </h3>
          <p className="text-muted-foreground max-w-lg text-black/50 dark:text-white/50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            dolore omnis. Sit aliquam nobis excepturi!
          </p>
        </div>

        <div
          className="fixed aspect-square bottom-0 z-50 right-0 m-2 select-none cursor-pointer rounded-full bg-black/20 dark:bg-white/20 p-3 text-2xl"
          onClick={() => setTheme((t) => !t)}
        >
          {isDark ? "🌑" : "☀️"}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
