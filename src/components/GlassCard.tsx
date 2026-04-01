import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const GlassCard = ({ children, className = "", delay = 0, hover = true }: GlassCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
    whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
    className={`glass-card rounded-2xl p-6 glow-border ${className}`}
  >
    {children}
  </motion.div>
);

export default GlassCard;
