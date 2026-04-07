import GlassSurface from "../../components/GlassSurface";
import GooeyNav from "../../components/GooeyNav";
import { MdOutlineArrowOutward } from "react-icons/md";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Qualifications", href: "#qualifications" },
];

const Navbar = () => {
  return (
    <GlassSurface
      width="100%"
      borderRadius={50}
      brightness={50}
      backgroundOpacity={0.5}
      className="my-custom-class px-12 py-3"
    >
      <div className="text-white w-full flex justify-between items-center">
        {/* logo */}
        <div className="cursor-target p-2">
          <h1>MehediScript</h1>
        </div>
        {/* navigation links */}
        <nav>
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </nav>
        {/* Contact button */}
        <div>
          <button className="border-2 bg-white font-medium text-black rounded-full flex items-center gap-2 p-0.5 cursor-target active:scale-95 duration-200">
            <span className="px-2.5">Get in touch</span>
            <span className="bg-[#5227ff] rounded-full text-white p-2.5">
              <MdOutlineArrowOutward />
            </span>
          </button>
        </div>
      </div>
    </GlassSurface>
  );
};

export default Navbar;
