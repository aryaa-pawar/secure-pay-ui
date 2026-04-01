import { motion } from "framer-motion";
import Particles from "./Particles";
import logo from "@/assets/securepay-logo.png";

const FinalCTA = () => (
  <section className="relative py-40 px-6 overflow-hidden grid-bg">
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, hsla(215, 80%, 60%, 0.1), transparent 60%)" }} />
    <Particles count={20} />

    <div className="max-w-4xl mx-auto relative z-10 text-center">
      <motion.img
        src={logo}
        alt="SecurePay"
        className="h-14 mx-auto mb-8 drop-shadow-[0_0_40px_hsla(215,80%,60%,0.4)]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold font-display mb-6"
      >
        Secure. Scalable. <span className="glow-text">Production-ready.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 50px hsla(215, 80%, 60%, 0.5)" }}
          whileTap={{ scale: 0.97 }}
          className="px-12 py-5 rounded-2xl font-display font-bold text-xl text-primary-foreground animate-glow-pulse"
          style={{ background: "var(--gradient-accent)" }}
        >
          Start Now
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
