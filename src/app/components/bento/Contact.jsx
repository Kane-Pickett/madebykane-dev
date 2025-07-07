import { LuMail } from "react-icons/lu";

const Buttons = [{ key: 1, icon: LuMail, text: "Email", href: "?" }];

export default function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Contact</h1>

      <div className="flex flex-col gap-2 my-4">
        {Buttons.map(({ key, icon: Icon, text, href }) => (
          <a key={key} href={href}>
            <div className="flex flex-row items-center gap-4 p-4 bg-zinc-800">
              <div className="p-2 bg-zinc-900 border-1 rounded-lg">
                <Icon />
              </div>
              <p className="font-medium text-xl">{text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
