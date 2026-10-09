import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const links = [
  { label: 'Email', value: 'kratishmewada111@gmail.com', href: 'mailto:kratishmewada111@gmail.com', icon: FaEnvelope },
  { label: 'GitHub', value: 'github.com/KRATISH07', href: 'https://github.com/KRATISH07', icon: FaGithub },
  { label: 'LinkedIn', value: 'Connect with me', href: 'https://in.linkedin.com/in/kratish-mewada-348029347', icon: FaLinkedin },
];

const Contact = () => (
  <section id="contact" className="border-t border-white/[.07] bg-[#0a111d] py-24 sm:py-28">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-10">
      <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .45 }}>
        <p className="text-sm font-semibold uppercase tracking-[.22em] text-accent">Get in touch</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">Have a project or role in mind?</h2>
        <p className="mt-5 max-w-xl leading-7 text-text-muted">I’m open to conversations about software engineering opportunities and interesting projects.</p>
        <div className="mt-7 flex items-center gap-2 text-sm text-text-muted"><FaMapMarkerAlt className="text-highlight" /> Trichy, India</div>
      </motion.div>
      <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .45, delay: .08 }} className="flex flex-col gap-3 md:min-w-64">
        {links.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.035] px-4 py-3 text-sm text-text-muted transition hover:border-accent/40 hover:text-white"><link.icon className="text-accent" /> <span>{link.value}</span><span className="ml-auto text-white/40" aria-hidden="true">↗</span></a>)}
      </motion.div>
    </div>
  </section>
);

export default Contact;
