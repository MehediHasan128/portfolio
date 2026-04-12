import About from "../About/About";
import HeroSection from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import TechStack from "../Tech-Stack/TechStack";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TechStack />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default HomePage;
