import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: FaCode,
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TypeScript', level: 85 },
      ],
    },
    {
      title: 'Backend',
      icon: FaServer,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
      ],
    },
    {
      title: 'Database',
      icon: FaDatabase,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 70 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: FaTools,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'C/C++', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-highlight to-accent mx-auto rounded-full mb-8"></div>
          <p className="text-text/80 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-primary/40 backdrop-blur-xl rounded-2xl p-6 border border-highlight/20 shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-highlight/20 rounded-lg">
                  <category.icon className="text-2xl text-highlight" />
                </div>
                <h3 className="text-2xl font-bold text-text">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-text font-medium group-hover:text-highlight transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-highlight font-semibold">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-secondary/50 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.3 + skillIndex * 0.1, ease: 'easeOut' }}
                          className="bg-gradient-to-r from-highlight to-accent h-full rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </motion.div>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-highlight/20 to-accent/20 rounded-full blur-sm"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-text mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Tailwind CSS', 'Framer Motion', 'Next.js', 'GraphQL', 'REST APIs',
              'Linux', 'VS Code', 'Figma', 'Jest', 'Webpack', 'Vite'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-highlight/10 text-highlight rounded-full text-sm font-medium border border-highlight/20 hover:bg-highlight/20 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;