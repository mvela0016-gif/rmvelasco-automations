import { motion } from "framer-motion";
import { Waypoints, Cpu, Target, Send, Share2, MessageCircle } from "lucide-react";

const services = [
  {
    title: "Workflow Automation",
    description: "Streamline repetitive tasks and connect your apps seamlessly.",
    icon: Waypoints,
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-orange-500/20",
    tags: ["Zapier", "Make.com", "n8n"],
  },
  {
    title: "AI Integration",
    description: "Leverage AI for intelligent responses and content generation.",
    icon: Cpu,
    iconBg: "bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-orange-500/20",
    tags: ["Google Gemini AI", "OpenAI", "Claude"],
  },
  {
    title: "CRM & Sales Automation",
    description: "Automate lead nurturing, follow-ups, and pipeline management.",
    icon: Target,
    iconBg: "bg-gradient-to-br from-stone-600 to-stone-800 text-white shadow-stone-500/20",
    tags: ["GoHighLevel", "SMS API", "Voice API"],
  },
  {
    title: "Email & SMS Marketing",
    description: "Automated sequences that convert inbound leads into lifetime customers.",
    icon: Send,
    iconBg: "bg-gradient-to-br from-yellow-500 to-amber-600 text-white shadow-amber-500/20",
    tags: ["Gmail", "Email Automation", "SMS"],
  },
  {
    title: "Social Media Automation",
    description: "Schedule, post, intelligently route and track content across platforms.",
    icon: Share2,
    iconBg: "bg-gradient-to-br from-red-400 to-orange-500 text-white shadow-red-500/20",
    tags: ["Facebook API", "Slack", "Google Sheets"],
  },
  {
    title: "Intelligent AI Chatbots",
    description: "Launch conversational agents directly on your GoHighLevel website. Fully configured with custom knowledge bases, FAQs, and fine-tuned brand voice.",
    icon: MessageCircle,
    iconBg: "bg-gradient-to-br from-yellow-500 to-amber-600 text-white shadow-amber-500/20",
    tags: ["Chatbots", "AI", "Customer Support"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="capabilities">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Core Capabilities
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Comprehensive automation engineering designed to remove operational bottlenecks and scale your business securely.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl flex flex-col h-full border border-border/60 hover:shadow-lg transition-all duration-300"
            >
              {/* Vibrant Gradient Icon Block */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${service.iconBg}`}>
                <service.icon size={26} strokeWidth={2} />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-xl font-display font-bold text-foreground mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
