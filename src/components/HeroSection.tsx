import { motion } from "framer-motion";
import profilePicture from "@/assets/profile-picture.jpg";

const HeroSection = () => (
  <section className="min-h-[70vh] flex items-center justify-center pt-16">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <div className="w-28 h-28 rounded-full mx-auto neu-flat p-1.5">
          <img
            src={profilePicture}
            alt="Ray Velasco Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body"
      >
        ZAPIER | MAKE.COM | GOHIGHLEVEL SPECIALIST
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight mb-6"
      >
        Ray Velasco
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl md:text-2xl font-display font-medium text-muted-foreground mb-4"
      >
        Automate Your Business and Save Hours Every Week
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto font-body font-light leading-relaxed"
      >
        I build custom workflows using Zapier, Make.com, and GoHighLevel to eliminate repetitive tasks, streamline operations, and help you scale efficiently.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8"
      >
        <button
          onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-accent text-accent-foreground text-sm font-semibold neu-flat hover:translate-y-0.5 hover:shadow-none transition-all duration-200"
        >
          View My Work
        </button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
