import BentoBox from "./components/BentoBox";
import About from "./components/bento/Profile";
import ActiveProject from "./components/bento/ActiveProject";
import Contact from "./components/bento/Contact";
import CurrentLearning from "./components/bento/CurrentLearning";
import Projects from "./components/bento/Projects";
import TechStack from "./components/bento/TechStack";
import YearsExperience from "./components/bento/YearsExperience";
import TodayXp from "./components/bento/TodayXP";
import Level from "./components/bento/Level";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen items-center justify-center m-auto mx-32">
        <div
          id="grid"
          className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#181818_1px,transparent_1px),linear-gradient(to_bottom,#181818_1px,transparent_1px)] bg-[size:8rem_8rem]"
        />
        <div className="grid grid-cols-5 gap-6 items-stretch">
          <div className="col-span-1 flex flex-col gap-6 h-full items-stretch">
            <BentoBox>
              <CurrentLearning />
            </BentoBox>

            <BentoBox>
              <YearsExperience />
            </BentoBox>

            <BentoBox>
              <TodayXp />
            </BentoBox>

            <BentoBox>
              <Level />
            </BentoBox>
          </div>

          <div className="col-span-2 flex flex-col gap-6 h-full items-stretch">
            <BentoBox>
              <About />
            </BentoBox>

            <BentoBox>
              <TechStack />
            </BentoBox>
          </div>

          <div className="col-span-2 flex flex-col gap-6 h-full items-stretch">
            <BentoBox>
              <Projects />
            </BentoBox>

            <BentoBox>
              <Contact />
            </BentoBox>
          </div>
        </div>
      </section>
    </main>
  );
}
