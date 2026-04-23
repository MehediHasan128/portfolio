import mongodb from "../../assets/icons/mongo.png";
import express from "../../assets/icons/express-black.png";
import react from "../../assets/icons/react.png";
import node from "../../assets/icons/node.png";

const techStacks = [
  {
    text: "MongoDB",
    image: mongodb,
  },
  {
    text: "Express",
    image: express,
  },
  {
    text: "React",
    image: react,
  },
  {
    text: "Node",
    image: node,
  },
  {
    text: "MongoDB",
    image: mongodb,
  },
  {
    text: "Express",
    image: express,
  },
  {
    text: "React",
    image: react,
  },
  {
    text: "Node",
    image: node,
  },
];

const TechStack = () => {
  return (
    <section className="relative text-black">
      <div className="bg-primary absolute top-0 h-full w-full z-0 -skew-2" />
      <div className="relative bg-white z-10 skew-2 py-3 2xl:py-5">
        <div className="absolute top-0 left-0 w-10 md:w-16 lg:w-24 h-full bg-linear-to-r from-[#2c2c2c] via-[#9a9a9ac4] to-[#ffffff53]" />

        <div className="flex gap-3 md:gap-5 lg:gap-10 2xl:gap-20 overflow-hidden">
          {techStacks.map((tech, i) => (
            <div key={i} className="flex items-center gap-3 md:gap-5 2xl:gap-10">
              <div className="w-5 md:w-10 xl:w-12 2xl:w-16 -skew-2">
                <img src={tech.image} alt={tech.text} />
              </div>
              <h1 className="text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-4xl font-medium -skew-2">
                {tech.text}
              </h1>
            </div>
          ))}
        </div>

        <div className="absolute top-0 right-0 w-10 md:w-16 lg:w-24 h-full bg-linear-to-l from-[#2c2c2c] via-[#9a9a9ac4] to-[#ffffff53]" />
      </div>
    </section>
  );
};

export default TechStack;
