import { Button } from "@/components/ui/button";
import {
  Bot,
  Code,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Palette,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Meta Ads, Google Ads, Analytics. Data-driven campaigns that convert.",
    features: [
      "Paid social media advertising",
      "Google Ads & PPC campaigns",
      "Conversion tracking & analytics",
      "ROI optimization",
    ],
    cta: "Run My Campaigns",
  },
  {
    icon: Bot,
    title: "AI Automation & Workflows",
    description:
      "Chatbots, CRM, Integrations. Save hours with intelligent automation.",
    features: [
      "AI chatbots & voice assistants",
      "CRM automation",
      "Workflow integrations",
      "Process optimization",
    ],
    cta: "Automate My Business",
  },
  {
    icon: Code,
    title: "Web & Tech Development",
    description:
      "Websites, Funnels, SaaS, Apps. Custom built, perfectly tailored.",
    features: [
      "Custom web applications",
      "E-commerce platforms",
      "Landing pages & funnels",
      "Progressive web apps",
    ],
    cta: "Build My Website",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Dashboards, Reports, Insights. Make smarter decisions with data.",
    features: [
      "Custom analytics dashboards",
      "Business intelligence reports",
      "Predictive analytics",
      "Data visualization",
    ],
    cta: "Build My Dashboard",
  },
  {
    icon: Palette,
    title: "Creative & Branding",
    description:
      "Design, Strategy, Content. Stand out with memorable brand identity.",
    features: [
      "Brand identity & strategy",
      "UI/UX design",
      "Content creation",
      "Marketing collateral",
    ],
    cta: "Upgrade My Brand",
  },
  {
    icon: Settings,
    title: "Workflow Automation for Businesses",
    description:
      "Automate repetitive tasks and optimize daily operations with custom AI and no-code workflows.",
    features: [
      "Lead → CRM automations",
      "Notification & follow-up flows",
      "Google Sheets → WhatsApp/email automation",
      "Internal process automation",
      "Reporting & data sync",
      "Custom operational workflows",
    ],
    cta: "Automate My Workflow",
  },
];

const DetailedServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 lg:py-32 relative bg-background">
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

        <div className="mt-20 bg-card border border-white/5 rounded-2xl p-12 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="flex items-start gap-6">
              <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-primary/10 items-center justify-center flex-shrink-0 border border-primary/10">
                <Settings className="text-primary" size={32} />
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