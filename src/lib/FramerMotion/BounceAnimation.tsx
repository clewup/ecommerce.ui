import { motion } from "framer-motion";

const BounceAnimation = ({ children }: any) => {
  return (
    <motion.div
      initial={{ y: 70 }}
      whileInView={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
export default BounceAnimation;
