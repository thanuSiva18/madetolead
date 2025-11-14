import { ExternalLink } from "lucide-react";

const caseStudies = [
  {
    company: "Tech Startup X",
    industry: "SaaS",
    result: "60% time saved through AI automation",
    description:
      "Custom AI chatbot and workflow automation handling customer support and internal processes.",
    metrics: ["60% reduced manual work", "3 hours saved daily", "90% customer satisfaction"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    company: "E-Commerce Brand Y",
    industry: "Retail",
    result: "3x revenue growth in 6 months",
    description:
      "Custom e-commerce platform with AI recommendations and automated marketing campaigns.",
    metrics: ["3x revenue increase", "10k+ monthly visitors", "40% conversion lift"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    company: "Consulting Firm Z",
    industry: "Services",
    result: "50% faster operations with custom ERP",
    description:
      "Tailored ERP system with analytics dashboard for streamlined operations and real-time insights.",
    metrics: ["50% faster operations", "Zero data errors", "Real-time reporting"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Results That <span className="text-gradient">Speak</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real businesses. Real growth. Proven outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 card-hover relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {study.industry}
                </div>

                <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                <p className="text-primary font-semibold mb-4">{study.result}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="space-y-2 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm font-medium">{metric}</span>
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  View Full Story
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          <div className="bg-card border border-primary/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 opacity-30 blur-3xl"></div>

            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Why Clients Choose Us
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Your growth starts now
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                We don't just build—we partner for lasting growth. Our systems scale with your business.
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
      </div>
    </section>
  );
};

export default CaseStudiesSection;
