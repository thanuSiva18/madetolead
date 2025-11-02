import { Brain, Database, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI-Powered Web & Brand Systems",
    description:
      "Websites, eCommerce, CRMs, chatbots, automation. Everything your brand needs to dominate online.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Database,
    title: "Custom ERP & SaaS Development",
    description:
      "Tailored business systems with analytics dashboards. Built for scale, designed for your workflow.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: TrendingUp,
    title: "AI + Data Solutions",
    description:
      "Forecasting, insights, and automation for smarter decisions. Turn data into competitive advantage.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Our Core <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-first systems built to scale your business from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-primary" size={28} />
                </div>

                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
