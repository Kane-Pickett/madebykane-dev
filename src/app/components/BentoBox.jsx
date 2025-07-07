// this is for the box styling

export default function BentoBox({ children }) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/10 border-1 border-zinc-800 p-2 rounded-lg">
      {children}
    </div>
  );
}
