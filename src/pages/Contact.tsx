import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  // Forms removed in favor of Calendly booking

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="container mx-auto px-4 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Build <span className="text-gradient">Together</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We help founders turn chaos into automation and clarity.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a
                        href="mailto:team@madetolead.in"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        team@madetolead.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Location</div>
                      <p className="text-muted-foreground">
                        Coimbatore, Tamil Nadu
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-card border border-primary/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">What happens next?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>We review your requirements and schedule a call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>
                      Free AI audit to identify automation opportunities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Custom proposal with timeline and pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>If we're a fit, we start building your system</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Calendly CTA */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Book a Free AI Audit</h2>
              <p className="text-muted-foreground mb-6">Schedule a call instantly via Calendly. We’ll review your goals and share a clear action plan.</p>
              <a href="https://calendly.com/madetolead-agency/30min" target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                <Button variant="cta" size="lg" className="w-full">Book on Calendly</Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
