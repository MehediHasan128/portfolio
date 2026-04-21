import Container from "../../components/Container";
import GlassIcons from "../../components/GlassIcons";
import { IoMailOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import world from "../../assets/images/world2.png";
import { PinContainer } from "../../components/3d-pin";
import GridBackgroundDemo from "../../components/GridBackgroundDemo";
import type { FieldValues } from "react-hook-form";
import MForm from "../../Form/MForm";
import MInput from "../../Form/MInput";
import MTextArea from "../../Form/MTextArea";

const items = [{ icon: <IoMailOutline />, color: "#5227ff", label: "Conatct" }];

const Contact = () => {
  const handleEmailSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <section className="pb-96 bg-radial-[at_75%_75%] from-[#130032] to-[#060010] to-75%">
      <Container>
        <div className="flex">
          <div className="w-[50%]">
            <GlassIcons items={items} className="custom-class" />
            <h1 className="text-6xl font-extrabold">Contact Us</h1>
            <p className="my-10 pr-36 text-justify text-gray-400">
              I specialize in developing modern full-stack applications using
              the MERN stack with a strong focus on performance and clean
              architecture. I’m passionate about solving real-world problems and
              continuously improving my skills. Let’s connect and discuss how I
              can contribute to your next project.
            </p>

            <div className="flex items-center gap-5 text-gray-400">
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

            <div className="mt-16 w-[85%] relative">
              <div className="">
                <img src={world} alt="world" />
              </div>
              <div className="absolute -top-8 right-5">
                <PinContainer
                  title="I'm Here"
                  href="https://twitter.com/mannupaaji"
                />
              </div>
            </div>
          </div>
          <div className="w-[50%] rounded-4xl overflow-hidden relative">
            <GridBackgroundDemo />
            <div className="bg-radial-[at_75%_25%] from-[#13003200] to-[#0b001bf9] to-35% absolute top-0 w-full h-full py-20">
              <div className="w-[75%] mx-auto h-full flex justify-center items-center">
                <MForm onSubmit={handleEmailSubmit}>
                  <div className="space-y-5">
                    <div className="flex gap-5">
                      <MInput
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        label="First Name"
                      />
                      <MInput
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        label="Last Name"
                      />
                    </div>
                    <MInput
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      label="Email Address"
                    />
                    <MInput
                      type="text"
                      name="subject"
                      placeholder="Project inquiry / Collaboration / Hiring"
                      label="Subject"
                    />
                    <MTextArea
                      name="message"
                      placeholder="Tell me about your project, idea, or how I can help you..."
                      label="Message"
                    />
                    <input
                      type="submit"
                      value="Send Message"
                      className="rounded-md bg-primary px-10 py-3"
                    />
                  </div>
                </MForm>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
