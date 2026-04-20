import { motion } from 'framer-motion';

const Loading = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed inset-0 bg-primary flex items-center justify-center z-50"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-16 h-16 border-4 border-highlight border-t-transparent rounded-full"
      ></motion.div>
    </motion.div>
  );
};

export default Loading;