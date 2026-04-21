import { Building2, Briefcase, Flame, Component, Layout, Rocket, Box, Globe } from "lucide-react";

const partners = [
  { name: "BuildTech", icon: Building2 },
  { name: "UrbanStruct", icon: Layout },
  { name: "GlobalConst", icon: Globe },
  { name: "PrimeSteels", icon: Component },
  { name: "ApexEng", icon: Rocket },
  { name: "SolidFound", icon: Box },
  { name: "ElevateRE", icon: Briefcase },
  { name: "SummitEst", icon: Flame },
];

const marqueePartners = [...partners, ...partners, ...partners];

const TrustedPartners = () => {
  return (
    <section className="bg-white py-14 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-10">
        <p className="text-center text-xs font-bold tracking-[0.2em] text-ink-muted uppercase opacity-60">
          Trusted engineering partner for industry leaders
        </p>
      </div>
      
      <div className="relative flex overflow-hidden w-full max-w-[100vw]">
        {/* Soft edge fade overlay */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-marquee items-center py-2">
          {marqueePartners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 w-48 mx-8 text-ink-muted/50 hover:text-amber transition-all duration-500 hover:scale-105 group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-subtle group-hover:bg-amber/5 border border-transparent group-hover:border-amber/20 transition-all duration-500">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <span className="text-xl font-bold font-heading tracking-tight">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
