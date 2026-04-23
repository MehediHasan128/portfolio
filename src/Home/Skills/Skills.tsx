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
import jwt from "../../assets/icons/jwt.png";
import OrbitImages from "../../components/OrbitImages";

const frontend = [html5, css3, java, redux, tailwind, next, figma];
const backend = [express, node, mongo, mongoose, typescript, jwt];

const Skills = () => {
  return (
    <section id="skills">
      <Container>
        <>
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 md:gap-0">
            <div className="md:w-[60%]">
              <h1 className="text-3xl lg:text-5xl lg:leading-16">
                <span className="text-lg lg:text-base font-headingStyle">
                  My Professional
                </span>{" "}
                <br />
                <span className="font-bold">
                  Background Skills and <br />
                  Accomplishments
                </span>
              </h1>
            </div>
            <div className="md:w-[40%] md:text-end">
              <p className="md:text-sm lg:text-lg">
                I'm skilled in HTML, CSS, JavaScript and frameworks like React
                and Node.js. Ialso have experience with database management
                using MongoDB.
              </p>
            </div>
          </div>
          <div className="relative my-56 md:my-80">
            <div className="w-[30%] lg:w-[20%] xl:w-[15%] 2xl:w-[12%] mx-auto">
              <img src={brain} alt="" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]">
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
            <div className="text-white absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full lg:w-[75%] xl:w-[60%] 2xl:w-[45%]">
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
        </>
      </Container>
    </section>
  );
};

export default Skills;
