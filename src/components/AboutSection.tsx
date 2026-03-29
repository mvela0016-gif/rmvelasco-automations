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
          I have a strong background in problem-solving and technical support, with experience handling chat, email, and phone-based systems. I now focus on building automation workflows using tools like Zapier, Make.com, and GoHighLevel to streamline processes, connect apps, and reduce repetitive tasks.
        </p>
        <p>
          I can create multi-step automations, lead capture systems, funnels, and landing pages, as well as set up calendars, appointment scheduling, pipelines, and automated email/SMS follow-ups. I also handle general virtual assistant tasks such as data entry, Google Docs and Sheets management, calendar scheduling, online research, and basic design work using Canva.
        </p>
        <p>
          I’m tech-savvy, a fast learner, and comfortable working with new tools to improve workflows and increase efficiency.
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
