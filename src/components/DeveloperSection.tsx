import { motion } from "framer-motion";
import { Code2, Plug, BookOpen, Terminal } from "lucide-react";
import GlassCard from "./GlassCard";

const devTools = [
  { icon: Plug, title: "Integrations", desc: "Plug and play SDKs for web, mobile, and server" },
  { icon: BookOpen, title: "API Reference", desc: "Comprehensive REST & webhook documentation" },
  { icon: Terminal, title: "Dev Studio", desc: "Interactive sandbox for testing payments" },
];

const codeSnippet = `const payment = await securepay.create({
  amount: 49900,
  currency: "INR",
  method: "upi",
  callback: "https://your.app/confirm"
});`;

const DeveloperSection = () => (
  <section className="relative py-32 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <Code2 className="w-10 h-10 text-primary mx-auto mb-4" />
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
          For developers. <span className="glow-text">By developers.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Code block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-2xl p-6 font-mono text-sm overflow-hidden"
        >
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
          </div>
          <pre className="text-soft-blue/90 overflow-x-auto">
            <code>{codeSnippet}</code>
          </pre>
        </motion.div>

        {/* Tools */}
        <div className="space-y-4">
          {devTools.map((tool, i) => (
            <GlassCard key={tool.title} delay={i * 0.15} className="flex items-center gap-4 py-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--gradient-accent)" }}>
                <tool.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold">{tool.title}</h3>
                <p className="text-muted-foreground text-sm">{tool.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DeveloperSection;
