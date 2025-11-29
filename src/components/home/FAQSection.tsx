import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will this help us increase revenue?",
    answer:
      "Yes. We build systems designed for ROI—whether that’s through higher-converting funnels, better ad targeting, or automated lead follow-ups.",
  },
  {
    question: "Do we need a tech team?",
    answer:
      "No. We handle everything—design, build, launch, and maintenance. You focus on your business; we handle the tech.",
  },
  {
    question: "Are your systems easy to use?",
    answer:
      "Yes. We prioritize simplicity. You get clean dashboards and intuitive tools that your team can use without extensive training.",
  },
  {
    question: "How long do projects take?",
    answer:
      "Simple setups take 1-2 weeks. Complex custom builds typically take 4-8 weeks. We move fast.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes. We provide ongoing support to ensure your systems keep running smoothly and scale with you.",
  },
  {
    question: "Do you build ERP/complex software?",
    answer:
      "Yes. We build custom internal tools, ERPs, and dashboards tailored exactly to your workflow.",
  },
  {
    question: "What’s the price range?",
    answer:
      "Projects typically range from ₹50,000 for specific setups to custom enterprise pricing for full systems. Book a free audit for a precise quote.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about working with MadeToLead.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-white/5 rounded-2xl px-6 lg:px-8 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 lg:py-8 [&[data-state=open]>svg]:rotate-45">
                  <span className="font-bold text-lg lg:text-xl pr-8">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-8 leading-relaxed text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-20 text-center bg-gradient-to-br from-card to-primary/5 border border-white/10 rounded-3xl p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              We're happy to help. Reach out and let's chat about your project.
            </p>
            <a
              href="mailto:team@madetolead.in"
              className="inline-flex items-center text-primary font-bold text-xl hover:underline"
            >
              team@madetolead.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
