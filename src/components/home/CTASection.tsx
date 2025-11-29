import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative max-w-5xl mx-auto">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-glow opacity-40 blur-3xl"></div>

          {/* Content Card */}
          <div className="relative bg-card border border-primary/30 rounded-[2.5rem] p-12 lg:p-24 text-center overflow-hidden shadow-glow hover:shadow-glow-hover transition-shadow duration-500">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-7xl font-bold mb-8">
                Ready to <span className="text-gradient">grow?</span>
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Book a free growth audit.
              </p>
              <Button variant="cta" size="xl" className="group shadow-glow hover:shadow-glow-hover transition-all duration-300 scale-110" onClick={scrollToContact}>
                Book a Free Growth Audit
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
