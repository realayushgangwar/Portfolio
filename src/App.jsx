import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CurrentlyLearning from './components/CurrentlyLearning';
import Projects from './components/Projects';
import BeyondCode from './components/BeyondCode';
import Contact from './components/Contact';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950 font-sans overflow-x-hidden">
      <BackgroundParticles />
      <Navbar />
      <main className="relative overflow-hidden z-10">
        <div className="pointer-events-none absolute inset-0 bg-grid-slate opacity-15" />
        <div className="relative mx-auto max-w-6xl px-6 py-6 lg:px-8 space-y-4">
          <Hero />
          <About />
          <Skills />
          <CurrentlyLearning />
          <Projects />
          <BeyondCode />
          <Contact />
        </div>
      </main>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-slate-800/80 bg-slate-950 px-6 py-8 text-sm text-slate-400"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="font-medium text-slate-300">© 2026 Ayush Gangwar • GLA University, Mathura</p>
            <p className="text-xs text-sky-400 italic mt-0.5">"Building intelligent solutions for real-world problems."</p>
          </div>
          <p className="text-xs text-slate-500">
            B.Tech CSE (AI/ML) Portfolio
          </p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
