import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowDown, FaEnvelope, FaFileDownload, FaFileWord } from 'react-icons/fa';

const resumeUrl = `${import.meta.env.BASE_URL}Kratish_Mewada_Resume.pdf`;
const wordResumeUrl = `${import.meta.env.BASE_URL}Kratish_Mewada_Resume.docx`;

const Hero = () => (
  <section id="hero" className="relative flex min-h-[90vh] items-center overflow-hidden pt-24 pb-16">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_8%,rgba(95,115,255,.18),transparent_35%),radial-gradient(ellipse_at_90%_85%,rgba(71,200,232,.12),transparent_32%)]" />
    <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-10">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: [.22, 1, .36, 1] }}>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-highlight/25 bg-highlight/10 px-4 py-2 text-sm font-medium text-highlight">
          <span className="h-2 w-2 rounded-full bg-highlight" /> MCA candidate · NIT Tiruchirappalli
        </p>
        <h1 className="max-w-3xl font-heading text-5xl font-bold leading-[1.05] tracking-tight text-text sm:text-6xl lg:text-7xl">
          Kratish <span className="gradient-text">Mewada</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl">
          I build backend services and AI-powered applications, with a focus on reliable APIs, practical LLM systems, and thoughtful product details.
        </p>
        <p className="mt-5 font-mono text-sm text-accent sm:text-base">Backend Engineering <span className="px-2 text-white/30">/</span> AI &amp; LLM Systems</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href={resumeUrl} download className="inline-flex items-center gap-2 rounded-xl bg-highlight px-5 py-3 font-semibold text-[#07101d] shadow-lg shadow-highlight/15 transition duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-highlight/30">
            <FaFileDownload /> PDF résumé
          </a>
          <a href={wordResumeUrl} download className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[.04] px-5 py-3 font-semibold text-text transition hover:border-accent/50 hover:bg-white/[.08]">
            <FaFileWord /> DOCX
          </a>
          <Link to="contact" smooth offset={-72} className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/15 bg-white/[.04] px-5 py-3 font-semibold text-text transition hover:border-accent/50 hover:bg-white/[.08]">
            <FaEnvelope /> Contact me
          </Link>
          <Link to="projects" smooth offset={-72} className="inline-flex cursor-pointer items-center gap-2 rounded-xl px-4 py-3 font-medium text-text-muted transition hover:text-text">
            View projects <FaArrowDown className="text-xs" />
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-text-muted">
          <a className="hover:text-highlight" href="https://github.com/KRATISH07" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-highlight" href="https://in.linkedin.com/in/kratish-mewada-348029347" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-highlight" href="https://leetcode.com/u/kratish_mewada/" target="_blank" rel="noreferrer">LeetCode</a>
          <a className="hover:text-highlight" href="https://www.codechef.com/users/kratish_07" target="_blank" rel="noreferrer">CodeChef</a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: .94, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .9, delay: .15, ease: [.22, 1, .36, 1] }} className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-highlight/20 via-accent/10 to-transparent blur-2xl" />
        <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#101a2a] p-3 shadow-2xl shadow-black/40">
          <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Kratish Mewada" className="h-[390px] w-full rounded-[1.15rem] object-cover object-[center_38%] sm:h-[460px]" />
          <div className="absolute inset-x-3 bottom-3 rounded-b-[1.15rem] bg-gradient-to-t from-[#07101d] via-[#07101d]/90 to-transparent px-5 pb-5 pt-16">
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-highlight">Currently focused on</p>
            <p className="mt-2 text-lg font-semibold text-white">APIs · agent workflows · useful software</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[.06] px-4 py-3 backdrop-blur">
                <p className="text-2xl font-bold text-white">800+</p><p className="mt-1 text-xs text-text-muted">DSA problems solved</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[.06] px-4 py-3 backdrop-blur">
                <p className="text-2xl font-bold text-white">12</p><p className="mt-1 text-xs text-text-muted">NIMCET All India Rank</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
