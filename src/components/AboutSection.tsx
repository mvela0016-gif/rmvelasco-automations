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
        className="neu-flat rounded-2xl p-8 space-y-5 text-muted-foreground font-body font-light leading-relaxed"
      >
        <p>
          I've worked in customer service for almost 7 years, providing chat, email, and phone support while helping customers resolve issues and navigate products and services. This experience helped me develop strong communication, problem-solving, and technical troubleshooting skills. providing chat, email, and phone support while helping customers resolve issues and navigate products and services. This experience helped me develop strong communication, problem-solving, and technical troubleshooting skills.
        </p>
        <p>
          I am now transitioning into a Technical Virtual Assistant and Automation Specialist. I build automation workflows using tools like Zapier, Make.com, and GoHighLevel to help businesses streamline processes, connect apps, and reduce repetitive tasks. I can also build funnels, landing pages, lead capture systems, appointment scheduling, reminder emails, pipelines/opportunities, and multi-step automations.
        </p>
        <p>
          In addition to automation, I handle general virtual assistant tasks such as data entry, Google Docs and Sheets management, calendar scheduling, online research, and basic design work using Canva. I'm very tech-savvy and a fast learner In addition to automation, I handle general virtual assistant tasks such as data entry, Google Docs and Sheets management, calendar scheduling, online research, and basic design work using Canva. I'm very tech-savvy and a fast learner with over 15 years of experience working with computers. I enjoy finding ways to improve workflows and make processes more efficient. working with computers. I enjoy finding ways to improve workflows and make processes more efficient.
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
          <span key={skill} className="px-4 py-2 text-xs font-body font-medium rounded-xl neu-flat-sm text-secondary-foreground">
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
