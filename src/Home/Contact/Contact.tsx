import Container from "../../components/Container";
import GlassIcons from "../../components/GlassIcons";
import { IoMailOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import world from "../../assets/images/world.png";
import { PinContainer } from "../../components/3d-pin";

const items = [{ icon: <IoMailOutline />, color: "#5227ff", label: "Conatct" }];

const Contact = () => {
  return (
    <section className="pb-96 bg-radial-[at_75%_75%] from-[#130032] to-[#060010] to-75%">
      <Container>
        <div className="flex">
          <div className="w-[50%] ">
            <GlassIcons items={items} className="custom-class" />
            <h1 className="text-6xl font-extrabold">Contact Us</h1>
            <p className="my-10 pr-36 text-justify">
              I specialize in developing modern full-stack applications using
              the MERN stack with a strong focus on performance and clean
              architecture. I’m passionate about solving real-world problems and
              continuously improving my skills. Let’s connect and discuss how I
              can contribute to your next project.
            </p>

            <div className="flex items-center gap-5">
              <p>mehedihasanbaized@gmail.com</p>
              <span>
                <GoDotFill className="text-sm" />
              </span>
              <p>+8801302557956</p>
              <span>
                <GoDotFill className="text-sm" />
              </span>
              <p>Uttara Dhaka-1230, Bangladesh</p>
            </div>

            <div className="mt-24 w-[85%] relative">
              <img src={world} alt="world" />
              <div className="absolute -top-12 right-4">
                <PinContainer
                  title="I'm Here"
                  href="https://twitter.com/mannupaaji"
                />
              </div>
            </div>
          </div>
          <div className="w-[50%] "></div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
