import GlassSurface from "../../components/GlassSurface";
import GooeyNav from "../../components/GooeyNav";
import StarBorder from "../../components/StarBorder";

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
        <StarBorder
          as="button"
          className="custom-class cursor-target bg-transparent border"
          color="rgb(82, 38, 255)"
          speed="5s"
        >
          Content
        </StarBorder>
      </div>
    </GlassSurface>
  );
};

export default Navbar;
