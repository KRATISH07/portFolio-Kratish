import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-primary/90 backdrop-blur-xl z-50 border-b border-highlight/20 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img src="/logo.svg" alt="KM Logo" className="h-10 w-10" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { to: 'hero', label: 'Home' },
              { to: 'about', label: 'About' },
              { to: 'skills', label: 'Skills' },
              { to: 'projects', label: 'Projects' },
              { to: 'experience', label: 'Experience' },
              { to: 'contact', label: 'Contact' },
            ].map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  className="text-text hover:text-highlight transition-colors cursor-pointer relative group px-3 py-2 rounded-lg hover:bg-highlight/10"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-highlight group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="p-2 rounded-full bg-highlight/20 hover:bg-highlight/30 transition-colors"
            >
              {isOpen ? <FaTimes className="text-highlight" /> : <FaBars className="text-highlight" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary/95 backdrop-blur-xl rounded-b-lg border-t border-highlight/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { to: 'hero', label: 'Home' },
                { to: 'about', label: 'About' },
                { to: 'skills', label: 'Skills' },
                { to: 'projects', label: 'Projects' },
                { to: 'experience', label: 'Experience' },
                { to: 'contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-text hover:text-highlight hover:bg-highlight/10 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;