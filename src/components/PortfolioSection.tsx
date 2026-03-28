import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import zapierDemo1 from "@/assets/zapier-demo-1.png";
import fbLeadWorkflow from "@/assets/fb-lead-capture-workflow.png";
import kajabiAutomation from "@/assets/kajabi-course-automation.png";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: "Zapier" | "Make" | "GoHighLevel";
  image: string;
  problem?: string;
  impact?: string;
  opportunity?: string;
  steps?: string[];
}

const portfolioItems: PortfolioItem[] = [
{
  id: "z1",
  title: "Zapier Demo — SaaS Startup",
  description: "Problem:\nWhen a user cancels their subscription, the team doesn't consistently ask why. Sometimes support emails them, sometimes they forget. Feedback lives in random inboxes.\n\nImpact:\nThe company loses valuable insights about churn. The product team guesses why users leave instead of using real data.\n\nAutomation Opportunity:\nTrigger an automatic cancellation survey, log responses in a central database, and alert the team when high-value customers are at risk of churning.\n\nTools Used: Stripe, Gmail, Airtable, ChatGPT, and Slack",
  category: "Zapier",
  image: zapierDemo1,
  steps: [
  "Stripe detects a subscription cancellation event",
  "Zapier triggers and sends a feedback survey via Gmail",
  "ChatGPT analyzes the response and categorizes the reason",
  "Response is logged in Airtable with customer details",
  "If the customer was high-value, a Slack alert notifies the retention team"]
},
{
  id: "z2",
  title: "Zapier Demo — Real Estate Team FB Ads Lead Capture",
  description: "Problem:\nLeads come from Facebook ads, property portals, and the website. An assistant manually downloads lead details and uploads them into the CRM, then messages agents in a group chat.\n\nImpact:\nLeads sometimes sit for hours before anyone calls. Agents complain about getting incomplete info, and potential buyers go with faster competitors.\n\nAutomation Opportunity:\nCapture leads from all sources into one place, assign them to agents automatically, and notify the right person instantly.\n\nTools Used: Facebook Lead Ads (for Business), HubSpot, Google Sheets, and Slack",
  category: "Zapier",
  image: fbLeadWorkflow,
  problem: "Leads come from Facebook ads, property portals, and the website. An assistant manually downloads lead details and uploads them into the CRM, then messages agents in a group chat.",
  impact: "Leads sometimes sit for hours before anyone calls. Agents complain about getting incomplete info, and potential buyers go with faster competitors.",
  opportunity: "Capture leads from all sources into one place, assign them to agents automatically, and notify the right person instantly.",
  steps: [
  "It triggers when a new lead from Facebook",
  "It creates a contact in HubSpot",
  "It saves the lead info in Google Sheets",
  "It notifies our team via Slack"]
},
{
  id: "z2b",
  title: "Zapier Demo — Kajabi Course Purchase Automation",
  description: "Problem:\nWhen someone buys a course, the creator manually sends a welcome email, adds the student to a community, gives access to course materials, and logs the sale in a spreadsheet.\n\nImpact:\nStudents sometimes wait hours (or days) to get access, which creates a bad first impression and refund requests. Sales tracking is often outdated.\n\nAutomation Opportunity:\nInstantly deliver course access, send onboarding emails, and update a sales tracker as soon as a payment is completed.\n\nTools Used: Kajabi, Gmail, Circle, and Google Sheets the student to a community, gives access to course materials, and logs the sale in a spreadsheet.\n\nImpact:\nStudents sometimes wait hours (or days) to get access, which creates a bad first impression and refund requests. Sales tracking is often outdated.\n\nAutomation Opportunity:\nInstantly deliver course access, send onboarding emails, and update a sales tracker as soon as a payment is completed.\n\nTools Used: Kajabi, Gmail, Circle, and Google Sheets",
  category: "Zapier",
  image: kajabiAutomation,
  steps: [
  "Triggers when a new course purchase is made in Kajabi",
  "Sends a confirmation email with onboarding information",
  "Automatically grants access to the purchased course",
  "Adds the new user to the Circle community",
  "Logs the sale in Google Sheets for tracking and reporting"]
},
{
  id: "z4",
  title: "Zapier Demo — Support Ticket WISMO",
  description: "Problem: Customer support constantly answers \"Where is my order?\" emails. The support rep manually checks Shopify, copies tracking info, and replies one by one.\n\nTools Used: Zendesk, ChatGPT, Shopify, Path Conditions (Zapier), and Slack\n\nImpact:\nSupport inbox gets flooded, response times are slow, and staff spend hours daily answering the same question instead of handling real issues.\n\nAutomation Opportunity:\nAutomatically send shipping and delivery updates to customers and create instant self-serve tracking replies when order-related emails come in.",
  category: "Zapier",
  image: "/lovable-uploads/e44aaf25-25d7-432a-8ec7-859c7bb5cae2.png",
  problem: "Customer support constantly answers \"Where is my order?\" emails. The support rep manually checks Shopify, copies tracking info, and replies one by one.",
  impact: "Support inbox gets flooded, response times are slow, and staff spend hours daily answering the same question instead of handling real issues.",
  opportunity: "Automatically send shipping and delivery updates to customers and create instant self-serve tracking replies when order-related emails come in.",
  steps: [
  "Triggers when a new support ticket is received in Zendesk",
  "ChatGPT analyzes the message and classifies the ticket (general inquiry, order tracking, refund request, etc.)",
  "If the ticket is classified as an order tracking request, it continues through the WISMO workflow",
  "ChatGPT extracts the order number from the message. If no order number is found, the ticket is tagged as \"Order Number Not Found\"",
  "Shopify searches for the order using the extracted number",
  "The workflow routes the ticket based on the order status (processing, shipped, delivered, etc.) and sends the appropriate response"]
},
{
  id: "z5",
  title: "Zapier Demo — Autofill Certificate, Sends Certificate.",
  description: "Problem:\nParticipants complete a Google Form after finishing a training program to request their certificate. An admin manually formats the submission date, records the information in a tracking spreadsheet, generates a certificate from a template, and sends it to the participant for signature. The admin also has to check later if the document has been signed and update the spreadsheet accordingly. If someone forgets to sign, the admin must manually send reminders and notify the team.\n\nImpact:\nThis process requires constant manual monitoring. Admins must repeatedly check document statuses, update records, and send follow-ups. As the number of participants grows, tracking who has signed and who hasn't becomes messy and time-consuming, increasing the risk of missed follow-ups and delayed certificate issuance.\n\nAutomation Opportunity:\nAutomate the entire certificate workflow: capture the Google Form submission, format the date, log the information in a Google Sheets tracker, generate the certificate using a Google Docs template, and send it through DocuSign for signature. After a 24-hour delay, automatically check the document status. If the certificate is completed, update the participant's record in the spreadsheet. If it's still pending, send a reminder email to the participant and notify the team via Slack.\n\nTools Used:  Google Forms, Google Sheets, Google Docs, Google Drive, DocuSign, Gmail, Slack",
  category: "Zapier",
  image: "/lovable-uploads/04937593-dcb7-4c5f-94be-4b2ac72312b0.png",
  problem: "Participants complete a Google Form after finishing a training program to request their certificate. An admin manually formats the submission date, records the information in a tracking spreadsheet, generates a certificate from a template, and sends it to the participant for signature.",
  impact: "This process requires constant manual monitoring. Admins must repeatedly check document statuses, update records, and send follow-ups. As the number of participants grows, tracking becomes messy and time-consuming.",
  opportunity: "Automate the entire certificate workflow: capture the Google Form submission, format the date, log the information in a Google Sheets tracker, generate the certificate using a Google Docs template, and send it through DocuSign for signature.",
  steps: [
  "Triggers when a user submits a certificate request form",
  "Captures the user's name, email, and completion details",
  "Automatically fills the certificate template",
  "Generates a personalized certificate PDF",
  "Sends the completed certificate to the user via email",
  "Logs the certificate issuance in Google Sheets for records"]
},
{
  id: "m1",
  title: "Make Demo - Digital Agency Managing Multiple Clients",
  description: "Problem:\nThe agency receives new project briefs from clients through a Google Form. Depending on the service type selected — SEO, Paid Ads, or Web Design — the brief must be routed to a different team, logged in a different tab in Google Sheets, and trigger a different onboarding email. Currently, someone manually reviews each submission and routes it to the correct team. With three team leads, a shared inbox, and no clear handoff process, briefs are often sent to the wrong person or remain unassigned for several hours.\n\nImpact:\nLast month, a Web Design brief stayed in the SEO lead's inbox for two days because they assumed someone else had handled it. The client later followed up asking if the submission had been received. This mistake delayed the project kickoff by nearly a week and required the agency to offer a discount.\n\nAutomation Opportunity:\nA multi-step Make.com scenario receives the Google Form submission, reads the service type, and uses a Router to split the workflow into three paths. It sends a Slack notification to the correct team lead, logs the brief in the correct Google Sheets tab, and sends a confirmation email to the client. At the end, a Text Aggregator compiles the actions taken and sends a summary Slack message to the agency owner confirming the routing is complete.\n\nNote about the JSON module:\nI initially planned to use a Slack webhook but decided not to because it was unnecessary for this scenario.\n\nModules Used:\nGoogle Forms → Router (3 paths) → Create JSON → Slack Message → Google Sheets → Gmail → Text Aggregator → Slack Message",
  category: "Make",
  image: "/lovable-uploads/828914b3-ef07-441e-8fc3-7e1c70967fea.png",
  steps: [
  "Google Forms triggers the scenario when a client submits a project brief.",
  "Router checks the service type and splits the workflow into SEO, Paid Ads, or Web Design paths.",
  "Create JSON organizes the brief data into a structured format.",
  "Slack Message sends the brief details to the correct team lead's channel.",
  "Google Sheets logs the brief in the correct tab.",
  "Gmail sends a confirmation email to the client.",
  "Text Aggregator compiles a short summary of the completed actions.",
  "Slack Message sends the summary to the agency owner confirming the routing is complete."],
},
{
  id: "m2",
  title: "Make Demo - Online Workshop Organizer",
  description: "Problem:\nPeople register for workshops using a Google Form. Some workshops have limited seats, but the organizer currently checks registrations manually and updates a spreadsheet to track whether the event is already full.\n\nImpact:\nSometimes too many people register before the organizer notices. This creates confusion and requires additional emails to inform participants that they have been moved to the waitlist.\n\nAutomation Opportunity:\nAutomatically check the number of registered participants after each submission. If the workshop is full, send a waitlist email. If seats are still available, confirm the registration and update the attendee list.\n\nModules Used: \nGoogle Forms, Google Sheets (search and add row), Set Variable (Make), and Email",
  category: "Make",
  image: "/lovable-uploads/d327cc24-1656-4da1-8273-b1094fa8e535.png",
  steps: [
  "Google Forms – The workflow starts when someone submits the workshop registration form.",
  "Google Sheets – The automation checks the spreadsheet to count the number of confirmed participants.",
  "Condition Check – The system compares the number of registrations with the workshop seat limit.",
  "Path 1: Seats Available – If seats are still available, the automation adds the participant to the attendee list in Google Sheets and sends a confirmation email through Gmail.",
  "Path 2: Workshop Full – If the workshop is already full, the automation sends a waitlist email to the participant."],
},
{
  id: "m3",
  title: "Make Demo — Freelance Graphic Designer",
  description: "Problem:\nClients submit design requests through email. The designer manually copies each request into a spreadsheet to track deadlines and progress.\n\nImpact:\nSome requests get missed, deadlines slip, and the designer spends time managing the tracker instead of focusing on design work.\n\nAutomation Opportunity:\nAutomatically collect client requests into a Google Sheet, tag them by priority, and send a Slack notification when a new request arrives.\n\nModules Used:\nGmail → ChatGPT → Router + Filter → Google Sheets (Add Row) → Slack Message",
  category: "Make",
  image: "/lovable-uploads/484445d8-f8e9-4de0-a08a-a746273ba3ad.png",
  steps: [
  "Gmail – The workflow starts when a new client email containing a design request is received.",
  "ChatGPT – The email content is analyzed to extract key details such as the client name, request description, and deadline. The request is then tagged based on the due date using three priority levels: Low Priority, Medium Priority, and High Priority.",
  "Router + Filter – The Router and filters sort the request based on the assigned priority.",
  "Google Sheets – The automation logs the request in a Google Sheet to track tasks, deadlines, and progress.",
  "Slack Message – A Slack message is sent to notify the designer that a new request has been received and logged."],
},
{
  id: "m4",
  title: "Make Demo — Real Estate Agent or Property Management Team",
  description: "Problem:\nThe team lists rental properties and collects viewing requests through a Google Form. Each request includes the applicant's name, email, preferred viewing date, property interest, and monthly income. The property manager manually checks each submission, verifies if the requested date is available in a master Google Sheets calendar, confirms or suggests a new date, and sends a reply email. They manage eight active properties and receive 25–35 viewing requests per week.\n\nImpact:\nConfirming viewing dates takes nearly two hours per day. On weekends, requests pile up and applicants may assume the property is no longer available. Some move on to competing listings. The master sheet also becomes out of sync when confirmed appointments are not updated immediately.\n\nAutomation Opportunity:\nA Make.com scenario triggers when a Google Form is submitted and checks the master Google Sheet to see if the requested date is available. If the slot is available, the system confirms the appointment and updates the sheet. If the slot is taken, it sends the applicant a list of alternative dates.\n\nModules Used:\nGoogle Forms → Google Sheets (Search Row) → Router (2 paths) → (Slot Available) Google Sheets (Update Row) → Gmail → Slack | (Slot Taken) Google Sheets (Search Rows) → Text Aggregator → Gmail",
  category: "Make",
  image: "/lovable-uploads/fdf8bebe-f4a3-4751-aea8-d63d3241c631.png",
},
{
  id: "m5",
  title: "Make Demo — Small Business Owner / Service Provider",
  description: "Problem:\nA local home cleaning business collects customer feedback through a Google Form after each job. The owner rarely reviews responses, leaving unhappy customers without follow-up and five-star customers without encouragement to refer friends.\n\nImpact:\nThe owner has no clear view of service quality. Repeated complaints go unaddressed, and opportunities for word-of-mouth referrals — the business's main growth channel — are missed.\n\nAutomation Opportunity:\nA Make.com scenario monitors new Google Form responses. Low ratings trigger an automatic apology and follow-up email, while high ratings trigger a thank-you email asking for a Google Review.\n\nModules Used:\nGoogle Forms → Router + Filter → Gmail → Slack",
  category: "Make",
  image: "/lovable-uploads/20e01f2a-4dfa-4bc6-a658-461604fc1e35.png",
},
{
  id: "g1",
  title: "GoHighLevel Demo — Missed Call Text-Back System",
  description: "Problem:\nLocal businesses lose potential customers when calls go unanswered, often leading prospects to contact competitors instead.\n\nImpact:\nThis results in missed revenue opportunities and lost leads that could have been captured with a timely response.\n\nAutomation Opportunity:\nAutomatically respond to missed calls with an immediate text message and notify the business owner to ensure quick follow-up.\n\nTools Used:\nGoHighLevel",
  category: "GoHighLevel",
  image: "/lovable-uploads/b776f9ed-beef-4017-8b78-6abde9f125dc.png",
  problem: "Local businesses lose potential customers when calls go unanswered, often leading prospects to contact competitors instead.",
  impact: "This results in missed revenue opportunities and lost leads that could have been captured with a timely response.",
  opportunity: "Automatically respond to missed calls with an immediate text message and notify the business owner to ensure quick follow-up.",
  steps: [
    "A call is marked as \"Missed,\" \"Busy,\" or \"Voicemail,\" triggering the automation.",
    "The system waits for 1 minute to create a more natural, human-like response.",
    "An SMS is sent: \"Hey! This is [Business Name]. Sorry we missed your call. How can we help you today?\"",
    "An internal notification is sent to the business owner: \"You missed a call from [Phone Number]. An automated text was sent.\"",
    "If the customer replies, they are tagged as \"Engaged Lead\" and the conversation is assigned to a specific staff member."
  ]
},
{
  id: "g2",
  title: "GoHighLevel Demo — Post-Service Review Generator",
  description: "Problem:\nLocal businesses rely on positive Google reviews but often forget to consistently ask customers for feedback after a service is completed.\n\nImpact:\nThis results in fewer 5-star reviews, weaker online reputation, and lost opportunities to attract new customers.\n\nAutomation Opportunity:\nAutomate review requests and route feedback based on customer satisfaction to increase positive reviews and quickly address negative experiences.\n\nTools Used:\nGoHighLevel, Google (Google Review link)",
  category: "GoHighLevel",
  image: "/lovable-uploads/52d01496-5a2b-468e-9a85-ba543d7ba2e3.png",
  problem: "Local businesses rely on positive Google reviews but often forget to consistently ask customers for feedback after a service is completed.",
  impact: "This results in fewer 5-star reviews, weaker online reputation, and lost opportunities to attract new customers.",
  opportunity: "Automate review requests and route feedback based on customer satisfaction to increase positive reviews and quickly address negative experiences.",
  steps: [
    "The automation is triggered when a deal moves to \"Service Completed\" or \"Closed Won\" in the pipeline.",
    "The system waits for 2 hours before sending the request.",
    "An SMS or email is sent asking the customer to rate their experience from 1–5.",
    "If the customer replies with a 4 or 5, they receive a follow-up message with a Google review link.",
    "If the customer replies with a 1, 2, or 3, an internal alert is sent to the manager, and the customer is informed that a manager will reach out shortly."
  ]
},
{
  id: "g3",
  title: "GoHighLevel Demo — Local Real Estate Team",
  description: "Problem:\nReal estate teams receive a high volume of inquiries from potential buyers but rely on manual follow-ups through calls, texts, and emails. This makes it difficult to track conversations and consistently move leads toward booking a showing. Missed appointments often result in lost opportunities.\n\nImpact:\nThis manual and disorganized process leads to missed appointments, lost leads, wasted agent time, and lower conversion rates. Prospects may also feel neglected due to inconsistent communication, resulting in a poor overall experience.\n\nAutomation Opportunity:\nImplement an automated lead nurturing and appointment management system that engages new inquiries, enables self-booking, sends reminders, and re-engages no-shows to improve conversions and reduce manual workload.\n\nTools Used:\nGoHighLevel (Forms, CRM, Workflows, Email, SMS, Calendar, Opportunities Pipeline)\n\nThis automation is structured across 3 separate workflows:",
  category: "GoHighLevel",
  image: "/lovable-uploads/1cb6c3e2-28bb-4d7f-b86f-34d399e129c7.png",
  problem: "Real estate teams receive a high volume of inquiries from potential buyers but rely on manual follow-ups through calls, texts, and emails. This makes it difficult to track conversations and consistently move leads toward booking a showing. Missed appointments often result in lost opportunities.",
  impact: "This manual and disorganized process leads to missed appointments, lost leads, wasted agent time, and lower conversion rates. Prospects may also feel neglected due to inconsistent communication, resulting in a poor overall experience.",
  opportunity: "Implement an automated lead nurturing and appointment management system that engages new inquiries, enables self-booking, sends reminders, and re-engages no-shows to improve conversions and reduce manual workload.",
  steps: [
    "Workflow 1: Lead Capture & Initial Engagement — A potential buyer submits an inquiry form on the GoHighLevel website or landing page and is automatically added to the CRM.",
    "An automated workflow is triggered, sending SMS and email sequences that introduce the team and include a link to the GoHighLevel calendar for self-booking a property showing.",
    "Workflow 2: Appointment Confirmation & Reminders — Once an appointment is booked through the calendar, automated SMS and email reminders are scheduled to be sent 24 hours and 1 hour before the showing.",
    "The lead's status in the Opportunities Pipeline is automatically updated (e.g., \"Showing Booked\").",
    "Workflow 3: Post-Appointment Follow-Up & Re-Engagement — If the prospect attends the appointment, a follow-up workflow is triggered. If marked as a \"No Show,\" a re-engagement workflow is initiated, sending SMS and email follow-ups over the next few days to encourage rescheduling and keep the lead active."
  ]
},
{
  id: "g4",
  title: "GHL Demo — Email & SMS Campaign",
  description: "Multi-channel drip campaign with segmentation and performance tracking.",
  category: "GoHighLevel",
  image: "/placeholder.svg"
},
{
  id: "g5",
  title: "GHL Demo — Workflow Automation",
  description: "Complex workflow with triggers, conditions, and multi-step actions across the platform.",
  category: "GoHighLevel",
  image: "/placeholder.svg"
}];

const categories = ["All", "Zapier", "Make", "GoHighLevel"] as const;

const PortfolioSection = () => {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const [filter, setFilter] = useState<"All" | "Zapier" | "Make" | "GoHighLevel">("All");

  const filtered = filter === "All" ? portfolioItems : portfolioItems.filter((i) => i.category === filter);

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
        >
          My Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground font-body font-light mb-8"
        >
          Click any project to view and learn more about the workflow.
        </motion.p>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-2xl text-sm font-body font-medium transition-all duration-200 ${
                filter === cat
                  ? "neu-pressed text-accent"
                  : "neu-flat-sm text-secondary-foreground hover:translate-y-0.5 hover:shadow-none"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelected(item)}
              className="group text-left rounded-2xl overflow-hidden neu-flat hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
              <div className="aspect-video bg-muted overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <span className="text-xs uppercase tracking-wider text-accent font-body font-medium">{item.category}</span>
                <h3 className="font-display font-medium text-foreground mt-1 text-base">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body font-light mt-1 line-clamp-2">{item.description}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full bg-background rounded-3xl max-h-[90vh] neu-flat grid grid-cols-1 md:grid-cols-2 overflow-y-auto md:overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full neu-flat-sm text-foreground hover:text-accent transition-colors"
              >
                <X size={20} />
              </button>
              <div className="bg-muted/50 flex items-center justify-center overflow-hidden rounded-tl-3xl rounded-bl-none md:rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="overflow-y-auto md:max-h-[90vh] p-6">
                <span className="text-xs uppercase tracking-wider text-accent font-body font-medium">{selected.category}</span>
                <h3 className="font-display font-bold text-foreground text-xl mt-1">{selected.title}</h3>
                {selected.problem ? (
                  <div className="mt-3 space-y-3 text-sm font-body">
                    <div className="neu-pressed rounded-xl p-3">
                      <span className="font-semibold text-foreground">Problem: </span>
                      <span className="text-muted-foreground font-light">{selected.problem}</span>
                    </div>
                    <div className="neu-pressed rounded-xl p-3">
                      <span className="font-semibold text-foreground">Impact: </span>
                      <span className="text-muted-foreground font-light">{selected.impact}</span>
                    </div>
                    <div className="neu-pressed rounded-xl p-3">
                      <span className="font-semibold text-foreground">Automation Opportunity: </span>
                      <span className="text-muted-foreground font-light">{selected.opportunity}</span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2 text-sm text-muted-foreground font-body font-light whitespace-pre-wrap">
                    {selected.description}
                  </div>
                )}

                {selected.steps && selected.steps.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-border">
                    <h4 className="font-display font-semibold text-foreground text-base mb-4">How It Works</h4>
                    <ol className="space-y-3">
                      {selected.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-body">
                          <span className="flex-shrink-0 w-7 h-7 rounded-xl neu-flat-sm flex items-center justify-center text-xs font-bold text-accent">
                            {idx + 1}
                          </span>
                          <span className="text-muted-foreground font-light pt-1">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
