import { Search, Lightbulb, Code, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    label: "Discover",
    description: "Understand your vision",
    details:
      "We start by diving deep into your business goals, challenges, and opportunities. Understanding your unique needs is the foundation of building the right solution.",
  },
  {
    icon: Lightbulb,
    label: "Plan",
    description: "Strategy & architecture",
    details:
      "Next, we design the technical architecture and strategy. This includes selecting the right technologies, mapping workflows, and creating a clear roadmap for execution.",
  },
  {
    icon: Code,
    label: "Build",
    description: "Develop & integrate",
    details:
      "Our development team brings the plan to life. We build, test, and iterate rapidly — keeping you in the loop with regular updates and demos throughout the process.",
  },
  {
    icon: Rocket,
    label: "Launch",
    description: "Deploy & go live",
    details:
      "Once everything is tested and approved, we deploy your system to production. We handle the technical heavy lifting so you can focus on your launch strategy.",
  },
  {
    icon: BarChart,
    label: "Scale",
    description: "Optimize & grow",
    details:
      "After launch, we monitor performance, gather insights, and continuously optimize. As your business grows, your systems scale seamlessly with it.",
  },
];

const DetailedProcessSection = () => {
  return (
    <section id="process" className="py-20 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From idea to scale in 5 streamlined steps.
          </p>
        </div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden lg:flex items-center justify-between max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <step.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-1">{step.label}</h3>
                <p className="text-sm text-muted-foreground text-center max-w-[120px]">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 mx-4"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Flow */}
        <div className="lg:hidden space-y-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <step.icon className="text-primary" size={24} />
                </div>
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-bold mb-1">{step.label}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="text-primary" size={20} />
                </div>
                <h4 className="font-bold text-lg">{step.label}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedProcessSection;
