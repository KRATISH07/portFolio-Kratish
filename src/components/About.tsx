import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUser, FaLightbulb, FaTrophy } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaCode, label: 'Projects Completed', value: '4' },
    { icon: FaRocket, label: 'Hands-on Training', value: '1' },
    { icon: FaTrophy, label: 'Professional Internships', value: '1' },
    { icon: FaLightbulb, label: 'Technologies', value: '15+' },
  ];

  return (
    <section id="about" className="py-24 bg-[#070914] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,92,246,0.14),_transparent_18%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.12),_transparent_18%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">About Me</h2>
          <div className="mx-auto mb-8 h-1 w-28 rounded-full bg-gradient-to-r from-highlight to-accent" />
          <p className="mx-auto max-w-2xl text-lg text-text/70">
            A motivated MCA student with practical development experience and a strong passion for building sleek, production-grade web applications.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="rounded-[2rem] border border-highlight/40 bg-[#0e1b35]/95 p-8 shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-xl">
              <div className="inline-flex items-center gap-3 rounded-full bg-[#0b1221]/80 px-4 py-2 text-sm text-text-dim">
                <FaUser className="text-highlight" />
                MCA Student | Trichy
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-text">Internship at Vected</h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                Completed internship training on a grocery shopping platform with practical backend architecture, API design, and team collaboration.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-highlight/15 bg-[#0b1221]/90 p-6 shadow-xl backdrop-blur-xl">
                <h4 className="text-xl font-semibold text-text">Full-stack creations with strong structure</h4>
                <p className="mt-3 text-text/70 leading-relaxed">
                  I build complete software products—from backend architecture to beautiful frontend experiences—using modern web technologies and an emphasis on maintainable code.
                </p>
              </div>
              <div className="rounded-[2rem] border border-highlight/15 bg-[#0b1221]/90 p-6 shadow-xl backdrop-blur-xl">
                <h4 className="text-xl font-semibold text-text">Project Delivery</h4>
                <p className="mt-3 text-text/70 leading-relaxed">
                  Delivered complete apps using Node.js, React, Socket.io, and MongoDB with a focus on performance and maintainability.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[2rem] border border-highlight/15 bg-[#0b1221]/90 p-6 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <stat.icon className="text-3xl text-highlight" />
                  <div className="text-right">
                    <p className="text-3xl font-bold text-text">{stat.value}</p>
                    <p className="text-sm uppercase tracking-[0.2em] text-text/60">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
