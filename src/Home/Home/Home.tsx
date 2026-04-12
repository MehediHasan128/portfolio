import About from "../About/About";
import HeroSection from "../Hero/Hero";
import Skills from "../Skills/Skills";
import TechStack from "../Tech-Stack/TechStack";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TechStack />
      <About />
      <Skills />
    </>
  );
};

export default HomePage;
