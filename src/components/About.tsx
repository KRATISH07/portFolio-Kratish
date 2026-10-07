import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="relative py-24 sm:py-28">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:px-10">
      <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .5 }}>
        <p className="text-sm font-semibold uppercase tracking-[.22em] text-accent">A little about me</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Curious about systems, driven by what they can do.</h2>
      </motion.div>
      <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .5, delay: .08 }} className="space-y-5 text-base leading-8 text-text-muted sm:text-lg">
        <p>I’m pursuing an MCA at NIT Tiruchirappalli and working across backend engineering, AI/LLM applications, and Android development.</p>
        <p>My projects range from an agent-based incident management platform to a placement-preparation app built with a teammate. I enjoy turning complex requirements into clear APIs and useful features.</p>
        <p>I also spend time strengthening problem-solving fundamentals: I’ve solved more than 800 DSA problems and reached a LeetCode peak rating of 1806.</p>
      </motion.div>
    </div>
  </section>
);

export default About;
