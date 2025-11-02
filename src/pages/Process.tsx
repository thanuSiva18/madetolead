import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Search, Lightbulb, Code, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We dive deep into understanding your business, goals, challenges, and vision. This is where we ask the right questions to uncover opportunities for AI and automation.",
    details: [
      "Stakeholder interviews",
      "Business analysis",
      "Pain point identification",
      "Opportunity mapping",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Plan",
    description:
      "Strategic planning and technical architecture. We create a detailed roadmap with timelines, milestones, and clear deliverables so you know exactly what to expect.",
    details: [
      "Technical architecture design",
      "Project roadmap creation",
      "Resource allocation",
      "Timeline & milestones",
    ],
  },
  {
    number: "03",
    icon: Code,
    title: "Build",
    description:
      "Development and integration phase. Our team builds your custom solution using cutting-edge technologies, with regular updates and demos throughout the process.",
    details: [
      "Agile development sprints",
      "Regular progress updates",
      "Quality assurance testing",
      "Integration & deployment",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "Deployment and go-live. We ensure a smooth launch with comprehensive testing, training, and support. Your system goes live with confidence and zero downtime.",
    details: [
      "Pre-launch testing",
      "Team training sessions",
      "Smooth deployment",
      "Launch support",
    ],
  },
  {
    number: "05",
    icon: BarChart,
    title: "Scale",
    description:
      "Optimization and growth. We monitor performance, gather insights, and continuously improve your system to ensure it scales with your business needs.",
    details: [
      "Performance monitoring",
      "Data-driven optimization",
      "Feature enhancements",
      "Ongoing support",
    ],
  },
];

const Process = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="container mx-auto px-4 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Process</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A proven 5-step methodology that takes you from idea to scale with
              clarity and confidence.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Connecting Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[31px] top-24 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent"></div>
                )}

                {/* Step Card */}
                <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Icon & Number */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="text-6xl lg:text-8xl font-bold text-primary/10 absolute -top-4 -left-2">
                          {step.number}
                        </div>
                        <div className="relative w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="text-primary" size={32} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Process;
