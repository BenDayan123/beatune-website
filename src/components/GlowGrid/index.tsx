import "./style.css";

interface Props {}

const GridGlow: React.FC<Props> = () => {
  return (
    <>
      <div className="absolute left-1/2 top-0 h-[1px] w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-black to-tran dark:via-white"></div>
      <div className="glow absolute left-1/2 top-0 h-[250px] w-[20%] -translate-x-1/2 -translate-y-1/2 rounded-circle bg-gradient-to-r from-purple-400 to-purple-700 blur-3xl dark:h-[150px]"></div>
      <svg
        stroke="white"
        fill="transparent"
        className="grid stroke-black/100 dark:stroke-white/70"
        viewBox="0 0 1600 780"
      >
        <pattern
          id="small-grid"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <rect strokeWidth="0.2" width="100%" height="100%"></rect>
        </pattern>

        <pattern
          id="big-grid"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <rect width="100%" height="100%"></rect>
        </pattern>

        <rect width="100%" height="100%" fill="url(#big-grid)"></rect>
        <rect width="100%" height="100%" fill="url(#small-grid)"></rect>
      </svg>
    </>
  );
};

export default GridGlow;
