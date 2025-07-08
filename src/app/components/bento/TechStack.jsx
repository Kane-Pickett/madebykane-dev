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
  { key: 7, icon: SiGithub },
  { key: 8, icon: SiExpo },
  { key: 9, icon: SiSupabase },
  { key: 10, icon: SiNotion },
  { key: 11, icon: SiOpenai },
  { key: 12, icon: SiClaude }
];

// note.... I could maybe just wrap all of these mapped things with a bentobox? That way the styling is consistent? Less control, but cleaner?

export default function TechStack() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-white font-bold">Tech Stack</h1>

      <div className="grid grid-cols-6 m-auto my-4 gap-4">
        {Icons.map(({ key, icon: Icon }) => (
          <div
            key={key}
            className="p-[1px] bg-gradient-to-br from-white/20 via-white/2 to-transparent rounded-xl group duration-400 hover:scale-110 hover:from-white/30 hover:via-white/4 hover:to-transparent"
          >
            <div className="p-4 bg-gradient-to-br from-black/75 via-black/60 to-transparent backdrop-blur-sm rounded-xl duration-400 text-zinc-400 hover:text-zinc-200">
              <Icon className="w-8 h-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
