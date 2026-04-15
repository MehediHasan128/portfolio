import About from "../About/About";
import Contact from "../Contact/Contact";
import HeroSection from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Qualifications from "../Qualifications/Qualifications";
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
      <TechStack />
      <Qualifications />
      <Contact /> 
    </>
  );
};

export default HomePage;
