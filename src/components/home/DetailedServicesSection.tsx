import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Bot,
  Code,
  BarChart3,
  Palette,
  ArrowRight,
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
            Built to Scale. <span className="text-gradient">Fueled by AI.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive solutions for modern businesses that want to grow fast
            and scale smart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            We build tailored systems for unique business needs. Let's discuss your
            project.
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
