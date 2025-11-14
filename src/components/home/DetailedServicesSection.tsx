import { Button } from "@/components/ui/button";
import {
  Bot,
  Code,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation & Operations",
    description:
      "Automate workflows and scale operations without hiring. AI chatbots, CRM automation, integrations.",
    features: [
      "AI chatbots & voice assistants",
      "CRM & workflow automation",
      "Process integrations",
      "Intelligent scheduling",
    ],
  },
  {
    icon: Code,
    title: "AI Websites & Tech Systems",
    description:
      "Custom web platforms and SaaS built for growth. Funnels, e-commerce, ERPs, internal tools.",
    features: [
      "AI-powered websites",
      "E-commerce platforms",
      "Custom SaaS & ERPs",
      "Client portals & apps",
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Intelligence",
    description:
      "Transform data into competitive advantage. Analytics dashboards, insights, and predictive systems.",
    features: [
      "Custom analytics dashboards",
      "Business intelligence reports",
      "Predictive analytics",
      "Real-time monitoring",
    ],
  },
];

const DetailedServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Full-Stack AI <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Three core pillars to transform your business. From automation to intelligence, all AI-powered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-primary" size={32} />
              </div>

              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Get Started
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-primary/30 rounded-3xl p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Need a custom solution?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's build the right system for your goals.
          </p>
          <Button variant="cta" size="xl" onClick={scrollToContact}>
            Book a Free AI Audit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
