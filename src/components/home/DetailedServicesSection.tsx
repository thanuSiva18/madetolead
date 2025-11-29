import { Button } from "@/components/ui/button";
import {
  Bot,
  Code,
  BarChart3,
  ArrowRight,
  Globe,
  Megaphone,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "AI-Powered Websites & Funnels",
    description:
      "High-converting websites and funnels built to turn visitors into customers.",
    features: [
      "Marketing websites",
      "Landing pages",
      "Sales funnels",
      "E-commerce pages",
      "AI-optimized content",
    ],
    cta: "Build My Website",
  },
  {
    icon: Megaphone,
    title: "Growth Marketing (SEO + Meta Ads)",
    description:
      "SEO and Meta ads strategies to drive traffic and generate leads.",
    features: [
      "On-page & technical improvements",
      "Keyword strategy & Content plan",
      "Local SEO",
      "Campaign setup & optimization",
      "Lead-gen funnels & Retargeting",
    ],
    cta: "Run My Campaigns",
  },
  {
    icon: Bot,
    title: "Automation & CRM Systems",
    description:
      "Streamline your operations with AI chatbots and CRM automation.",
    features: [
      "AI chatbots (Web + WhatsApp)",
      "CRM setup (HubSpot, Zoho)",
      "Lead follow-up automation",
      "Appointment flows",
      "Integrations",
    ],
    cta: "Automate My Business",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Intelligence",
    description:
      "Visualize your data to make smarter business decisions.",
    features: [
      "Sales tracking",
      "Revenue dashboards",
      "Marketing performance",
      "KPI reporting",
    ],
    cta: "Build My Dashboard",
  },
  {
    icon: Wrench,
    title: "Lightweight Internal Tools",
    description:
      "Custom tools to manage your internal processes efficiently.",
    features: [
      "Client portals",
      "Inventory trackers",
      "Order management mini-systems",
      "Simple internal apps",
    ],
    cta: "Check My Use Case",
  },
];

const DetailedServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Custom Solutions for <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We don't just build websites. We build systems that generate leads, automate work, and scale revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-white/5 rounded-2xl p-10 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 border border-primary/10">
                  <service.icon className="text-primary" size={28} />
                </div>

                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground/80 mb-8 leading-relaxed text-lg">{service.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm text-muted-foreground/90"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-auto group-hover:text-primary-glow"
                >
                  {service.cta}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-card to-card/50 border border-white/5 rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="flex items-start gap-6">
              <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-primary/10 items-center justify-center flex-shrink-0 border border-primary/10">
                <Wrench className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  Need a custom solution?
                </h3>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Every business is unique. Let's build the right system for your specific goals and bottlenecks.
                </p>
              </div>
            </div>
            <Button variant="cta" size="xl" onClick={scrollToContact} className="shadow-glow hover:shadow-glow-hover whitespace-nowrap">
              Book a Free Growth Audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
