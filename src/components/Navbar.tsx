import { motion } from "framer-motion";
import logo from "@/assets/securepay-logo.png";

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
  >
    <div className="max-w-6xl mx-auto glass-panel rounded-2xl px-6 py-3 flex items-center justify-between">
      <img src={logo} alt="SecurePay" className="h-8" />
      <div className="hidden md:flex items-center gap-8">
        {["Products", "Developers", "Pricing", "About"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
            {item}
          </a>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="px-5 py-2 rounded-xl text-sm font-display font-semibold text-primary-foreground"
        style={{ background: "var(--gradient-accent)" }}
      >
        Get Started
      </motion.button>
    </div>
  </motion.nav>
);

export default Navbar;
