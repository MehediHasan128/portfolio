import Container from "../../components/Container";
import { IoMdArrowRoundUp } from "react-icons/io";
import TextPressure from "../../components/TextPressure";
// import TextPressure from "../../components/TextPressure";

const socailMedia = [
  { label: "github", href: "https://github.com/MehediHasan128" },
  { label: "linkedin", href: "" },
  { label: "facebook", href: "" },
];

const Footer = () => {
  return (
    <footer className="bg-radial-[at_75%_25%] from-[#130032] to-[#060010] to-75%">
      <Container>
        <div>
          <div className="flex">
            <div className="h-px bg-linear-to-r from-[#ffffff00] to-[#ffffff] w-full" />
            <div className="h-px bg-white w-full" />
            <div className="h-px bg-linear-to-l from-[#ffffff00] to-[#ffffff] w-full" />
          </div>
          <div className="flex justify-between items-center py-20">
            <h1>
              &copy; {new Date().getFullYear()} Mehedi Hasan. All rights
              reserved.
            </h1>
            <a href="#home" className="flex items-center gap-3 cursor-target">
              Back To Top{" "}
              <div className="rounded-full text-3xl p-2 bg-primary ">
                <IoMdArrowRoundUp />
              </div>
            </a>
          </div>
          <div>
            <p className="uppercase text-lg font-medium">
              have a project in mind?
            </p>
            <TextPressure
              text="Let's Talk"
              flex
              alpha={false}
              stroke
              width={false}
              weight
              italic
              textColor="#ffffff"
              strokeColor="#5227FF"
              minFontSize={36}
            />
          </div>
          <div className="flex justify-between items-center py-20">
            <div className="space-x-5">
              {socailMedia.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="border px-16 py-4 text-lg uppercase rounded-full cursor-target hover:shadow-2xl hover:shadow-primary/50 duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div>
              <h1 className="font-light text-gray-400">
                Design by{" "}
                <span className="text-lg font-semibold text-white">
                  Mehedi Hasan
                </span>
              </h1>
              <h1 className="font-light text-gray-400">
                Development by{" "}
                <span className="text-lg font-semibold text-white">
                  Mehedi Hasan
                </span>
              </h1>
            </div>
          </div>
          <div className="text-center pb-10 leading-16">
            <h1 className="text-5xl font-medium">Thank You</h1>
            <p className="text-gray-400">
              for visiting my portfolio. Your time and attention mean a lot!
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
