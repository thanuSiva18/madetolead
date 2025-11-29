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
    <section className="py-20 lg:py-32 bg-card/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From idea to scale in 5 streamlined steps.
          </p>
        </div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden lg:grid grid-cols-5 gap-6 relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -z-10 transform -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <div key={index} className="group relative pt-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-card border-2 border-primary z-10 group-hover:scale-125 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-primary/50 animate-pulse"></div>
              </div>

              <div className="bg-card border border-white/5 p-6 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center group-hover:-translate-y-2">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-card border border-white/5 p-6 rounded-2xl flex items-center gap-6 shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="text-primary" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{step.label}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
