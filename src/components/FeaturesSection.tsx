import { motion } from "framer-motion";
import { Headphones, BarChart3, Zap, Shield, TrendingUp } from "lucide-react";
import GlassCard from "./GlassCard";

const features = [
  { icon: Headphones, title: "24×7 Support", desc: "Round-the-clock assistance whenever you need it" },
  { icon: BarChart3, title: "Actionable Insights", desc: "Real-time analytics to drive smarter decisions" },
  { icon: Zap, title: "Fast Onboarding", desc: "Go live in minutes, not days" },
  { icon: Shield, title: "Enterprise Reliability", desc: "99.99% uptime with bank-grade security" },
  { icon: TrendingUp, title: "Measurable Results", desc: "Track every metric that matters to your business" },
];

const FeaturesSection = () => (
  <section className="relative py-32 px-6 overflow-hidden">
    <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold font-display text-center mb-16"
      >
        Built for <span className="glow-text">scale</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <GlassCard key={f.title} delay={i * 0.1}>
            <f.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
