const ServicesSection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Simple systems. <span className="text-gradient">Fast delivery.</span> Clear ROI.
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We focus on clean execution, practical AI, and systems that make your business easier to run. No hype. No complexity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
