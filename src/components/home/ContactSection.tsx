import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    website: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      toast({
        title: "Thanks for reaching out!",
        description: "Our team will get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        businessName: "",
        website: "",
        message: "",
      });
    }, 1000);
  };

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
            <h3 className="text-3xl font-bold mb-8">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium ml-1 text-muted-foreground">Name *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium ml-1 text-muted-foreground">Email *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="businessName" className="text-sm font-medium ml-1 text-muted-foreground">Business Name</label>
                <Input
                  id="businessName"
                  name="businessName"
                  type="text"
                  placeholder="Your company name"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="h-12 bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium ml-1 text-muted-foreground">Website/Social Link</label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={formData.website}
                  onChange={handleChange}
                  className="h-12 bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl"
                />
                <p className="text-xs text-muted-foreground/60 ml-1">Optional, but helps us prepare for the call.</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium ml-1 text-muted-foreground">Biggest Bottleneck *</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your main challenge or what you're looking to build..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full h-14 text-lg shadow-glow hover:shadow-glow-hover transition-all duration-300 rounded-xl mt-4 font-bold tracking-wide"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
