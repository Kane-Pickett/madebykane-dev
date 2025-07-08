import Image from "next/image";

export default function About() {
  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <Image
          src="/images/profilePicture.jpg"
          alt="Kane Pickett"
          width={140}
          height={140}
          className="rounded-xl border-1 border-zinc-700 group-hover:border-violet-400/30 duration-600"
          priority
        />
        <div className="flex flex-col text-center md:text-left gap-2">
          <h1>Kane Pickett</h1>
          <p className="text-zinc-400 group-hover:text-violet-400/80 duration-600">
            Software Dev & Remote Ninja
          </p>
          <p className="text-zinc-500">New Zealand</p>
        </div>
      </div>

      <div className="text-center md:text-left my-6 text-zinc-400">
        <p>
          Designing sleek, high-speed interfaces with zero friction. <br />
          Focused on growing fast and leveling up daily in the dev dojo.
        </p>
      </div>
    </div>
  );
}
