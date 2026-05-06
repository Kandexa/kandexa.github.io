import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import ValueAreas from "./components/ValueAreas";
import Vision from "./components/Vision";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <ValueAreas />
        <Vision />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
