import { motion } from "framer-motion";

const tools = [
  { name: "Google Workspace", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg" },
  { name: "Zapier", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zapier.svg" },
  { name: "Make.com", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/make.svg" },
  { name: "GoHighLevel" },
  { name: "Slack", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/slack.svg" },
  { name: "Airtable", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/airtable.svg" },
  { name: "Stripe", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg" },
  { name: "Canva", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/canva.svg" },
  { name: "HubSpot", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hubspot.svg" },
  { name: "ChatGPT", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" },
  { name: "Claude", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg" },
  { name: "DocuSign", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docusign.svg" },
  { name: "Kajabi" },
  { name: "Trello", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/trello.svg" },
  { name: "Google Antigravity", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg" },
];

const TechMarquee = () => {
  return (
    <section className="py-12 overflow-hidden border-b border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="relative flex overflow-x-hidden">
        {/* Left/Right Fade */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex whitespace-nowrap items-center w-max"
        >
          {/* We map the array twice to create a seamless infinite loop */}
          {[...tools, ...tools].map((tool, idx) => (
            <div
              key={`${tool.name}-${idx}`}
              className="flex items-center gap-2.5 px-6 py-2.5 mx-3 rounded-full glass-sm shadow-sm"
            >
              {tool.icon && (
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-4 h-4 opacity-70"
                  style={{ filter: "brightness(0) invert(1) opacity(0.7)" }}
                />
              )}
              <span className="text-sm font-semibold text-foreground/80 font-body tracking-wide">{tool.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechMarquee;
