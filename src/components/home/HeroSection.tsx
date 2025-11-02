import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-glow"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary-glow rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">AI-First Agency</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            We build{" "}
            <span className="text-gradient">AI-driven digital systems</span>{" "}
            that scale your business
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: "0.1s" }}>
            From intelligent websites to ERP & SaaS solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link to="/contact">
              <Button variant="cta" size="xl" className="group">
                Book a Free AI Audit
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="xl">
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-16 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">₹1L+</div>
              <div className="text-sm text-muted-foreground">Monthly Revenue</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Tools Integrated</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
