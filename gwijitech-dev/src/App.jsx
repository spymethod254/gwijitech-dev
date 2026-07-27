import { useEffect, useState } from "react";

import Navbar from "./components/common/Navbar";
import LoadingScreen from "./components/common/LoadingScreen";

import Hero from "./components/home/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Stats from "./components/home/Stats";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;