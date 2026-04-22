import Container from "../../components/Container";
import laivaly from "../../assets/projects/laivaly.png";
import { FiArrowUpRight } from "react-icons/fi";
import TiltedCard from "../../components/TiltedCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-radial-[at_75%_75%] from-[#130032] to-[#060010] to-75%"
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

          <div className="my-32 flex">
            <div className="w-[50%]">
              <div className="flex items-end">
                <h1 className="text-9xl font-extrabold">01</h1>
                <span className="py-3">
                  <h1 className="text-3xl font-bold">Laivaly</h1>
                  <p className="text-gray-400">
                    A modern full-stack clothing e-commerce platform
                  </p>
                </span>
              </div>
              <div className="text-justify mr-10 my-5 text-sm text-gray-300">
                <p>
                  Laivaly is a full-stack clothing e-commerce web application
                  built using the MERN stack. It allows users to browse
                  products, add to cart, and securely complete purchases using
                  multiple payment methods. The platform includes a dedicated
                  backend server for handling authentication, orders, and
                  payments.
                </p>
              </div>
              <div className="flex gap-5">
                <div className="w-[50%]">
                  <h1 className="font-medium">Key Features</h1>
                  <ul className="my-5 text-sm text-gray-400 list-disc list-inside space-y-2">
                    <li>User authentication with JWT & protected routes</li>
                    <li>Add to cart & wishlist functionality</li>
                    <li>Secure checkout with Stripe, PayPal & COD</li>
                    <li>Order management system</li>
                    <li>Admin dashboard for product & order control</li>
                    <li>Responsive and modern UI</li>
                  </ul>
                </div>
                <div className="w-[50%]">
                  <h1 className="font-medium">Tech Stack</h1>
                  <ul className="my-5 text-sm text-gray-400 list-disc list-inside space-y-2">
                    <li>
                      <span className="font-semibold text-gray-200">
                        Frontend:
                      </span>{" "}
                      Next.js, TypeScript, Tailwind CSS, ShadcnUI.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-200">
                        Backend:
                      </span>{" "}
                      Node.js, Express.js, TypeScript.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-200">
                        Database:
                      </span>{" "}
                      MongoDB (Mongoose).
                    </li>
                    <li>
                      <span className="font-semibold text-gray-200">
                        Authentication:
                      </span>{" "}
                      JSON Web Token
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-5 space-x-2.5">
                <a href="" target="_blank" rel="noopener noreferrer" className="border px-5 py-2 rounded-md hover:shadow-2xl hover:shadow-primary/50 transition-shadow duration-300 cursor-target">
                  Client Repository
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="border px-5 py-2 rounded-md hover:shadow-2xl hover:shadow-primary/50 transition-shadow duration-300 cursor-target">
                  Client Repository
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="border px-5 py-2 rounded-md hover:shadow-2xl hover:shadow-primary/50 transition-shadow duration-300 cursor-target">
                  Client Repository
                </a>
              </div>
            </div>
            <div className="w-[50%] rounded-2xl relative h-[550px]">
              <TiltedCard
                imageSrc={laivaly}
                altText="Laivaly Project"
                captionText="Laivaly - Client Portal"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                  <div className="absolute top-5 right-5 bg-white text-black rounded-full p-2.5 text-lg cursor-target">
                    <a
                      href="http://client.laivaly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiArrowUpRight />
                    </a>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
