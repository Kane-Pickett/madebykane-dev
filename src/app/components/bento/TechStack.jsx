import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact
} from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiExpo,
  SiGithub,
  SiSupabase,
  SiNotion,
  SiOpenai,
  SiClaude
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

const Icons = [
  { key: 1, icon: IoLogoHtml5 },
  { key: 2, icon: IoLogoCss3 },
  { key: 3, icon: IoLogoJavascript },
  { key: 4, icon: IoLogoReact },
  { key: 5, icon: SiTailwindcss },
  { key: 6, icon: RiNextjsFill },
  { key: 7, icon: SiExpo },
  { key: 8, icon: SiGithub },
  { key: 9, icon: SiSupabase },
  { key: 10, icon: SiNotion },
  { key: 11, icon: SiOpenai },
  { key: 12, icon: SiClaude }
];

export default function TechStack() {
  return (
    <div className="flex flex-col gap-4 p-8 mb-4">
      <h1 className="text-white font-bold">Tech Stack</h1>

      <div className="grid grid-cols-6 m-auto my-4 gap-4">
        {Icons.map(({ key, icon: Icon }) => (
          <div
            key={key}
            className="p-4 bg-gradient-to-br from-zinc-900/50 to-transparent rounded-xl border-1 border-zinc-700 rounded-xl"
          >
            <Icon className="w-8 h-auto text-zinc-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
