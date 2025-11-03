import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-bold text-gradient cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              MadeToLead
            </div>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Building 1,000 scalable businesses by 2027 using AI, automation, and
              creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('process')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:team@madetolead.in"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>team@madetolead.in</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Coimbatore, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 MadeToLead — Built with 🔥 by Thanu Sivaa
          </p>
          <p className="text-sm text-muted-foreground">
            Automation. Intelligence. Growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
