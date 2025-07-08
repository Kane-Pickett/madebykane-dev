import BentoBox from "./components/BentoBox";
import About from "./components/bento/Profile";
import Contact from "./components/bento/Contact";
import CurrentLearning from "./components/bento/CurrentLearning";
import Projects from "./components/bento/Projects";
import TechStack from "./components/bento/TechStack";
import YearsExperience from "./components/bento/YearsExperience";
import TodayXp from "./components/bento/TodayXp";
import Level from "./components/bento/Level";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen items-center justify-center m-auto mx-4 my-8 mb-24 xl:mb-auto xl:my-auto overflow-x-hidden">
        <div
          id="grid"
          className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#181818_1px,transparent_1px),linear-gradient(to_bottom,#181818_1px,transparent_1px)] bg-[size:8rem_8rem] motion-preset-focus motion-duration-2000"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch h-full">
          <div className="col-span-2 grid grid-cols-2 gap-6 h-full md:col-span-1 md:flex md:flex-col">
            <BentoBox className="hover:from-amber-400/30 hover:via-amber-400/4 hover:to-transparent motion-delay-400">
              <CurrentLearning />
            </BentoBox>

            <BentoBox className="hover:from-sky-400/30 hover:via-sky-400/4 hover:to-transparent motion-delay-600">
              <YearsExperience />
            </BentoBox>

            <BentoBox className="hover:from-emerald-400/30 hover:via-emerald-400/4 hover:to-transparent motion-delay-800">
              <TodayXp />
            </BentoBox>

            <BentoBox className="hover:from-violet-400/40 hover:via-violet-400/4 hover:to-transparent motion-delay-1000">
              <Level />
            </BentoBox>
          </div>

          <div className="col-span-2 flex flex-col gap-6 h-full">
            <BentoBox className="hover:from-violet-400/40 hover:via-violet-400/4 hover:to-transparent motion-delay-400">
              <About />
            </BentoBox>

            <BentoBox className="hover:from-sky-400/30 hover:via-sky-400/4 hover:to-transparent motion-delay-600">
              <TechStack />
            </BentoBox>
          </div>

          <div className="col-span-3 xl:col-span-2 flex flex-col gap-6 h-full">
            <BentoBox className="hover:from-emerald-400/30 hover:via-emerald-400/4 hover:to-transparent motion-delay-800">
              <Projects />
            </BentoBox>

            <BentoBox className="hover:from-amber-400/30 hover:via-amber-400/4 hover:to-transparent motion-delay-1000">
              <Contact />
            </BentoBox>
          </div>
        </div>
      </section>
    </main>
  );
}
