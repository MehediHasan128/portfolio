import Container from "../../components/Container";
import SpotlightCard from "../../components/SpotlightCard";
import HASC from "../../assets/logo/HASC.png";
import UHSC from "../../assets/logo/UHSC.png";
import UU from '../../assets/logo/UU.png';

const educationalQualifications = [
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Haider Ali High School and College",
    passingYear: "2016-2018",
    logo: HASC,
    description:
      "Completed secondary education with a Science background, building strong fundamentals in Mathematics, English, and ICT. Developed early analytical and problem-solving skills.",
    spotLightColor: "#0b7244",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Uttara High School and College",
    passingYear: "2018-2020",
    logo: UHSC,
    description:
      "Continued academic journey in Science, strengthening knowledge in mathematics and logical reasoning. Developed a deeper interest in technology and computing.",
    spotLightColor: "#fb0200",
  },
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Uttara University",
    passingYear: "2022-2026",
    logo: UU,
    description:
      "Specialized in full-stack web development with a strong focus on the MERN stack. Built multiple real-world projects, developing scalable applications and gaining practical experience in modern web technologies.",
    spotLightColor: "#1d45b6",
  },
];

const Qualifications = () => {
  return (
    <section id="qualifications" className="py-32">
      <Container>
        <div>
          <div className="flex justify-between items-end">
            <h1 className="text-3xl leading-16">
              My <br />
              <span className="text-5xl font-bold">Academic Journey</span>
            </h1>
            <p>
              A brief overview of my educational background and learning path.
            </p>
          </div>

          <div className="flex mt-32 gap-5">
            {educationalQualifications.map((item, i) => (
              <SpotlightCard
                className="custom-spotlight-card w-full hover:-translate-y-2.5 duration-500"
                spotlightColor="#b8a9f5"
                key={i}
              >
                <div className="text-black space-y-5">
                  <div className="flex gap-10">
                    <div className="w-[20%]">
                      <img src={item.logo} alt={item.institution} />
                    </div>
                    <div className="w-[80%]">
                      <h1 className="text-lg font-bold">{item.degree}</h1>
                      <p className="font-medium text-gray-600">
                        {item.institution}
                      </p>
                      <p className="font-semibold text-primary">
                        {item.passingYear}
                      </p>
                    </div>
                  </div>
                  <div className="text-justify font-medium text-gray-700 text-sm">
                    <p>{item.description}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Qualifications;
