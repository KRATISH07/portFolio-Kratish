import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'Camel Body Segmentation',
    subtitle: 'NIT Trichy internship project · comparison phase in progress',
    category: 'Computer vision',
    mark: 'SEGMENT / MEASURE / COMPARE',
    description: 'Trained YOLO11s-Seg on a custom polygon-annotated camel dataset and integrated image upload and segmentation-result visualization in Flask. The current extension compares normalized body-part ratios with a selected reference group; this is an image-based similarity experiment, not an objective beauty judgment.',
    technologies: ['Python', 'YOLO11s-Seg', 'Roboflow', 'Flask', 'Computer Vision'],
    theme: 'from-lime-400/20 via-emerald-500/10 to-transparent',
  },
  {
    title: 'ASIP',
    subtitle: 'Autonomous Society Infrastructure Platform',
    category: 'AI systems',
    mark: 'ASIP / 07 agents',
    description: 'An AI-assisted incident-management platform that diagnoses infrastructure issues, estimates impact, supports contractor selection, and keeps residents informed.',
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
    description: 'A two-person project for planning study sessions and preparing for interviews, with offline company-question search, bookmarks, and Groq-powered study and interview assistance.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'DataStore', 'Groq'],
    facts: '32 MB APK · Android 8.0+ (API 26+) · target SDK 35',
    github: 'https://github.com/KRATISH07/placement-companion',
    theme: 'from-cyan-500/20 via-teal-500/10 to-transparent',
  },
  {
    title: 'Code Obfuscator',
    subtitle: 'Configurable C++ source obfuscation',
    category: 'Developer tools',
    mark: 'SOURCE → TRANSFORM',
    description: 'A web tool for applying configurable source transformations, including identifier renaming, junk-code insertion, opaque predicates, string obfuscation, and numeric-literal masking.',
    technologies: ['C++', 'Python', 'Flask', 'JavaScript'],
    github: 'https://github.com/KRATISH07/code-obfuscator',
    theme: 'from-amber-400/20 via-orange-500/10 to-transparent',
  },
  {
    title: 'Sketch It',
    subtitle: 'Real-time multiplayer drawing game',
    category: 'Real-time',
    mark: 'DRAW / GUESS / REPEAT',
    description: 'A sketch-and-guess game with live drawing, chat, player roles, automatic drawer rotation, and synchronized round scoring over Socket.io.',
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
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[.22em] text-accent">Selected work</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Projects built to solve real problems.</h2>
          </div>
          <p className="max-w-md leading-7 text-text-muted">A mix of backend systems, AI applications, mobile software, and real-time experiences.</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter projects">
          {categories.map((category) => (
            <button key={category} type="button" onClick={() => setFilter(category)} aria-pressed={filter === category} className={`rounded-full border px-4 py-2 text-sm transition ${filter === category ? 'border-highlight bg-highlight text-[#07101d]' : 'border-white/10 bg-white/[.03] text-text-muted hover:border-white/25 hover:text-white'}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <motion.article key={project.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .45, delay: index * .05 }} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[.08] bg-[#0d1522] transition hover:-translate-y-1 hover:border-white/[.16] hover:shadow-2xl hover:shadow-black/20">
              <div className={`relative flex h-36 items-end overflow-hidden bg-gradient-to-br ${project.theme} p-6`}>
                <div className="absolute -right-5 -top-16 h-48 w-48 rounded-full border border-white/[.06]" />
                <div className="absolute -right-1 -top-8 h-32 w-32 rounded-full border border-white/[.08]" />
                <span className="relative font-mono text-xs font-semibold tracking-[.18em] text-white/70">{project.mark}</span>
                <span className="absolute right-6 top-5 text-5xl font-bold tracking-tight text-white/[.08]">0{index + 1}</span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div><h3 className="text-xl font-semibold text-white">{project.title}</h3><p className="mt-1 text-sm text-text-muted">{project.subtitle}</p></div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-text-muted">{project.category}</span>
                </div>
                <p className="mt-5 flex-1 text-sm leading-7 text-text-muted">{project.description}</p>
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
