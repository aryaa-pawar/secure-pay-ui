import { motion } from "framer-motion";
import { CreditCard, Building2, Smartphone } from "lucide-react";
import GlassCard from "./GlassCard";

const clusters = [
  {
    icon: CreditCard,
    title: "Payments & Collections",
    items: ["Payment Gateway", "QR Code Payments", "POS Machine", "Auto Collect", "Payout System", "BBPS Platform"],
    color: "from-primary/20 to-electric-blue/10",
  },
  {
    icon: Building2,
    title: "Banking & Core Infra",
    items: ["UPI Switch", "Intelligent Routing", "Settlement Engine", "Risk Management"],
    color: "from-royal-purple/20 to-primary/10",
  },
  {
    icon: Smartphone,
    title: "Devices & Enablement",
    items: ["Soundbox", "QR Stand", "Payment App", "Merchant Dashboard"],
    color: "from-soft-blue/20 to-royal-purple/10",
  },
];

const EcosystemSection = () => (
  <section className="relative py-32 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
          One platform. <span className="glow-text">Every payment solution.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A complete ecosystem powering the future of digital payments
        </p>
      </motion.div>

      {/* Central orb */}
      <motion.div
        className="w-24 h-24 mx-auto mb-16 rounded-full flex items-center justify-center relative"
        animate={{ boxShadow: ["0 0 30px hsla(215,80%,60%,0.2)", "0 0 60px hsla(215,80%,60%,0.4)", "0 0 30px hsla(215,80%,60%,0.2)"] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ background: "var(--gradient-accent)" }}
      >
        <span className="text-primary-foreground font-display font-bold text-sm">CORE</span>
        <div className="absolute inset-0 rounded-full animate-spin-slow border border-primary/20" style={{ width: "160%", height: "160%", top: "-30%", left: "-30%" }} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {clusters.map((cluster, i) => (
          <GlassCard key={cluster.title} delay={i * 0.2} className="relative">
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cluster.color} opacity-50`} />
            <div className="relative z-10">
              <cluster.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-display font-semibold mb-4">{cluster.title}</h3>
              <ul className="space-y-2">
                {cluster.items.map((item) => (
                  <li key={item} className="text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default EcosystemSection;
