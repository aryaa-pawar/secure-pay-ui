import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import CountUpNumber from "./CountUpNumber";
import { Shield, Users, Star } from "lucide-react";

import axisBankLogo from "@/assets/partner1/axis_bank-removebg-preview.png";
import finoLogo from "@/assets/partner1/fino-removebg-preview.png";
import hdfcLogo from "@/assets/partner1/hdfc-removebg-preview.png";
import idfcLogo from "@/assets/partner1/IDFC-FIRST-Bank-Logo__1_-removebg-preview.png";
import indianBankLogo from "@/assets/partner1/indianbank-removebg-preview.png";
import yesBankLogo from "@/assets/partner1/yesbank-removebg-preview.png";

const stats = [
  { icon: Users, label: "Active Merchants", value: 2500, suffix: "+" },
  { icon: Shield, label: "Transactions", value: 1200, suffix: " Cr+" },
  { icon: Star, label: "App Rating", value: 4.7, suffix: "" },
];

const logos = [
  { src: axisBankLogo, alt: "Axis Bank" },
  { src: finoLogo, alt: "Fino Payments Bank" },
  { src: hdfcLogo, alt: "HDFC Bank" },
  { src: idfcLogo, alt: "IDFC First Bank" },
  { src: indianBankLogo, alt: "Indian Bank" },
  { src: yesBankLogo, alt: "Yes Bank" },
];

const LogoStrip = () => (
  <div className="logo-scroll-wrapper">
    <div className="logo-track">
      {[...logos, ...logos].map((logo, index) => (
        <img
          key={`${logo.alt}-${index}`}
          src={logo.src}
          alt={logo.alt}
          className="logo-item"
        />
      ))}
    </div>
  </div>
);

const TrustSection = () => (
  <section className="relative py-32 px-6 overflow-hidden">
    <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
    <div className="max-w-6xl mx-auto relative z-10">
      {/* Auto-scrolling bank logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-20"
      >
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
            Powered by Trusted Technology Partners
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_40px_120px_rgba(15,23,42,0.18)]">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          <div className="logo-scroll-mask">
            <LogoStrip />
          </div>
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold font-display text-center mb-16"
      >
        Trusted by <span className="glow-text">Thousands</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <GlassCard key={stat.label} delay={i * 0.15} className="text-center py-10">
            <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
            <div className="text-4xl md:text-5xl font-bold font-display glow-text mb-2">
              <CountUpNumber end={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-muted-foreground text-lg">{stat.label}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
