import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative max-w-4xl mx-auto">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-glow opacity-30 blur-3xl"></div>

          {/* Content Card */}
          <div className="relative bg-card border border-primary/30 rounded-3xl p-8 lg:p-16 text-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Let's build your <span className="text-gradient">AI system</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to transform your business with AI-driven automation? Book a
                free consultation and let's discuss how we can scale your operations.
              </p>
              <Link to="/contact">
                <Button variant="cta" size="xl" className="group">
                  Book a Free AI Audit
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
