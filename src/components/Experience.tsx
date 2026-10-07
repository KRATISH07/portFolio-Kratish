import { motion } from 'framer-motion';

const Experience = () => (
  <section id="experience" className="border-y border-white/[.06] bg-white/[.018] py-24 sm:py-28">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[.22em] text-accent">Experience</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Learning by building with a team.</h2>
        <motion.article initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .45 }} className="mt-8 rounded-2xl border border-white/[.08] bg-[#0d1522] p-6 sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div><h3 className="text-xl font-semibold text-white">AI/ML Intern</h3><p className="mt-1 text-text-muted">National Institute of Technology Tiruchirappalli</p></div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-text-muted">Internship</span>
          </div>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-text-muted">
            <li>Built a camel body-part segmentation system with YOLO11s-Seg, trained on a custom polygon-annotated dataset.</li>
            <li>Integrated image upload, inference, and segmentation result visualization in Flask; extending the system with reference-based body-proportion comparison.</li>
          </ul>
        </motion.article>
        <motion.article initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .45 }} className="mt-4 rounded-2xl border border-white/[.08] bg-[#0d1522] p-6 sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div><h3 className="text-xl font-semibold text-white">Backend Developer Intern</h3><p className="mt-1 text-text-muted">Vected Technologies Pvt. Ltd. · Indore</p></div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-text-muted">May – Jun 2025</span>
          </div>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-text-muted">
            <li>Contributed to a BigBasket-inspired grocery commerce platform during a two-month internship.</li>
            <li>Built 7+ REST API endpoints and implemented JWT authentication and CRUD operations.</li>
            <li>Validated API workflows with Postman and worked with a teammate to deliver features.</li>
          </ul>
        </motion.article>
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-[.22em] text-accent">Education &amp; leadership</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Education and campus involvement.</h2>
        <div className="mt-8 space-y-4">
          <article className="rounded-2xl border border-white/[.08] bg-[#0d1522] p-6">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-highlight">Expected 2027 · GPA 7.73/10</p>
            <h3 className="mt-2 text-lg font-semibold text-white">Master of Computer Applications</h3>
            <p className="mt-1 text-sm text-text-muted">National Institute of Technology Tiruchirappalli</p>
          </article>
          <article className="rounded-2xl border border-white/[.08] bg-[#0d1522] p-6">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-highlight">2024 · GPA 8.06/10</p>
            <h3 className="mt-2 text-lg font-semibold text-white">B.Sc. in Computer Science</h3>
            <p className="mt-1 text-sm text-text-muted">Sanskar College of Professional Studies, Indore</p>
          </article>
          <article className="rounded-2xl border border-white/[.08] bg-[#0d1522] p-6">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-highlight">Volunteer · Mar 2025</p>
            <h3 className="mt-2 text-lg font-semibold text-white">VERSION’25 · NIT Trichy</h3>
            <p className="mt-2 text-sm leading-6 text-text-muted">Coordinated logistics for the 3-day All India MCA Meet, supporting 130+ participants from 30+ institutions and 11 technical and non-technical events.</p>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
