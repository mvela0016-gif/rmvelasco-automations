import { motion } from "framer-motion";

const experiences = [
  {
    title: "Customer Service | Technical Support Representative",
    company: "Concentrix, HGS, and TTEC (Current)",
    period: "2018 - Present",
    description: "Provided chat, email, and phone support. Helped customers resolve issues and navigate products and services. Developed strong communication, problem-solving, and technical troubleshooting skills.",
  },
  {
    title: "Technical Virtual Assistant & Automation Specialist",
    company: "Freelance",
    period: "2026 - Present",
    description: "Building automation workflows using Zapier, Make.com, and GoHighLevel. Creating funnels, landing pages, lead capture systems, and multi-step automations for businesses.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24">
    <div className="max-w-3xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12"
      >
        Work Experience
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="neu-flat rounded-2xl p-6"
          >
            <p className="text-xs font-body text-muted-foreground mb-1">{exp.period}</p>
            <h3 className="text-lg font-display font-semibold text-foreground">{exp.title}</h3>
            <p className="text-sm font-body text-accent mb-2">{exp.company}</p>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
