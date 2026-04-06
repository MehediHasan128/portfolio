import Orb from "../../components/Orb";
import mehedi from "../../assets/images/mehedi.png";
import TextType from "../../components/TextType";
import AnimatedContent from "../../components/AnimatedContent";

const HeroSection = () => {
  return (
    <div className="bg-[#060010] h-screen relative overflow-hidden">
      {/* background orb */}
      <div className="absolute inset-0 pointer-events-auto">
        <Orb hoverIntensity={2} rotateOnHover hue={0} forceHoverState={false} />
      </div>

      {/* content */}
      <div>
        <div className="absolute 2xl:left-0 h-full w-[30%] text-white flex justify-center items-center px-10">
          <TextType
            text={[
              "Hi, I'm Mehedi Hasan",
              "A MERN Stack Developer",
              "Welcome to my Portfolio!",
            ]}
            typingSpeed={85}
            pauseDuration={2000}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
            className="text-6xl leading-20 h-42.5"
          />
        </div>

        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={2.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.5}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none h-full w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%]"
        >
          <img className="absolute bottom-0" src={mehedi} alt="Mehedi" />
        </AnimatedContent>

        <div className="absolute 2xl:right-0 h-full w-[30%] text-white flex justify-center items-center">
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
