import Orb from "../../components/Orb";
import mehedi from "../../assets/images/mehedi.png";
import AnimatedContent from "../../components/AnimatedContent";
import ShinyText from "../../components/ShinyText";

const HeroSection = () => {
  return (
    <div className="bg-[#060010] h-screen relative overflow-hidden">
      {/* background orb */}
      <div className="absolute inset-0 pointer-events-auto">
        <Orb hoverIntensity={2} rotateOnHover hue={0} forceHoverState={false} />
      </div>

      {/* content */}
      <div>
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={true}
          duration={2.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.5}
          className="absolute 2xl:left-0 h-full w-[35%] text-white flex justify-center items-center px-16 pointer-events-none"
        >
          <div className="space-y-10">
            <div>
              <h1 className="text-5xl font-bold leading-20">
                Hello, I'm{" "}
                <span className="cursor-target pointer-events-auto">
                  <ShinyText
                    text="Mehedi Hasan"
                    speed={2}
                    delay={0}
                    color="#9277ff"
                    shineColor="#dad1ff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                    className="text-7xl"
                  />
                </span>
              </h1>
              <h2 className="text-3xl">A MERN-Stack Web Developer</h2>
            </div>

            <p className="text-justify">
              I build scalable, high-performance web applications with modern
              technologies like MERN stack, focusing on clean UI and seamless
              user experience.
            </p>

            <div className="space-x-5 pointer-events-auto">
              <button className="border-2 border-[#5227ff] px-5 py-2.5 rounded-md bg-[#5227ff] cursor-target active:scale-95 duration-200">
                Download Resume
              </button>
              <button className="border-2 border-[#5227ff] px-5 py-2.5 rounded-md text-white cursor-target active:scale-95 duration-200">
                Hire Me
              </button>
            </div>
          </div>
        </AnimatedContent>

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

        <div className="absolute 2xl:right-0 h-full w-[35%] text-white flex justify-center items-center pointer-events-none">
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
