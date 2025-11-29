const ClientLogosSection = () => {
  return (
    <section className="py-16 lg:py-24 border-y border-white/5 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4 font-medium">
            Trusted by growing brands, creators, and service businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center max-w-5xl mx-auto opacity-70 hover:opacity-100 transition-opacity duration-500">
          {/* Lamstacks Logo */}
          <div className="flex items-center justify-center h-12 px-4 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="text-center">
              <div className="font-bold text-xl text-muted-foreground hover:text-primary transition-colors">
                Lamstacks
              </div>
            </div>
          </div>

          {/* Atom Infra Logo */}
          <div className="flex items-center justify-center h-12 px-4 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="text-center">
              <div className="font-bold text-xl text-muted-foreground hover:text-primary transition-colors">
                Atom Infra
              </div>
            </div>
          </div>

          {/* Dummy Logo 1 */}
          <div className="flex items-center justify-center h-12 px-4 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="w-20 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center border border-white/5">
              <div className="text-xs font-bold text-muted-foreground">Logo</div>
            </div>
          </div>

          {/* Dummy Logo 2 */}
          <div className="flex items-center justify-center h-12 px-4 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="w-20 h-14 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center border border-white/5">
              <div className="text-xs font-bold text-muted-foreground">Logo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
