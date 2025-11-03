import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly does MadeToLead do?",
    answer:
      "We build AI-driven digital systems for businesses. This includes intelligent websites, custom ERP & SaaS solutions, automation workflows, chatbots, analytics dashboards, and complete digital transformation strategies. We're your technical partner for scaling through technology.",
  },
  {
    question: "Who do you work with?",
    answer:
      "We work with ambitious small businesses, startups, and entrepreneurs who want to scale efficiently. Our clients range from e-commerce brands to consulting firms, SaaS startups to local service providers. If you're growth-focused and ready to leverage AI, we're a great fit.",
  },
  {
    question: "How is your agency different from others?",
    answer:
      "We're AI-first, which means we don't just build websites — we engineer systems that learn, adapt, and scale with your business. We focus on automation and intelligence, not just aesthetics. Plus, we're transparent with our process, pricing, and results. No fluff, just impact.",
  },
  {
    question: "Can I work with you if I don't understand tech or AI?",
    answer:
      "Absolutely! You don't need to be technical at all. We translate complex technology into simple solutions. Our process is designed to guide you step-by-step, and we explain everything in plain language. You focus on your business goals, we handle the technical execution.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer both project-based and retainer models depending on your needs. Project pricing starts from ₹50,000 for basic solutions, while comprehensive systems can range higher based on complexity and scope. We always provide transparent quotes after understanding your requirements. Book a free consultation to get a custom proposal.",
  },
  {
    question: "How long until I see results?",
    answer:
      "It depends on the project scope. Simple automation workflows can be deployed in 2-3 weeks. Complete systems like custom ERPs or SaaS platforms typically take 2-3 months. We break projects into phases with clear milestones so you see progress regularly. Quick wins first, then scale.",
  },
  {
    question: "Do you build custom software or tools?",
    answer:
      "Yes! Custom development is one of our core strengths. Whether you need a proprietary CRM, internal management tool, client portal, or completely unique software — we build it from scratch, tailored exactly to your workflow and requirements.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simple: Book a free AI audit using the button on any page. We'll hop on a call, understand your business, identify automation opportunities, and create a custom roadmap. No pressure, no commitments — just a clear plan forward. If it makes sense, we start building. If not, you still walk away with valuable insights.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              We're happy to help. Reach out and let's chat about your project.
            </p>
            <a
              href="mailto:team@madetolead.in"
              className="inline-flex items-center text-primary font-medium hover:underline"
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
