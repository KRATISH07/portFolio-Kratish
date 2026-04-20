import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      const hue = (x + y) % 360;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
        cursorRef.current.style.setProperty('--hue', `${hue}`);
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="App relative overflow-hidden">
      <div className="theme-background" />
      <div className="floating-shapes">
        <div className="shape1"></div>
        <div className="shape2"></div>
      </div>
      <div ref={cursorRef} className="cursor-hue" />
      <div ref={dotRef} className="cursor-dot" />
      <Loading isLoading={isLoading} />
      <Navbar />
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={sectionVariants}>
          <Hero />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <About />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Skills />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Projects />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Experience />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Contact />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
