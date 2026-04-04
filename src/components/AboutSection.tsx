import { motion } from "framer-motion";

const skills = [
  "Zapier", "Make.com", "GoHighLevel", "Funnel Building", "Landing Pages",
  "Lead Capture", "Appointment Scheduling", "Pipeline Management",
  "Google Docs & Sheets", "Data Entry", "Canva", "Calendar Scheduling",
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="max-w-3xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass rounded-2xl p-8 space-y-5 text-muted-foreground font-body font-light leading-relaxed"
      >
        <p>
          My core mission is to help businesses regain control over their most valuable assets: time, resources, and money. I specialize in identifying operational bottlenecks and engineering robust automation systems that eliminate manual, repetitive work.
        </p>
        <p>
          Using advanced tools like Zapier, Make.com, and GoHighLevel, I architect seamless workflows that connect your favorite apps, nurture leads on autopilot, and streamline your entire pipeline from capture to conversion. Whether it's multi-step automations, highly-converting funnels, or intelligent appointment scheduling systems, I ensure your business runs smoothly behind the scenes.
        </p>
        <p>
          By removing human error and automating the mundane, I empower business owners to focus entirely on scaling, innovating, and driving consistent revenue growth. Let's transform your operations into a well-oiled, efficient machine.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 text-xs font-body font-medium rounded-xl glass-sm text-secondary-foreground">
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
