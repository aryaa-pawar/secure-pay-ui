import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [focused, setFocused] = useState<string | null>(null);

  const fields = [
    { name: "name", label: "Name", type: "text" },
    { name: "state", label: "State", type: "text" },
    { name: "city", label: "City", type: "text" },
    { name: "services", label: "Services Interested In", type: "text" },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-2">
            Get in <span className="glow-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10">Let's build something amazing together</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {fields.map((f) => (
              <div key={f.name} className="relative">
                <label className="block text-sm text-muted-foreground mb-1.5 font-medium">{f.label}</label>
                <input
                  type={f.type}
                  onFocus={() => setFocused(f.name)}
                  onBlur={() => setFocused(null)}
                  className={`w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 text-foreground placeholder:text-muted-foreground/50 outline-none input-glow transition-all ${
                    focused === f.name ? "border-primary/50" : ""
                  }`}
                  placeholder={`Enter your ${f.label.toLowerCase()}`}
                />
              </div>
            ))}

            <div>
              <label className="block text-sm text-muted-foreground mb-1.5 font-medium">Message</label>
              <textarea
                rows={4}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 text-foreground placeholder:text-muted-foreground/50 outline-none input-glow resize-none transition-all ${
                  focused === "message" ? "border-primary/50" : ""
                }`}
                placeholder="Tell us about your needs"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsla(215, 80%, 60%, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl font-display font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-accent)" }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
