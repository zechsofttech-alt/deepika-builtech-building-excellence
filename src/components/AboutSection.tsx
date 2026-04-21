import { Factory, Award, Shield, CheckCircle2 } from "lucide-react";
import pebImg from "@/assets/peb-building.jpg";

const capabilities = [
  "Advanced PEB Design & Engineering",
  "Automated CNC Fabrication",
  "Rigorous Safety & Quality Control",
  "End-to-end On-site Erection",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image & Badge */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded overflow-hidden">
              <img
                src={pebImg}
                alt="State of the art fabrication"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
            {/* Absolute badge */}
            <div className="absolute -bottom-8 -right-8 glass-panel-dark text-surface p-8 rounded-2xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-8 h-8 text-amber" />
                <h4 className="font-heading font-bold text-xl uppercase tracking-wider">ISO 9001:2015</h4>
              </div>
              <p className="text-surface-mid text-sm leading-relaxed">
                Certified quality management system ensuring uncompromising structural integrity.
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="section-label mb-6">About Deepika Builtech</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-ink leading-tight mb-8 tracking-tighter">
              Forging Industrial <br />
              <span className="gradient-text">Scale & Excellence.</span>
            </h3>
            
            <p className="text-lg text-ink-muted leading-relaxed font-sans mb-10">
              Deepika Builtech stands as a beacon of precision in South India's industrial
              landscape. We engineer resilience into every joint, delivering pre-engineered
              and heavy structural solutions that redefine durability and scale.
            </p>

            <div className="space-y-4 mb-12">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-amber shrink-0" />
                  <span className="text-ink font-semibold">{cap}</span>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-8 border-t border-surface-mid pt-8 mt-12">
              <div className="flex items-start gap-5 hover-lift group">
                <div className="w-14 h-14 glass-panel flex items-center justify-center rounded-xl bg-surface-subtle group-hover:bg-amber/10 transition-colors">
                  <Award className="w-6 h-6 text-ink group-hover:text-amber transition-colors" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-ink text-lg">Awarded</h4>
                  <p className="text-sm text-ink-muted mt-1 leading-relaxed">Industry Choice 2023</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 hover-lift group">
                <div className="w-14 h-14 glass-panel flex items-center justify-center rounded-xl bg-surface-subtle group-hover:bg-amber/10 transition-colors">
                  <Factory className="w-6 h-6 text-ink group-hover:text-amber transition-colors" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-ink text-lg">Scale</h4>
                  <p className="text-sm text-ink-muted mt-1 leading-relaxed">50,000 Sq.Ft Facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;