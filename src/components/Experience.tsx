import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: 'May 1 – June 20',
      title: 'AI/ML Intern at NIT Trichy',
      company: 'NIT Trichy',
      description: 'Worked on an anomaly detection system using machine learning models to identify unusual patterns in datasets. Performed data preprocessing, feature engineering, and model evaluation to improve detection accuracy. Focused on scalable backend integration and performance optimization.',
    },
    {
      year: 'May 2025 - Jun 2025',
      title: 'Internship Training Program',
      company: 'Vected Technologies Pvt. Ltd., Indore',
      description: 'Completed internship training focused on complete grocery shopping platform development using Node.js, Express, MongoDB, and full-stack integration best practices.',
    },
    {
      year: '2024 - Present',
      title: 'MCA Student',
      company: 'Master of Computer Applications',
      description: 'Pursuing MCA with a focus on software engineering, web development, and scalable application architecture.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-secondary to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-text text-center mb-12">Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-highlight h-full"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8 relative`}
            >
              <div className="bg-primary/40 p-6 rounded-xl w-full md:w-1/2 backdrop-blur-xl border border-highlight/20 shadow-xl">
                <h3 className="text-xl font-bold text-text">{exp.title}</h3>
                <p className="text-highlight">{exp.company} - {exp.year}</p>
                <p className="text-text mt-3 leading-relaxed">{exp.description}</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-highlight rounded-full border-4 border-primary"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;