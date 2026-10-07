import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MotionConfig } from 'framer-motion';

function App() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="relative min-h-screen overflow-hidden bg-primary text-text">
      <div className="ambient-grid pointer-events-none fixed inset-0 -z-0" />
      <div className="ambient-blob ambient-blob-one pointer-events-none fixed -left-32 top-40 -z-0 h-96 w-96 rounded-full bg-highlight/10 blur-[120px]" />
      <div className="ambient-blob ambient-blob-two pointer-events-none fixed -right-40 top-[45rem] -z-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[140px]" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
    </MotionConfig>
  );
}

export default App;
