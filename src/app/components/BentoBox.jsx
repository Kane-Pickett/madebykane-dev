// this is for the box styling

export default function BentoBox({ children }) {
  return (
    <div className="p-[1px] bg-gradient-to-br from-white/20 via-white/2 to-transparent rounded-lg group duration-400 hover:scale-104 hover:from-white/30 hover:via-white/4 hover:to-transparent">
      <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-br from-black/75 via-black/60 to-transparent backdrop-blur-sm rounded-lg">
        {children}
      </div>
    </div>
  );
}
