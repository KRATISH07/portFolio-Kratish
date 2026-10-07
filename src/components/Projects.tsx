import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'Camel Body Segmentation',
    subtitle: 'NIT Trichy internship · Jun–Jul 2026 · comparison in progress',
    category: 'Computer vision',
    mark: 'SEGMENT / MEASURE / COMPARE',
    description: 'For the NIT Trichy internship, prepared a 284-image polygon-annotated dataset and trained YOLO11s-Seg to label camel head, legs, hump, tail, and stomach. A Flask interface accepts an image and displays the segmentation. The in-progress extension will compare normalized body ratios with selected reference camels; it is an image-based experiment, not an objective beauty judgment.',
    technologies: ['Python', 'YOLO11s-Seg', 'Roboflow', 'Flask', 'Computer Vision'],
    theme: 'from-lime-400/20 via-emerald-500/10 to-transparent',
  },
  {
    title: 'ASIP',
    subtitle: 'Autonomous Society Infrastructure Platform',
    category: 'AI systems',
    mark: 'ASIP / 07 agents',
    description: 'Turns a resident’s infrastructure report into a guided workflow: classify and diagnose the issue, assess its impact, estimate repair cost and duration, support contractor selection, and prepare resident updates. The seven-agent system uses RAG and structured workflows across four incident categories.',
    technologies: ['FastAPI', 'PostgreSQL', 'LangGraph', 'RAG', 'ChromaDB'],
    github: 'https://github.com/KRATISH07/ASIP',
    demo: 'https://asip-ai.vercel.app',
    theme: 'from-indigo-500/20 via-blue-500/10 to-transparent',
  },
  {
    title: 'Placement Companion',
    subtitle: 'Android placement preparation app',
    category: 'Android',
    mark: 'PREP / PLAN / PRACTICE',
    description: 'A Kotlin Android app built with a teammate for organizing placement preparation: plan study sessions, track progress, bookmark questions, and search a bundled company-question collection offline. Groq features add study plans, doubt help, and interview feedback; the dataset contains 17,826 questions from 659 companies.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'DataStore', 'Groq'],
    facts: '32 MB APK · Android 8.0+ (SDK 26+) · target SDK 35',
    github: 'https://github.com/KRATISH07/placement-companion',
    theme: 'from-cyan-500/20 via-teal-500/10 to-transparent',
  },
  {
    title: 'Code Obfuscator',
    subtitle: 'Configurable C++ source obfuscation',
    category: 'Developer tools',
    mark: 'SOURCE → TRANSFORM',
    description: 'A Flask-backed web tool that lets developers apply selected transformations to C++ source. It supports identifier renaming, junk-code insertion, opaque predicates, string obfuscation, and numeric-literal masking, so users can combine techniques instead of relying on one fixed transformation.',
    technologies: ['C++', 'Python', 'Flask', 'JavaScript'],
    github: 'https://github.com/KRATISH07/code-obfuscator',
    theme: 'from-amber-400/20 via-orange-500/10 to-transparent',
  },
  {
    title: 'Sketch It',
    subtitle: 'Real-time multiplayer drawing game',
    category: 'Real-time',
    mark: 'DRAW / GUESS / REPEAT',
    description: 'A browser multiplayer game where one player draws and the others guess in real time. Socket.io synchronizes drawing, chat, player roles, automatic drawer rotation, and round scoring, keeping each room in sync through timed rounds.',
    technologies: ['Node.js', 'Express.js', 'Socket.io', 'JavaScript'],
    github: 'https://github.com/KRATISH07/Sketch-It',
    theme: 'from-fuchsia-500/20 via-violet-500/10 to-transparent',
  },
];

const categories = ['All', ...new Set(projects.map((project) => project.category))];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .55 }} className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[.22em] text-accent"><span className="h-px w-8 bg-accent" /> Selected work / 01—05</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Ideas turned into <span className="gradient-text">working software.</span></h2>
          </div>
          <p className="max-w-md leading-7 text-text-muted">Each project starts with a user problem, then connects the engineering decisions to the result—from agent workflows to mobile tools and multiplayer systems.</p>
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter projects">
          {categories.map((category) => (
            <motion.button whileHover={{ y: -2 }} whileTap={{ scale: .96 }} key={category} type="button" onClick={() => setFilter(category)} aria-pressed={filter === category} className={`rounded-full border px-4 py-2 text-sm transition ${filter === category ? 'border-highlight/60 bg-highlight/15 text-highlight shadow-md shadow-highlight/10' : 'border-white/10 bg-white/[.03] text-text-muted hover:border-white/25 hover:text-white'}`}>
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
              <motion.article key={project.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -7, scale: 1.008 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .48, delay: index * .07, type: 'spring', stiffness: 150, damping: 20 }} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[.08] bg-[#0d1522] shadow-lg shadow-black/10 transition-colors hover:border-white/20 hover:shadow-2xl hover:shadow-highlight/10">
              <div className={`project-art relative flex h-40 items-end overflow-hidden bg-gradient-to-br ${project.theme} p-6`}>
                <div className="project-orbit absolute -right-5 -top-16 h-48 w-48 rounded-full border border-white/10" />
                <div className="project-orbit project-orbit-delay absolute -right-1 -top-8 h-32 w-32 rounded-full border border-white/[.12]" />
                <div className="project-glow absolute -right-2 top-0 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                <span className="relative font-mono text-xs font-semibold tracking-[.18em] text-white/75">{project.mark}</span>
                <span className="absolute right-6 top-4 text-6xl font-bold tracking-tight text-white/[.1] transition duration-500 group-hover:scale-110 group-hover:text-white/20">0{index + 1}</span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div><h3 className="text-xl font-semibold text-white">{project.title}</h3><p className="mt-1 text-sm text-text-muted">{project.subtitle}</p></div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-text-muted">{project.category}</span>
                </div>
                <p className="mt-5 flex-1 text-sm leading-7 text-slate-300/80">{project.description}</p>
                {project.facts && <p className="mt-4 rounded-xl border border-accent/20 bg-accent/[.06] px-3 py-2 text-xs font-medium leading-5 text-accent">{project.facts}</p>}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => <span key={technology} className="rounded-md bg-white/[.05] px-2.5 py-1 text-xs text-text-muted">{technology}</span>)}
                </div>
                <div className="mt-6 flex gap-4 border-t border-white/[.07] pt-4 text-sm font-semibold">
                  {'github' in project && <a href={project.github} target="_blank" rel="noreferrer" className="text-white transition hover:text-highlight">GitHub <span aria-hidden="true">↗</span></a>}
                  {'demo' in project && <a href={project.demo} target="_blank" rel="noreferrer" className="text-text-muted transition hover:text-accent">Live demo <span aria-hidden="true">↗</span></a>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
