import { motion } from "framer-motion";

const experiences = [
  {
    title: "Customer Service | Technical Support Representative",
    company: "Concentrix, HGS, and TTEC (Current)",
    period: "2018 - Present",
    description: [
      "Provided chat and email support for shipping issues, damaged packages, and delivery delays",
      "Issued appropriate resolutions including replacements, credits, and refunds",
      "Assisted with basic troubleshooting, website navigation, and subscription inquiries",
      "Offered personalized product recommendations based on customer needs",
      "Assisted in training new hires and acted as a Support/SME for teammates",
      "Served as Point of Contact (POC) during leadership absences",
      "Maintained accurate records while delivering timely, empathetic support"
    ],
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
            className="glass rounded-2xl p-6"
          >
            <p className="text-xs font-body text-muted-foreground mb-1">{exp.period}</p>
            <h3 className="text-lg font-display font-semibold text-foreground">{exp.title}</h3>
            <p className="text-sm font-body text-accent mb-2">{exp.company}</p>
            {Array.isArray(exp.description) ? (
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm font-body text-muted-foreground leading-relaxed">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{exp.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
