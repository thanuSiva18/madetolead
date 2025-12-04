/* If migrating to Next.js, replace <img> with Next's <Image /> from 'next/image'. */

const logos = Array(10).fill({ src: "/lamstacks.svg", alt: "Lamstacks" });

const ClientLogosSection = () => {
  return (
    <section className="pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-10 lg:pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground">Trusted by leading teams</p>
        </div>

        {/* Marquee with gradient edge fades */}
        <div className="relative overflow-hidden w-full">
          {/* Left fade overlay */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-28 lg:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
          {/* Right fade overlay */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-28 lg:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

          {/* Track under overlays */}
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8 opacity-80 marquee-track z-0">
            <div className="flex items-center gap-4 md:gap-6 lg:gap-8 shrink-0">
              {logos.map((logo, idx) => (
                <img
                  key={`a-${idx}`}
                  src={logo.src}
                  alt={logo.alt}
                  height={60}
                  style={{ height: 60, width: "auto", objectFit: "contain", opacity: 0.8 }}
                  className="h-[60px] w-auto"
                />
              ))}
            </div>
            <div className="flex items-center gap-4 md:gap-6 lg:gap-8 shrink-0">
              {logos.map((logo, idx) => (
                <img
                  key={`b-${idx}`}
                  src={logo.src}
                  alt={logo.alt}
                  height={60}
                  style={{ height: 60, width: "auto", objectFit: "contain", opacity: 0.8 }}
                  className="h-[60px] w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
