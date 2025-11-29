import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-card pt-20 pb-10 overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary/20 blur-xl"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-gradient cursor-pointer mb-6 inline-block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              MadeToLead
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Websites, automation, ads, and simple data systems for business growth.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">
                <span className="text-xs">Li</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">
                <span className="text-xs">X</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">
                <span className="text-xs">Ig</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">Company</h3>
            <div className="flex flex-col gap-3">
              {['Services', 'Process', 'Case Studies', 'About'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-muted-foreground hover:text-primary transition-colors text-left text-sm hover:translate-x-1 duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">Resources</h3>
            <div className="flex flex-col gap-3">
              {['Blog', 'FAQ', 'Privacy Policy', 'Terms'].map((item) => (
                <button
                  key={item}
                  className="text-muted-foreground hover:text-primary transition-colors text-left text-sm hover:translate-x-1 duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">Contact</h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:team@madetolead.in"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail size={16} className="text-primary" />
                <span className="text-sm">team@madetolead.in</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground group">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm">Coimbatore, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/40 text-center md:text-left">
            © 2025 MadeToLead. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40">
            Built by Thanu Siva.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
