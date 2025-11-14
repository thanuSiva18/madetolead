import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will this actually increase our revenue?",
    answer:
      "Yes. Our systems are built around one goal: measurable business outcomes. Whether it's automation saving your team hours, AI driving conversions, or data-driven decisions increasing profit margins — we focus on what moves your bottom line. Your success is our success.",
  },
  {
    question: "What if we don't have a tech team?",
    answer:
      "Perfect. We become your technical partner. We build, deploy, maintain, and optimize everything. No need for in-house developers. We handle the complexity so you can focus on running your business.",
  },
  {
    question: "How is this different from other AI agencies?",
    answer:
      "Most agencies talk about AI. We engineer it. We build systems that actually learn and scale—not just add a chatbot to your website. Full-stack approach means we own the entire outcome, from strategy to deployment to optimization.",
  },
  {
    question: "What's the timeline and cost?",
    answer:
      "It depends on complexity. Simple automation: 2-3 weeks. Full systems: 2-3 months. Cost ranges from ₹50,000 for focused solutions to custom enterprise pricing. We're transparent about timelines and budgets upfront. Book a free audit to get a clear proposal.",
  },
  {
    question: "Will we be locked in with you long-term?",
    answer:
      "No. We build independent systems that your team can manage. Some clients choose ongoing optimization (retainers), others go solo after launch. We're confident enough in our work that we don't need lock-in clauses.",
  },
  {
    question: "Can you really build custom software?",
    answer:
      "Yes. Custom ERPs, SaaS platforms, internal tools, client portals—we build from scratch tailored to your exact workflow. We don't force you into generic templates.",
  },
  {
    question: "How do we know if this is worth the investment?",
    answer:
      "Book a free AI audit. We'll map your current operations, identify automation opportunities, and show you the ROI potential. If it doesn't make sense, you walk away with valuable insights. No obligation.",
  },
  {
    question: "What support do we get after launch?",
    answer:
      "Full support. We monitor your systems, optimize for performance, handle updates, and scale as you grow. You can go fully managed or have us on standby—your choice.",
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
