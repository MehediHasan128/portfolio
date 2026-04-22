import Orb from "../../components/Orb";
import mehedi from "../../assets/images/mehedi.png";
import AnimatedContent from "../../components/AnimatedContent";
import ShinyText from "../../components/ShinyText";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section id="home" className="h-screen relative overflow-hidden">
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
          className="absolute 2xl:left-0 xl:h-full xl:max-w-[50%] 2xl:max-w-[35%] text-white flex justify-center items-center px-5 lg:px-16 py-16 xl:py-0 pointer-events-none"
        >
          <div className="space-y-6 2xl:space-y-10 w-full">
            <div>
              <h1 className="text-lg md:text-2xl lg:text-xl 2xl:text-5xl font-bold xl:leading-20 text-center xl:text-left">
                Hello, I'm <br />
                <span className="cursor-target pointer-events-auto">
                  <a
                    href="https://www.facebook.com/mehedi.hasan.376594"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                      className="text-5xl md:text-8xl lg:text-7xl 2xl:text-7xl"
                    />
                  </a>
                </span>
              </h1>
              <h2 className="md:text-xl lg:text-base 2xl:text-3xl text-center xl:text-left">
                A MERN-Stack Web Developer
              </h2>
            </div>

            <p className="text-xs md:text-base lg:text-sm xl:text-base text-center xl:text-justify md:w-[90%] lg:w-[80%] lg:mx-auto xl:mx-0 2xl:w-auto">
              I build scalable, high-performance web applications with modern
              technologies like MERN stack, focusing on clean UI and seamless
              user experience.
            </p>

            <div className="space-x-5 pointer-events-auto flex justify-center xl:justify-start">
              <button className="border-2 text-sm lg:text-base border-primary px-3 lg:px-5 py-1.5 lg:py-2.5 rounded-md bg-primary cursor-target active:scale-95 duration-200 cursor-pointer">
                Download Resume
              </button>
              <button className="border-2 text-sm lg:text-base border-primary px-3 lg:px-5 py-1.5 lg:py-2.5 rounded-md text-white cursor-target active:scale-95 duration-200 cursor-pointer">
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
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none h-full w-[80%] md:w-[40%] lg:w-[30%] xl:w-[30%] 2xl:max-w-[25%]"
        >
          <img className="absolute bottom-0 w-full" src={mehedi} alt="Mehedi" />
        </AnimatedContent>

        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={false}
          duration={2.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.5}
          className="hidden lg:absolute lg:right-0 h-full w-[35%] text-white xl:flex justify-center items-center pointer-events-none"
        >
          <div className="space-y-20 pointer-events-auto">
            <div className="text-3xl border-2 border-primary p-3 rounded-full cursor-target hover:scale-125 duration-500 hover:shadow-lg hover:shadow-[#5227ff]/50">
              <FaGithub />
            </div>
            <div className="text-3xl border-2 border-primary p-3 rounded-full cursor-target hover:scale-125 duration-500 hover:shadow-lg hover:shadow-[#5227ff]/50">
              <FaLinkedinIn />
            </div>
            <div className="text-3xl border-2 border-primary p-3 rounded-full cursor-target hover:scale-125 duration-500 hover:shadow-lg hover:shadow-[#5227ff]/50">
              <FaXTwitter />
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default HeroSection;
