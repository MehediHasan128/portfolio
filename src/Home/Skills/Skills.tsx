import Container from "../../components/Container";
import brain from "../../assets/images/brain.png";
import html5 from "../../assets/icons/html.png";
import css3 from "../../assets/icons/css.png";
import java from "../../assets/icons/js.png";
import redux from "../../assets/icons/redux.png";
import tailwind from "../../assets/icons/tailwind.png";
import next from "../../assets/icons/next2.png";
import figma from "../../assets/icons/figma.png";
import express from "../../assets/icons/express.png";
import node from "../../assets/icons/node.png";
import mongo from "../../assets/icons/mongo.png";
import mongoose from "../../assets/icons/mongoose.png";
import typescript from "../../assets/icons/ts.png";
import OrbitImages from "../../components/OrbitImages";

const frontend = [html5, css3, java, redux, tailwind, next, figma];
const backend = [express, node, mongo, mongoose, typescript];

const Skills = () => {
  return (
    <section className="mb-96">
      <Container className="py-20 text-white">
        <div>
          <div className="flex justify-between items-end">
            <div className="w-[60%]">
              <h1 className="text-5xl leading-16">
                <span className="font-headingStyle">My Professional</span>{" "}
                <br />
                <span className="font-bold">
                  Background Skills and <br />
                  Accomplishments
                </span>
              </h1>
            </div>
            <div className="w-[40%] text-end">
              <p className="text-lg">
                I'm skilled in HTML, CSS, JavaScript and frameworks like React
                and Node.js. Ialso have experience with database management
                using MongoDB.
              </p>
            </div>
          </div>
          <div className="relative mt-96">
            <div className="w-[12%] mx-auto">
              <img src={brain} alt="" />
            </div>
            <div className="text-white absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[30%]">
              <OrbitImages
                images={frontend}
                shape="circle"
                baseWidth={1200}
                radiusX={200}
                radiusY={80}
                rotation={-8}
                duration={30}
                itemSize={120}
                responsive={true}
                radius={470}
                direction="normal"
                fill
                showPath
                pathColor="#ffffff"
                paused={false}
              />
            </div>
            <div className="text-white absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[50%]">
              <OrbitImages
                images={backend}
                shape="circle"
                baseWidth={1200}
                radiusX={200}
                radiusY={80}
                rotation={-8}
                duration={30}
                itemSize={120}
                responsive={true}
                radius={470}
                direction="reverse"
                fill
                showPath
                pathColor="#ffffff"
                paused={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
