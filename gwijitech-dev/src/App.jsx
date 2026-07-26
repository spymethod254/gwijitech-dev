import Navbar from "./components/common/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

function App() {
  return (
      <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />
                  <Hero />
                        <About />
                              <Skills />
                                       <Projects />
                                  </div>
                                    );
                                    }

                                    export default App;