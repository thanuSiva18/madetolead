import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur border-b border-border">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex items-center justify-between h-14 lg:h-16">
        {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Made To Lead"
              height={32}
              width={120}
              className="h-8 w-auto object-contain"
            />
          </Link>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm lg:text-base font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* CTA Button - Desktop */}
        <a href="#contact" className="hidden lg:block">
          <Button variant="hero" size="lg">
            Book a Free AI Audit
          </Button>
        </a>
      </div>
    </div>
  </nav>
);

export default Navigation;
