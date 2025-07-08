// this is for the box styling

export default function BentoBox({ children, className }) {
  return (
    <div
      className={`p-[1px] bg-gradient-to-br from-white/20 via-white/2 to-transparent rounded-xl group duration-600 hover:scale-105 ${className}`}
    >
      <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-br from-black/75 via-black/60 to-transparent backdrop-blur-sm rounded-xl">
        {children}
      </div>
    </div>
  );
}
