import { motion } from "framer-motion";

const experiences = [
  {
    title: "Lead Associate | Customer Service",
    company: "TTEC Philippines",
    period: "",
    description: [
      "Managed escalations and complex cases, ensuring timely and effective resolution",
      "Supported agents with policy, process, product, and quality-related inquiries through Teams, Slack, Zoom, and other communication platforms",
      "Escalated food safety concerns and trending issues to clients for investigation and resolution",
      "Conducted detractor scrubbing to identify key drivers of customer dissatisfaction (DSAT) and recommend service improvements",
      "Provided agent feedback, process guidance, and recommendations to improve performance and address challenging situations",
      "Shared client updates and helped keep the team aligned with changing policies and procedures",
      "Assisted in training new hires and served as a Subject Matter Expert (SME) for teammates",
      "Delivered chat and email support for shipping issues, damaged packages, delivery delays, and account-related inquiries",
      "Processed refunds, replacements, and credits while maintaining accurate records and ensuring a positive customer experience",
      "Assisted customers with website navigation and subscription-related concerns",
    ],
  },
  {
    title: "Technical Virtual Assistant & Automation Specialist",
    company: "Freelance",
    period: "",
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
