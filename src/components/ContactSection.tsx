import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
      >
        Get in touch!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-muted-foreground font-body font-light mb-10"
      >
        Let's work together to streamline your business.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <a
          href="mailto:mvela0016@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-accent text-accent-foreground text-sm font-semibold hover:translate-y-0.5 hover:shadow-none transition-all duration-200"
        >
          <Mail size={16} />
          Email Me
        </a>
        <a
          href="https://upwork.com/freelancers/~01db9faa2529bbd15c"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-foreground text-sm font-medium glass hover:translate-y-0.5 hover:shadow-none transition-all duration-200"
        >
          <ExternalLink size={16} />
          Upwork Profile
        </a>
        <a
          href="https://www.onlinejobs.ph/jobseekers/info/4320189"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-foreground text-sm font-medium glass hover:translate-y-0.5 hover:shadow-none transition-all duration-200"
        >
          <ExternalLink size={16} />
          OLJ Profile
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
