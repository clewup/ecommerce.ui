import { motion } from "framer-motion";

const ScaleAnimation = ({ children }: any) => {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
export default ScaleAnimation;
