import { LuLink } from "react-icons/lu";

const Missions = [
  {
    key: 1,
    title: "Logit",
    subtitle: "Sales Tracking Platform",
    linkIcon: LuLink,
    href: "https://uselogit.com/"
  },
  {
    key: 2,
    title: "Minimal",
    subtitle: "Ai & Automation Business",
    linkIcon: LuLink,
    href: "https://getminimal.io/"
  },
  {
    key: 3,
    title: "Ninjafy",
    subtitle: "Gamified Personal Growth App",
    linkIcon: LuLink,
    href: "https://www.getninjafy.com/"
  },
  {
    key: 4,
    title: "ATLAS",
    subtitle: "Agents/ Systems",
    linkIcon: LuLink,
    href: "https://www.notion.so/kanepickett/PUBLIC-ATLAS-PAGE-304be96895ac800dad38db641042d124?source=copy_link"
  }
];

// {
//   key: 3,
//   title: "FlowBerri",
//   subtitle: "Content Creation Portfolio",
//   linkIcon: LuLink,
//   href: "https://www.flowberri.com/"
// },

export default function Projects() {
  return (
    <div className="flex flex-col text-left p-8 gap-4">
      {/* <h1 className="text-white font-bold">Missions</h1> */}

      <div className="grid grid-cols-1 md:grid-cols-2 my-4 gap-4">
        {Missions.map(({ key, title, subtitle, linkIcon: Icon, href }) => (
          <div
            key={key}
            className="p-[1px] bg-gradient-to-br from-white/20 via-white/1 to-transparent rounded-xl group transition-all duration-400 hover:scale-105 hover:from-emerald-300/30 hover:via-emerald-300/4 hover:to-transparent group-hover:from-emerald-400/30 hover:via-emerald-400/4 hover:to-transparent motion-preset-rebound-up motion-duration-800"
            style={{ animationDelay: `${800 + key * 110}ms` }}
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
