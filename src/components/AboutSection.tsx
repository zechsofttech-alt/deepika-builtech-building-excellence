import { Factory, Award, Shield, CheckCircle2 } from "lucide-react";
import pebImg from "@/assets/peb-building.jpg";
import pebImgWebp from "@/assets/peb-building.webp";

const capabilities = [
  "Advanced PEB Design & Engineering",
  "Automated CNC Fabrication",
  "Rigorous Safety & Quality Control",
  "End-to-end On-site Erection",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-surface">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image & Badge */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded overflow-hidden">
              <picture>
                <source srcSet={pebImgWebp} type="image/webp" />
                <img
                  src={pebImg}
                  alt="State of the art PEB steel fabrication facility of Deepika Builtech in Chennai"
                  width="640"
                  height="480"
                  loading="lazy"
                  {...{ fetchpriority: "low" }}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
              </picture>
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
            
            <p className="text-lg text-ink-muted leading-relaxed font-sans mb-6">
              Founded in Chennai and operating for over a decade, Deepika Builtech Engineering specialises exclusively in Pre-Engineered Buildings, structural steel fabrication, and industrial construction. We operate three facilities — our main office and fabrication unit in Ambattur, SIDCO Industrial Estate Chennai, Unit I in Kanchipuram District, and Unit II in Thirumullaivoyal, Thiruvallur District — giving us unmatched capacity and coverage across the Chennai Metropolitan Area.
            </p>
            <p className="block md:hidden text-base text-ink-muted leading-relaxed font-sans mb-10">
              With 150+ completed projects and 100+ satisfied clients across Chennai, Kanchipuram, Thiruvallur, Sriperumbudur, and beyond, Deepika Builtech brings unmatched technical expertise and on-time delivery to every build. Our CNC-precision manufacturing, IS-code compliant structural engineering, and experienced erection teams ensure your project is completed safely, on schedule, and within budget.
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
                  <p className="text-sm text-ink-muted mt-1 leading-relaxed">Excellence Award 2025</p>
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