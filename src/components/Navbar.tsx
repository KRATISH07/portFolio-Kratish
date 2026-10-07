import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const items = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'achievements', label: 'Achievements' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[.08] bg-[#080d17]/85 backdrop-blur-xl" aria-label="Main navigation">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link to="hero" smooth className="cursor-pointer text-lg font-bold tracking-tight text-white" aria-label="Kratish Mewada home">
          KM<span className="text-highlight">.</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <Link key={item.to} to={item.to} smooth offset={-72} className="cursor-pointer rounded-lg px-3 py-2 text-sm text-text-muted transition hover:bg-white/[.05] hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <button type="button" className="rounded-lg border border-white/10 p-2 text-white md:hidden" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && <div className="border-t border-white/[.08] bg-[#080d17] px-5 py-3 md:hidden">
        {items.map((item) => (
          <Link key={item.to} to={item.to} smooth offset={-72} onClick={() => setIsOpen(false)} className="block cursor-pointer rounded-lg px-3 py-3 text-sm text-text-muted hover:bg-white/[.05] hover:text-white">
            {item.label}
          </Link>
        ))}
      </div>}
    </nav>
  );
};

export default Navbar;
