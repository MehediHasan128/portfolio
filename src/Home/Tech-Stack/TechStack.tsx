import mongodb from "../../assets/icons/mongo.png";
import express from "../../assets/icons/express.png";
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
    <section className="relative">
      <div className="bg-primary absolute top-0 h-full w-full z-0 -skew-2" />
      <div className="relative bg-white z-10 skew-2 py-5">
        <div className="absolute top-0 left-0 w-24 h-full bg-linear-to-r from-[#2c2c2c] via-[#9a9a9ac4] to-[#ffffff53]" />

        <div className="flex gap-20 overflow-hidden">
          {techStacks.map((tech, i) => (
            <div key={i} className="flex items-center gap-10">
              <div className="w-16">
                <img src={tech.image} alt={tech.text} />
              </div>
              <h1 className="text-4xl font-medium">{tech.text}</h1>
            </div>
          ))}
        </div>

        <div className="absolute top-0 right-0 w-24 h-full bg-linear-to-l from-[#2c2c2c] via-[#9a9a9ac4] to-[#ffffff53]" />
      </div>
    </section>
  );
};

export default TechStack;
