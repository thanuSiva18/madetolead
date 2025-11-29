import { Quote } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Approach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="relative">
                <Quote className="text-primary/20 absolute -top-8 -left-8" size={80} />
                <p className="text-2xl lg:text-4xl font-bold leading-tight text-foreground relative z-10">
                  "Businesses don’t fail because of bad ideas — they fail because of <span className="text-gradient">bad systems</span>."
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe businesses don't need another agency. They need a technical partner who understands their goals and builds systems that drive real growth. At MadeToLead, we don't do projects—we build lasting competitive advantages through AI and automation.
              </p>
            </div>

            {/* Right: Founder Profile Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-card border border-white/5 rounded-2xl p-8 max-w-sm w-full relative overflow-hidden shadow-glow hover:shadow-glow-hover transition-all duration-300 group">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center text-3xl font-bold shadow-lg mb-6 border-4 border-card">
                    TS
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Thanu Siva</h3>
                  <p className="text-primary font-medium mb-6">Founder, MadeToLead</p>

                  <div className="w-full h-px bg-white/10 mb-6"></div>

                  <p className="text-sm text-muted-foreground italic">
                    "Let's build something that actually moves the needle."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
