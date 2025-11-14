import { Quote } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Approach</span>
            </h2>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-glow opacity-30 blur-3xl"></div>

            {/* Quote Icon */}
            <div className="relative mb-8">
              <Quote className="text-primary/30" size={48} />
            </div>

            {/* Content */}
            <div className="relative space-y-6">
              <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground">
                We believe businesses don't need another agency. They need a technical partner who understands their goals and builds systems that drive real growth. At MadeToLead, we don't do projects—we build lasting competitive advantages through AI and automation.
              </p>

              <blockquote className="text-xl lg:text-2xl font-semibold italic border-l-4 border-primary pl-6">
                "Every system we build is built to scale with you."
              </blockquote>

              {/* Founder Info */}
              <div className="pt-6 border-t border-border flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold">
                  TS
                </div>
                <div>
                  <div className="font-bold text-lg">Thanu Siva</div>
                  <div className="text-muted-foreground">
                    Founder, MadeToLead
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

export default FounderSection;
