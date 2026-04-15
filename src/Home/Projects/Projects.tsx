import Container from "../../components/Container";

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-screen bg-radial-[at_75%_75%] from-[#130032] to-[#060010] to-75%"
    >
      <Container>
        <div>
          <div className="flex justify-between items-end">
            <p>
              An example of my work focusing on performance, scalability, and
              user experience.
            </p>
            <h1 className="text-3xl leading-16 text-end">
              My Latest Work <br />
              <span className="text-5xl font-bold">Featured Project</span>
            </h1>
          </div>
          
        </div>
      </Container>
    </section>
  );
};

export default Projects;
