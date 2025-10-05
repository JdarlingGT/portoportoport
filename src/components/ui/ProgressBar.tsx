import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-cyan-400/20 z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      initial={{ scaleX: 0 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
    </motion.div>
  );
}
