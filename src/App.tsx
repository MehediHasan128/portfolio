import AnimatedContent from "./components/AnimatedContent";
import HomePage from "./Home/Home/Home";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={true}
        duration={2.5}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.5}
        className="fixed top-10 left-1/2 transform -translate-x-1/2 right-0 z-50 w-[80%]"
      >
        <Navbar />
      </AnimatedContent>
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
