import { motion } from 'framer-motion';

const groups = [
  { title: 'Languages', description: 'Programming and scripting', skills: ['C++', 'Python', 'JavaScript', 'C', 'Kotlin'] },
  { title: 'Backend & APIs', description: 'Services and integration', skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'Socket.io', 'AsyncIO'] },
  { title: 'AI & LLM', description: 'Retrieval and agent workflows', skills: ['LangGraph', 'LangChain', 'RAG', 'Multi-agent systems', 'ChromaDB', 'Embeddings'] },
  { title: 'Data & Platforms', description: 'Persistence and delivery', skills: ['PostgreSQL', 'MongoDB', 'SQLAlchemy', 'Alembic', 'Room', 'DataStore', 'Docker', 'Git'] },
];

const Skills = () => (
  <section id="skills" className="border-y border-white/[.06] bg-white/[.018] py-24 sm:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[.22em] text-accent">Technical toolkit</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Tools I use to build and ship.</h2>
        <p className="mt-4 leading-7 text-text-muted">A snapshot of the languages, frameworks, and platforms used across my projects.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((group, index) => (
          <motion.article key={group.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .45, delay: index * .05 }} className="rounded-2xl border border-white/[.08] bg-[#0d1522] p-6 sm:p-7">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <span className="hidden text-xs text-text-muted sm:inline">{group.description}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => <span key={skill} className="rounded-lg border border-white/[.08] bg-white/[.035] px-3 py-1.5 text-sm text-text-muted">{skill}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
