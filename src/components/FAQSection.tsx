import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  {
    name: "Onboarding",
    faqs: [
      { q: "How do I get started with SecurePay?", a: "Sign up on our platform, complete KYC, and you'll be live within 24 hours." },
      { q: "What documents are required?", a: "PAN, Aadhaar, business registration, and bank account details." },
    ],
  },
  {
    name: "Pricing",
    faqs: [
      { q: "What are the transaction fees?", a: "We offer competitive rates starting at 0.5% per transaction with volume discounts." },
      { q: "Are there any hidden charges?", a: "No hidden charges. Transparent pricing with no setup or maintenance fees." },
    ],
  },
  {
    name: "Security",
    faqs: [
      { q: "Is SecurePay PCI DSS compliant?", a: "Yes, we maintain PCI DSS Level 1 certification — the highest security standard." },
      { q: "How is my data protected?", a: "End-to-end encryption, tokenization, and multi-layer fraud detection." },
    ],
  },
  {
    name: "APIs",
    faqs: [
      { q: "Do you provide sandbox testing?", a: "Yes, a full sandbox environment with test credentials for development." },
      { q: "What programming languages are supported?", a: "SDKs for Node.js, Python, PHP, Java, and REST APIs for everything else." },
    ],
  },
];

const FAQSection = () => {
  const [activeCat, setActiveCat] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold font-display text-center mb-12"
        >
          Frequently Asked <span className="glow-text">Questions</span>
        </motion.h2>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { setActiveCat(i); setOpenFaq(null); }}
              className={`px-5 py-2 rounded-full font-display text-sm font-medium transition-all ${
                activeCat === i
                  ? "text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
              style={activeCat === i ? { background: "var(--gradient-accent)" } : undefined}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-3">
          {categories[activeCat].faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-display font-medium">{faq.q}</span>
                <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <p className="px-5 pb-5 text-muted-foreground">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
