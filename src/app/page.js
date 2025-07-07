import BentoBox from "./components/BentoBox";
import About from "./components/bento/About";
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
    <main className="flex min-h-screen items-center justify-center m-auto">
      <section>
        <div className="grid grid-cols-4 items-stretch gap-4">
          <BentoBox>
            <TechStack />
          </BentoBox>

          <div className="col-span-2">
            <BentoBox>
              <About />
            </BentoBox>
          </div>

          <div className="flex flex-col gap-4">
            <BentoBox>
              <TodayXp />
            </BentoBox>

            <BentoBox>
              <Level />
            </BentoBox>
          </div>

          <div className="flex flex-col gap-4">
            <BentoBox>
              <YearsExperience />
            </BentoBox>

            <BentoBox>
              <CurrentLearning />
            </BentoBox>
          </div>

          <div className="col-span-2">
            <BentoBox>
              <Projects />
            </BentoBox>
          </div>

          <BentoBox>
            <Contact />
          </BentoBox>
        </div>
      </section>
    </main>
  );
}
