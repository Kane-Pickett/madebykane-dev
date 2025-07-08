// this is for the box styling

export default function BentoBox({ children, className }) {
  return (
    <div
      className={`p-[1px] bg-gradient-to-br from-white/15 via-white/2 to-transparent backdrop-blur-lg rounded-xl group duration-600 hover:scale-105 ${className} motion-preset-rebound-up motion-duration-1000`}
    >
      <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-br from-black/90 via-black/60 to-transparent backdrop-blur-lg rounded-xl">
        {children}
      </div>
    </div>
  );
}
