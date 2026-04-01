import { motion } from "framer-motion";
import Particles from "./Particles";
import logo from "@/assets/securepay-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background depth layers */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <Particles count={40} />

      {/* Floating QR Code */}
      <motion.div
        className="absolute right-[10%] top-[20%] w-32 h-32 opacity-20 hidden lg:block"
        animate={{ rotateY: 360, y: [0, -15, 0] }}
        transition={{ rotateY: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        style={{ perspective: 800 }}
      >
        <div className="w-full h-full rounded-xl border border-primary/30 grid grid-cols-5 grid-rows-5 gap-0.5 p-2">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className={`rounded-sm ${Math.random() > 0.4 ? 'bg-primary/40' : 'bg-transparent'}`} />
          ))}
        </div>
      </motion.div>

      {/* Floating phone */}
      <motion.div
        className="absolute left-[8%] bottom-[15%] hidden lg:block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
        transition={{ x: { delay: 1, duration: 1.2 }, opacity: { delay: 1, duration: 1 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 } }}
      >
        <div className="w-20 h-36 rounded-xl glass-panel border-primary/20 flex items-center justify-center">
          <div className="w-12 h-1 rounded bg-primary/40 absolute top-2" />
          <div className="w-8 h-8 rounded-lg bg-primary/20 animate-glow-pulse" />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="mb-8"
        >
          <img src={logo} alt="SecurePay" className="h-16 md:h-20 mx-auto drop-shadow-[0_0_30px_hsla(215,80%,60%,0.3)]" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
        >
          <span className="text-foreground">Payments Solution </span>
          <br />
          <span className="glow-text">For Everyone</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Scale faster. Safer. Smarter.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsla(215, 80%, 60%, 0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 rounded-2xl font-display font-semibold text-lg text-primary-foreground relative overflow-hidden"
            style={{ background: "var(--gradient-accent)" }}
          >
            <span className="relative z-10">Get Started</span>
            <motion.div
              className="absolute inset-0 opacity-0"
              whileHover={{ opacity: 1 }}
              style={{ background: "linear-gradient(135deg, hsla(215, 80%, 70%, 0.3), hsla(280, 60%, 60%, 0.3))" }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
