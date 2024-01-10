import { Card } from "./Card";

export const PricePage: React.FC = () => {
  return (
    <div className="relative my-36 mx-auto w-1/2 max-md:w-full" id="pricing">
      <h1 className="text-black/80 text-5xl font-semibold dark:text-white/80 max-md:text-center">
        Simple, transparent pricing
      </h1>
      <div className="flex flex-col mt-20 sm:flex-row gap-8 justify-center items-center">
        <Card
          price={0}
          type="Free"
          features={["Unlimited Playlists", "Watch Lyrics", "Discover Music"]}
        />
        <Card
          className="shadow-xl shadow-[#4d4ea4] dark:bg-[#4d4ea4]/20 border border-[#4d4ea4]/40"
          price={4.99}
          type="Premium"
          features={[
            "All free features",
            "Ad free",
            "Downloadable music",
            "Offline listening",
            "Better audio quality",
            "Offline listening",
          ]}
        />
      </div>
    </div>
  );
};
