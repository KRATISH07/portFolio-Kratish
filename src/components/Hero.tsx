import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';
  const [currentLine, setCurrentLine] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

  const codeLines = [
    "const developer = 'Kratish';",
    "console.log('Building amazing apps');",
    "while(coding) { innovate(); }",
    "// Full Stack Magic ✨",
    "npm install creativity",
  ];

  const quotes = [
    "I build scalable apps with clean architecture and polished user experiences.",
    "Turning ideas into reality through code and creativity.",
    "Passionate about creating digital solutions that make a difference.",
    "Full-stack developer crafting modern web experiences.",
    "Code is poetry, and I'm the poet.",
  ];

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeLines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [codeLines.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section id="hero" className="min-h-screen pt-24 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_18%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              <h1 className="text-7xl md:text-8xl xl:text-9xl font-heading font-[800] text-text tracking-[0.5px] drop-shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                Kratish Mewada
              </h1>
              <p className="text-xl md:text-2xl font-medium text-text-muted leading-[1.6]">
                Building scalable web experiences with modern design
              </p>
            </motion.div>
            <p className="text-accent text-2xl font-semibold">
              {text}<span className="animate-pulse text-white">|</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`${import.meta.env.BASE_URL}205124045_Kratish_Mewada.pdf`} download className="inline-flex items-center justify-center rounded-full bg-highlight px-8 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]">
                <FaDownload className="mr-2" /> Resume
              </a>
              <Link to="contact" smooth={true} className="inline-flex items-center justify-center rounded-full bg-[#0f1727] border border-highlight/20 px-8 py-3 text-base font-semibold text-text shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-highlight/10 hover:text-text">
                <FaEnvelope className="mr-2" /> Contact
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-highlight/25 via-accent/15 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-highlight/20 bg-[#0b1221]/90 shadow-2xl">
              <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Profile" className="h-[520px] w-full object-cover object-[center_85%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080f]/95 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 rounded-b-[2.5rem] bg-gradient-to-t from-[#07080f]/85 to-transparent px-6 pt-12 pb-10">
                <div className="space-y-4 mt-2">
                  <div className="rounded-3xl bg-[#0f1727]/90 backdrop-blur-md p-4 border border-highlight/20">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={currentQuote}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="text-sm text-text/70 italic min-h-[3rem]"
                      >
                        "{quotes[currentQuote]}"
                      </motion.p>
                    </AnimatePresence>
                    <motion.div
                      key={currentLine}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="mt-2 text-xs text-highlight font-mono"
                    >
                      {codeLines[currentLine]}
                    </motion.div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl bg-[#0f1727]/80 p-4 border border-highlight/10 text-center">
                      <div className="text-3xl font-bold text-text">1</div>
                      <div className="text-text/60 text-sm">Internship</div>
                    </div>
                    <div className="rounded-3xl bg-[#0f1727]/80 p-4 border border-highlight/10 text-center">
                      <div className="text-3xl font-bold text-text">4+</div>
                      <div className="text-text/60 text-sm">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
