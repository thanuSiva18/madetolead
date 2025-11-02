import { Search, Lightbulb, Code, Rocket, BarChart } from "lucide-react";

const steps = [
  { icon: Search, label: "Discover", description: "Understand your vision" },
  { icon: Lightbulb, label: "Plan", description: "Strategy & architecture" },
  { icon: Code, label: "Build", description: "Develop & integrate" },
  { icon: Rocket, label: "Launch", description: "Deploy & go live" },
  { icon: BarChart, label: "Scale", description: "Optimize & grow" },
];

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-card/50">
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
        <div className="hidden lg:flex items-center justify-between max-w-5xl mx-auto">
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
        <div className="lg:hidden space-y-8">
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
      </div>
    </section>
  );
};

export default ProcessSection;
