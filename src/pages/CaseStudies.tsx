import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ExternalLink } from "lucide-react";

const caseStudies = [
  {
    company: "Tech Startup X",
    industry: "SaaS",
    result: "Saved 3 hours/day via AI automation",
    description:
      "Implemented custom AI chatbot and workflow automation that handles customer support queries and internal processes, reducing manual work by 60%.",
    metrics: ["60% reduced manual work", "3hrs saved daily", "90% customer satisfaction"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    company: "E-Commerce Brand Y",
    industry: "Retail",
    result: "3x revenue growth in 6 months",
    description:
      "Built custom e-commerce platform with AI-powered product recommendations and automated marketing campaigns that scaled revenue from ₹2L to ₹6L monthly.",
    metrics: ["3x revenue increase", "10k+ monthly visitors", "40% conversion lift"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    company: "Consulting Firm Z",
    industry: "Professional Services",
    result: "Custom ERP reduced ops time by 50%",
    description:
      "Developed tailored ERP system with analytics dashboard that streamlined operations, client management, and reporting processes.",
    metrics: ["50% faster operations", "Zero data errors", "Real-time insights"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="container mx-auto px-4 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Real Brands. <span className="text-gradient">Real Results.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              See how we've helped businesses transform through AI-driven solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 card-hover relative overflow-hidden"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Industry Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    {study.industry}
                  </div>

                  {/* Company Name */}
                  <h3 className="text-2xl font-bold mb-2">{study.company}</h3>

                  {/* Result Highlight */}
                  <p className="text-primary font-semibold mb-4">{study.result}</p>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-2 mb-6">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-sm font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    View Full Story
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Large Case Study */}
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="bg-card border border-primary/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-glow opacity-30 blur-3xl"></div>

              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Featured Success Story
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Your success story could be next
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                  We've helped dozens of businesses transform through AI and
                  automation. From startups to established brands, our solutions scale
                  with your ambitions.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">
                      Client Satisfaction
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">
                      Projects Delivered
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">3x</div>
                    <div className="text-sm text-muted-foreground">
                      Average ROI Increase
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CaseStudies;
