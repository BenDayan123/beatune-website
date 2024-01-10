import { Card } from "./Card";
import { MdLyrics } from "react-icons/md";
import { FaSearch, FaHeadphonesAlt } from "react-icons/fa";
import { LyricsBox } from "./Lyrics";

export const Features = () => {
  return (
    <div
      className="relative text-black/90 dark:text-white/90 pt-24"
      id="features"
    >
      <div className="absolute z-[1] transform-gpu w-1/2 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-full overflow-hidden blur-3xl pointer-events-none">
        <div className="relative opacity-20 rotate-[30deg] aspect-[1155/678] bg-gradient-to-tr from-sky-400 dark:from-sky-900 to-purple-500 dark:to-purple-900"></div>
      </div>
      <h1 className="font-bold text-center text-5xl">
        <span className="bg-gradient-to-r from-[#4d4ea4] pl-1">Unma</span>tched
        features
      </h1>
      <div className="md:grid md:grid-cols-5 gap-6 space-y-6 md:space-y-0 z-20 px-6 max-w-screen-lg mx-auto mt-12">
        <Card className="col-span-3" title="Lyrics Integration" icon={MdLyrics}>
          <div className="flex flex-col h-full">
            <p className="opacity-80">
              Immerse yourself in the music by exploring lyrics in real-time.
              Our app seamlessly integrates lyrics, allowing you to follow along
              with your favorite songs. Sing along, understand the story behind
              the music, and deepen your connection with every track.
            </p>
            <LyricsBox />
          </div>
        </Card>
        <div className="col-span-2 space-y-6">
          <Card title="Instant Search Results" icon={FaSearch} ping typing>
            <p className="opacity-80">
              Instantly find your favorite tracks, artists, or genres with our
              intuitive search feature.
            </p>
          </Card>
          <Card title="High-Fidelity Sound Quality" icon={FaHeadphonesAlt}>
            <p className="opacity-80">
              Immerse yourself in a world of unparalleled audio quality. Our
              desktop music app delivers a premium listening experience with
              high-fidelity sound. Enjoy crystal-clear, lossless audio streaming
              that brings your favorite tunes to life.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};
