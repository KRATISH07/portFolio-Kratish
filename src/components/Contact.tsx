import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-text text-center mb-12">Contact</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-text mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-highlight mr-4" size={20} />
                <span className="text-text">kratishmewada99@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-highlight mr-4" size={20} />
                <span className="text-text">+91 8770510470</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-highlight mr-4" size={20} />
                <span className="text-text">India</span>
              </div>
              <div className="flex items-center">
                <FaGithub className="text-highlight mr-4" size={20} />
                <a href="https://github.com/KRATISH07" target="_blank" rel="noreferrer" className="text-text hover:text-accent transition">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <input type="text" placeholder="Name" className="w-full p-3 bg-primary/50 border border-accent rounded text-text placeholder-text/50" />
            <input type="email" placeholder="Email" className="w-full p-3 bg-primary/50 border border-accent rounded text-text placeholder-text/50" />
            <textarea placeholder="Message" className="w-full p-3 bg-primary/50 border border-accent rounded h-32 text-text placeholder-text/50 resize-none"></textarea>
            <button type="submit" className="bg-highlight text-text px-8 py-3 rounded hover:bg-accent transition-colors">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;