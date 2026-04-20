import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Online Grocery Delivery App',
      description: 'Complete grocery shopping system built as a BigBasket clone with scalable architecture, secure authentication, and admin workflows.',
      image: '/grocery.png',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
      category: 'Full Stack',
      github: 'https://github.com/KRATISH07/Online-Grocery-Delivery-App',
    },
    {
      title: 'Sketch It',
      description: 'Multiplayer sketch-and-guess game with real-time drawing, role-based gameplay, and live communication using Socket.io.',
      image: '/sketch.png',
      technologies: ['Node.js', 'Socket.io', 'Express', 'JavaScript'],
      category: 'Game',
      github: 'https://github.com/KRATISH07/Sketch-It',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern personal portfolio showcasing projects, experience, and skills using React, Tailwind CSS, and motion animations.',
      image: '/portfolio.png',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      category: 'Frontend',
      github: 'https://github.com/KRATISH07/portfolio',
    },
    {
      title: 'Code Obfuscator & Decoder System',
      description: 'A Java-based backend system that obfuscates code using logic transformations, random code injection, and variable renaming, with a decode feature to restore original code.',
      image: '/code_obfuscator.png',
      technologies: ['Java', 'Algorithms', 'Encoding', 'Decoding'],
      category: 'Backend',
      github: 'https://github.com/KRATISH07/code-obfuscator',
    },
  ];

  const categories = ['All', 'Full Stack', 'Game', 'Frontend', 'Backend'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-[#070919] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.12),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.1),_transparent_20%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">Featured Projects</h2>
          <div className="mx-auto mb-8 h-1 w-28 rounded-full bg-gradient-to-r from-highlight to-accent" />
          <p className="mx-auto max-w-2xl text-lg text-text/70">
            A curated selection of projects from my MCA journey and professional training.
          </p>
        </motion.div>

        <motion.div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                filter === category
                  ? 'bg-highlight text-white shadow-lg shadow-blue-500/25'
                  : 'bg-[#0b1124] text-text/70 border border-white/10 hover:border-highlight/30 hover:text-text'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#111827] rounded-xl p-4 flex flex-col h-full"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                  onError={() => console.error('Project image failed to load:', project.title)}
                />
              </div>
              <div className="flex flex-col flex-grow justify-between mt-4">
                <div>
                  <span className="inline-flex rounded-full bg-highlight/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-text">{project.title}</h3>
                  <p className="mt-3 text-text/70 leading-relaxed text-sm">{project.description}</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-highlight/10 bg-highlight/10 px-3 py-1 text-[11px] text-highlight">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-[#0f1727] px-4 py-2 text-sm font-semibold text-text transition hover:bg-white/5">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;