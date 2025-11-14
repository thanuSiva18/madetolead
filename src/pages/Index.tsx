import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import DetailedServicesSection from "@/components/home/DetailedServicesSection";
import ClientLogosSection from "@/components/home/ClientLogosSection";
import DetailedProcessSection from "@/components/home/DetailedProcessSection";
import FounderSection from "@/components/home/FounderSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import CTASection from "@/components/home/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ClientLogosSection />
        <ServicesSection />
        <DetailedServicesSection />
        <DetailedProcessSection />
        <FounderSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
