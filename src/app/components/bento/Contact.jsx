import { SiGooglemeet, SiGmail } from "react-icons/si";

const Buttons = [
  {
    key: 1,
    icon: SiGmail,
    text: "Email Me",
    href: "mailto:kane@getminimal.io?subject=Let's%20Connect&body=Heya%20Kane,%I%wanted%to%get%in%touch!"
  },
  {
    key: 2,
    icon: SiGooglemeet,
    text: "Book a Call",
    href: "https://calendly.com/kanepickett/15min"
  }
];

export default function Contact() {
  return (
    <div className="flex flex-col gap-4 p-8">
      {/* <h1 className="text-3xl font-semibold">Contact</h1> */}

      <div className="flex flex-col gap-4 my-4">
        {Buttons.map(({ key, icon: Icon, text, href }) => (
          <div
            key={key}
            className="p-[1px] bg-gradient-to-br from-white/12 via-white/1 to-transparent rounded-xl group duration-600 hover:scale-105 hover:from-amber/30 hover:via-amber/4 hover:to-transparent group-hover:from-amber-400/30 hover:via-amber-400/4 hover:to-transparent motion-preset-rebound-up"
            style={{ animationDelay: `${1000 + key * 200}ms` }}
          >
            <a href={href} target="_blank">
              <div className="flex flex-row items-center gap-4 p-4 bg-gradient-to-br from-black/75 via-black/60 to-transparent hover:from-black/70 backdrop-blur-sm rounded-xl w-full">
                <div className="p-2 border-1 border-zinc-700 rounded-xl group-hover:border-amber-400/20 duration-600">
                  <Icon className="w-6 h-auto text-zinc-400 group-hover:text-zinc-200 duration-500" />
                </div>
                <h2 className="font-medium text-base">{text}</h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
