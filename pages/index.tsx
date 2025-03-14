import About from "../components/sections/About/About";
import Achievements from "../components/sections/Achievements/Achievements";
import Experience from "../components/sections/Experience/Experience";
import Hero from "../components/sections/Hero/Hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Achievements />
      <Experience />
    </main>
  );
};

export default Home; 