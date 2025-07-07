export default function About() {
  return (
    <div className="text-center p-8">
      <h1 className="font-bold text-4xl">Profile</h1>
      <div className="flex flex-row gap-2">
        <p className="flex items-center w-24 h-24 bg-zinc-600">
          Profile Pic Here
        </p>
        <div className="flex flex-col text-left gap-2">
          <p>Kane Pickett</p>
          <p>Software Dev & Remote Ninja</p>
        </div>
      </div>
    </div>
  );
}
