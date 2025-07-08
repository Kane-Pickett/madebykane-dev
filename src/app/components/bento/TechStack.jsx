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
  { key: 1, icon: IoLogoHtml5, color: "group-hover:text-zinc-200" },
  { key: 2, icon: IoLogoCss3, color: "group-hover:text-zinc-200" },
  { key: 3, icon: IoLogoJavascript, color: "group-hover:text-zinc-200" },
  { key: 4, icon: IoLogoReact, color: "group-hover:text-zinc-200" },
  { key: 5, icon: SiTailwindcss, color: "group-hover:text-zinc-200" },
  { key: 6, icon: RiNextjsFill, color: "group-hover:text-zinc-200" },
  {
    key: 7,
    icon: SiGithub,
    color: "group-hover:text-sky-400/80",
    href: "https://github.com/Kane-Pickett",
    animation:
      "group-hover:motion-opacity-loop-60 motion-duration-1200 motion-ease-in-out duration-400"
  },
  { key: 8, icon: SiExpo, color: "group-hover:text-zinc-200" },
  { key: 9, icon: SiSupabase, color: "group-hover:text-zinc-200" },
  { key: 10, icon: SiNotion, color: "group-hover:text-zinc-200" },
  { key: 11, icon: SiOpenai, color: "group-hover:text-zinc-200" },
  { key: 12, icon: SiClaude, color: "group-hover:text-zinc-200" }
];

// note.... I could maybe just wrap all of these mapped things with a bentobox? That way the styling is consistent? Less control, but cleaner?

export default function TechStack() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="font-bold text-center md:text-left mb-4">Tech Stack</h1>

      <div className="grid grid-cols-4 md:grid-cols-6 items-center text-center justify-center m-auto gap-4">
        {Icons.map(({ key, icon: Icon, color, href, animation }) => (
          <a key={key} href={href} target="_blank">
            <div
              className="p-[1px] bg-gradient-to-br from-white/20 via-white/1 to-transparent rounded-xl group duration-400 hover:scale-110 group-hover:from-sky-400/30 group-hover:via-sky-400/4 hover:to-transparent motion-preset-rebound-up"
              style={{ animationDelay: `${key * 120}ms` }}
            >
              <div
                className={`p-4 bg-gradient-to-br from-black/75 via-black/60 to-transparent backdrop-blur-sm rounded-xl duration-400 hover:from-black/50 text-zinc-400 ${color}`}
              >
                <Icon className={`w-8 h-auto ${animation}`} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
