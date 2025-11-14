const ClientLogosSection = () => {
  return (
    <section className="py-12 lg:py-16 border-y border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            Trusted by Leading Brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-4xl mx-auto">
          {/* Lamstacks Logo */}
          <div className="flex items-center justify-center h-12 px-4">
            <div className="text-center">
              <div className="font-bold text-lg text-muted-foreground hover:text-primary transition-colors">
                Lamstacks
              </div>
            </div>
          </div>

          {/* Atom Infra Logo */}
          <div className="flex items-center justify-center h-12 px-4">
            <div className="text-center">
              <div className="font-bold text-lg text-muted-foreground hover:text-primary transition-colors">
                Atom Infra
              </div>
            </div>
          </div>

          {/* Dummy Logo 1 */}
          <div className="flex items-center justify-center h-12 px-4">
            <div className="w-16 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <div className="text-xs font-bold text-muted-foreground">Logo</div>
            </div>
          </div>

          {/* Dummy Logo 2 */}
          <div className="flex items-center justify-center h-12 px-4">
            <div className="w-16 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
              <div className="text-xs font-bold text-muted-foreground">Logo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
