import BentoBox from "./componets/BentoBox";
import About from "./bento/About";
import ActiveProject from "./bento/ActiveProject";
import Contact from "./bento/Contact";
import CurrentLearning from "./bento/CurrentLearning";
import Projects from "./bento/Projects";
import TechStack from "./bento/TechStack";
import YearsExperience from "./bento/YearsExperience";
import TodayXp from "./bento/ToadyXP";
import Curiosity from "./bento/Curiosity";
import Level from "./bento/Level";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center m-auto">
      <section className="grid grid-cols-2 gap-4">
        <BentoBox>
          <About />
        </BentoBox>

        <BentoBox>
          <ActiveProject />
        </BentoBox>

        <BentoBox>
          <Contact />
        </BentoBox>

        <BentoBox>
          <Projects />
        </BentoBox>

        <BentoBox>
          <TechStack />
        </BentoBox>

        {/* small boxes */}
        <div className="grid grid-cols-3 gap-4">
          <BentoBox>
            <YearsExperience />
          </BentoBox>

          <BentoBox>
            <TodayXp />
          </BentoBox>

          <BentoBox>
            <Curiosity />
          </BentoBox>

          <BentoBox>
            <Level />
          </BentoBox>

          <BentoBox>
            <CurrentLearning />
          </BentoBox>
        </div>
      </section>
    </main>
  );
}
