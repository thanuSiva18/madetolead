import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  // Forms removed; use Calendly CTA instead

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Grow?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Book a free AI audit. Let's talk about your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
          <div className="space-y-8">
            <div className="bg-card border border-white/5 rounded-2xl p-10 backdrop-blur-sm shadow-lg">
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors border border-primary/10">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-lg">Email</div>
                    <a
                      href="mailto:team@madetolead.in"
                      className="text-muted-foreground hover:text-primary transition-colors text-lg"
                    >
                      team@madetolead.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors border border-primary/10">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-lg">Location</div>
                    <p className="text-muted-foreground text-lg">
                      Coimbatore, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-2xl p-10">
              <h3 className="text-xl font-bold mb-6">The Process</h3>
              <ul className="space-y-5 text-muted-foreground">
                {[
                  "Discovery call to understand your goals",
                  "Free AI audit identifying growth opportunities",
                  "Custom proposal with clear ROI",
                  "Build and launch your system"
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/20 text-xs font-bold text-primary">
                      {idx + 1}
                    </div>
                    <span className="text-lg">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card border border-white/5 rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-glow to-primary"></div>
            <h3 className="text-3xl font-bold mb-8">Book a Free AI Audit</h3>
            <p className="text-muted-foreground mb-6">We’ve removed the form for faster bookings. Use the Calendly link below to schedule a call.</p>
            <a
              href="https://calendly.com/madetolead-agency/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <Button
                variant="cta"
                size="lg"
                className="w-full h-14 text-lg shadow-glow hover:shadow-glow-hover transition-all duration-300 rounded-xl mt-2 font-bold tracking-wide"
              >
                Book on Calendly
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
