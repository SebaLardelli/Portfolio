import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Cv } from "./components/Cv";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Formation } from "./components/Formation";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return hash;
}

export default function App() {
  const hash = useHash();

  if (hash === "#cv") {
    return <Cv />;
  }

  return (
    <div className="bg-page min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Formation />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
