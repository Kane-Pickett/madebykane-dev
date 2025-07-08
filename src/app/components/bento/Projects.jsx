import { LuLink } from "react-icons/lu";

const Missions = [
  {
    key: 1,
    title: "Ninjafy",
    subtitle: "Gamified personal growth app",
    linkIcon: LuLink,
    href: "https://www.getninjafy.com/"
  },
  {
    key: 2,
    title: "FlowBerri",
    subtitle: "Content creation portfolio",
    linkIcon: LuLink,
    href: "https://www.flowberri.com/"
  },
  {
    key: 3,
    title: "Bio Site",
    subtitle: "Custom link in bio",
    linkIcon: LuLink,
    href: "https://bio.madebykane.dev/"
  },

  {
    key: 4,
    title: "OccultDungeon",
    subtitle: "Simple adventure game",
    linkIcon: LuLink,
    href: "https://www.getninjafy.com/"
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col text-left p-8 gap-4">
      {/* <h1 className="text-white font-bold">Missions</h1> */}

      <div className="grid grid-cols-2 my-4 gap-4">
        {Missions.map(({ key, title, subtitle, linkIcon: Icon, href }) => (
          <div
            key={key}
            className="p-[1px] bg-gradient-to-br from-white/20 via-white/2 to-transparent rounded-xl group transition-all duration-400 hover:scale-105 hover:from-emerald-300/30 hover:via-emerald-300/4 hover:to-transparent group-hover:from-emerald-400/30 hover:via-emerald-400/4 hover:to-transparent"
          >
            <a
              className="flex flex-col gap-4 p-4 bg-gradient-to-br from-black/75 via-black/60 to-transparent backdrop-blur-sm rounded-xl"
              href={href}
              target="_blank"
            >
              <div className="flex flex-row items-center justify-between">
                <h2>{title}</h2>
                <Icon className="text-zinc-800 duration-800 group-hover:text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-400">{subtitle}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
