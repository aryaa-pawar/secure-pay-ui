import { motion } from "framer-motion";
import { Volume2, QrCode, Smartphone } from "lucide-react";
import GlassCard from "./GlassCard";

const devices = [
  {
    icon: Volume2,
    title: "Soundbox",
    desc: "Audio confirmation on every payment. Compact, reliable, always on.",
  },
  {
    icon: QrCode,
    title: "QR Stand",
    desc: "Premium QR display with illuminated scanning surface.",
  },
  {
    icon: Smartphone,
    title: "Payment App",
    desc: "Full-featured mobile app with live analytics and instant payouts.",
  },
];

const DevicesSection = () => (
  <section className="relative py-32 px-6 overflow-hidden">
    <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold font-display text-center mb-16"
      >
        Hardware that <span className="glow-text">just works</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {devices.map((device, i) => (
          <GlassCard key={device.title} delay={i * 0.2} className="text-center py-12">
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center relative"
              style={{ background: "var(--gradient-accent)" }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            >
              <device.icon className="w-10 h-10 text-primary-foreground" />
              {/* Sound waves for soundbox */}
              {i === 0 && (
                <>
                  {[1, 2, 3].map((n) => (
                    <motion.div
                      key={n}
                      className="absolute rounded-full border border-primary/20"
                      style={{ width: `${100 + n * 30}%`, height: `${100 + n * 30}%` }}
                      animate={{ opacity: [0.3, 0, 0.3], scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, delay: n * 0.3, repeat: Infinity }}
                    />
                  ))}
                </>
              )}
            </motion.div>
            <h3 className="text-xl font-display font-semibold mb-2">{device.title}</h3>
            <p className="text-muted-foreground">{device.desc}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default DevicesSection;
