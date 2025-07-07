import { LuMail } from "react-icons/lu";
import { BsPersonVideo } from "react-icons/bs";

const Buttons = [
  {
    key: 1,
    icon: LuMail,
    text: "Email",
    href: "mailto:kane@getminimal.io?subject=Let's%20Connect&body=Heya%20Kane,%I%wanted%to%get%in%touch!"
  },
  {
    key: 2,
    icon: BsPersonVideo,
    text: "Book a Call",
    href: "https://calendly.com/kanepickett/15min"
  }
];

export default function Contact() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-3xl font-semibold">Contact</h1>

      <div className="flex flex-col gap-4 my-4">
        {Buttons.map(({ key, icon: Icon, text, href }) => (
          <a key={key} href={href}>
            <div className="flex flex-row items-center gap-4 p-4 bg-gradient-to-br from-zinc-900/50 to-transparent rounded-xl w-xl">
              <div className="p-2 border-1 border-zinc-700 rounded-xl">
                <Icon className="w-6 h-auto" />
              </div>
              <p className="font-medium text-base">{text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
