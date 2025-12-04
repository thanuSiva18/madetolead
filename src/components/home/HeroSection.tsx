import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex items-start justify-center overflow-hidden !pt-0 !pb-0">
      

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Full-Stack AI Partner</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            We build <span className="text-gradient">AI-driven digital systems</span> that scale your business
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: "0.1s" }}>
            A-Z digital business growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <a
              href="https://calendly.com/madetolead-agency/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                variant="cta"
                size="xl"
                className="group"
              >
                Book a Free AI Audit
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button
              variant="outline"
              size="xl"
              onClick={() => scrollToSection('services')}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
