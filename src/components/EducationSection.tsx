import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "ICCT Colleges",
    period: "",
    description: "Bachelor of Science in Information Technology\n\n",
  },
  {
    degree: "Certifications & Online Training",
    school: "Zapier University, Make Academy, and various online platforms such as Youtube and Udemy",
    period: "Ongoing",
    description: "Zapier, Make.com, GoHighLevel and continuous learning in automation and virtual assistance.",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24">
    <div className="max-w-3xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12"
      >
        Education
      </motion.h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <p className="text-xs font-body text-muted-foreground mb-1">{edu.period}</p>
            <h3 className="text-lg font-display font-semibold text-foreground">{edu.degree}</h3>
            <p className="text-sm font-body text-accent mb-2">{edu.school}</p>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
