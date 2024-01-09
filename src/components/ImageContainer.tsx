interface Props {
  src: string;
}

export const ImageContainer: React.FC<Props> = ({ src }) => {
  return (
    <div
      className="animate-scrollIn animate-delay-[1s] border-animation z-20 flex justify-center items-center overflow-hidden relative transition-all duration-700 p-[2px] max-w-screen-xl mx-auto mt-16 rounded-[1rem] bg-ring"
      style={{
        maskImage: "linear-gradient(to bottom, black 30%, transparent 90%)",
        transitionDelay: "1s",
      }}
    >
      <div className="align-middle p-2 rounded-2xl z-10 overflow-hidden dark:border-white/10 border border-black/10 bg-background-light dark:bg-background-dark">
        <img
          src={src}
          className="rounded-xl pointer-events-none dark:border-white/10 border border-black/10"
        />
      </div>
    </div>
  );
};
