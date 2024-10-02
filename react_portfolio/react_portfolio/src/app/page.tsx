import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Experience from "./components/Experience";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  )
}

export default Homepage;