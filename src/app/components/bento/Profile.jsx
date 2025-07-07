import Image from "next/image";

export default function About() {
  return (
    <div className="text-center p-8">
      <div className="flex flex-row gap-8 items-center">
        <Image
          src="/images/profilePicture.jpg"
          alt="Kane Pickett"
          width={140}
          height={140}
          className="rounded-xl border-1 border-zinc-700"
          priority
        />
        <div className="flex flex-col text-left gap-2">
          <h1>Kane Pickett</h1>
          <p>Software Dev & Remote Ninja</p>
        </div>
      </div>
    </div>
  );
}
