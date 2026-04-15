import Container from "../../components/Container";
import ProfileCard from "../../components/ProfileCard";
import myAvatar from "../../assets/images/mehedi2.png";
import code from "../../assets/icons/code-02-01.png";

const roles = [
  {
    label: "Frontend Magic",
    value:
      "Crafting responsive and interactive UI/UX using React.js, Tailwind CSS, and HTML5/CSS3.",
  },
  {
    label: "Backend Power",
    value:
      "Building scalable server-side applications and RESTful APIs with Node.js and Express.js.",
  },
  {
    label: "Database Management",
    value:
      "Designing structured and efficient data models using MongoDB and Mongoose.",
  }
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-radial-[at_25%_25%] from-[#130032] to-[#060010] to-75% h-screen"
    >
      <Container className="py-42">
        <div className="text-white 2xl:w-[90%] mx-auto">
          <div className="flex justify-center">
            <div className="text-start w-full">
              <div className="h-1 w-[160%] bg-primary my-8 rounded-full" />
              <h1 className="text-7xl font-extrabold uppercase">about.</h1>
              <p className="py-8 text-justify">
                Hi there! I'm Mehedi Hasan, a Junior Full-Stack Web Developer
                specializing in the MERN Stack. I am passionate about creating
                efficient, user-friendly, and modern web applications from the
                ground up.
              </p>
              <p className="text-lg font-medium">
                Here is what I bring to the table
              </p>
              <ul className="p-5 list-inside list-disc space-y-2">
                {roles.map((role, i) => (
                  <li key={i} className="text-gray-400 text-justify">
                    <span className="font-semibold text-white">
                      {role.label}:{" "}
                    </span>
                    {role.value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full flex justify-center">
              <ProfileCard
                name="Mehedi Hasan"
                title="Software Engineer"
                handle="Mehedi Hasan"
                status="Online"
                contactText="Contact Me"
                avatarUrl={myAvatar}
                showUserInfo
                enableTilt={true}
                enableMobileTilt
                onContactClick={() => console.log("Contact clicked")}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                iconUrl={code}
                behindGlowEnabled
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
