const Footer = () => (
  <footer className="border-t border-white/[.07] bg-[#080d17] py-6">
    <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
      <p>© {new Date().getFullYear()} Kratish Mewada</p>
      <a href="#hero" className="transition hover:text-white">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;
