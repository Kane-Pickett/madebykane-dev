import BentoBox from "./componets/BentoBox";
import About from "./bento/About";
import ActiveProject from "./bento/ActiveProject";
import Contact from "./bento/Contact";
import CurrentLearning from "./bento/CurrentLearning";
import FunBox from "./bento/FunBox";
import Projects from "./bento/Projects";
import TechStack from "./bento/TechStack";
import YearsExperience from "./bento/YearsExperience";

export default function Home() {
  return (
    <main className="flex flex-row gap-12 items-center justify-center m-auto">
      <section className="grid grid-cols-2 ">
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
          <CurrentLearning />
        </BentoBox>

        <BentoBox>
          <FunBox />
        </BentoBox>

        <BentoBox>
          <Projects />
        </BentoBox>

        <BentoBox>
          <TechStack />
        </BentoBox>

        <BentoBox>
          <YearsExperience />
        </BentoBox>
      </section>
    </main>
  );
}
