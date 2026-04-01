import { motion } from "framer-motion";

const SupportCTA = () => (
  <section className="relative py-24 px-6 text-center">
    <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="relative z-10"
    >
      <p className="text-lg md:text-xl text-muted-foreground font-body">
        Have more questions?{" "}
        <motion.a
          href="#support"
          className="relative inline-block font-display font-semibold text-foreground"
          whileHover={{ scale: 1.03 }}
        >
          <span className="glow-text">Visit Our Support Page</span>
          <motion.span
            className="absolute -bottom-1 left-0 right-0 h-px"
            style={{ background: "var(--gradient-accent)" }}
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      </p>
    </motion.div>
  </section>
);

export default SupportCTA;
