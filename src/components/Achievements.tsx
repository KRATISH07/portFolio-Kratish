import { motion } from 'framer-motion';

const achievements = [
  { value: '12', label: 'All India Rank', detail: 'NIMCET · MCA entrance examination', accent: 'text-highlight' },
  { value: '1806', label: 'Peak LeetCode rating', detail: 'Top 8.06% · LeetCode', accent: 'text-accent' },
  { value: '800+', label: 'DSA problems solved', detail: 'Across problem-solving platforms', accent: 'text-emerald-300' },
  { value: '1403', label: 'CodeChef rating', detail: 'Competitive programming', accent: 'text-violet-300' },
];

const Achievements = () => (
  <section id="achievements" className="py-24 sm:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[.22em] text-accent">Milestones</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Progress measured in problems solved.</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item, index) => (
          <motion.article key={item.label} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .4, delay: index * .05 }} className="rounded-2xl border border-white/[.08] bg-[#0d1522] p-6">
            <p className={`text-4xl font-bold tracking-tight ${item.accent}`}>{item.value}</p>
            <h3 className="mt-4 font-semibold text-white">{item.label}</h3>
            <p className="mt-1 text-sm leading-6 text-text-muted">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
