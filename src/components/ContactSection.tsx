import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const [formData, setFormData] = useState({ service: "", message: "" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const area = params.get("area");
    const type = params.get("type");
    const steel = params.get("steel");
    const timeline = params.get("timeline");

    if (area || type || steel || timeline) {
      const typeMapping: Record<string, string> = {
        "warehouse": "Warehouse Construction",
        "cold-storage": "Cold Storage Construction",
        "manufacturing": "PEB Building Structure",
        "mezzanine": "Mezzanine Floor"
      };

      const matchedService = type ? typeMapping[type] : "";
      
      let initialMessage = "";
      if (area && type) {
        const formattedType = type.replace("-", " ");
        initialMessage = `Hi, I am interested in a quote for a ${formattedType} project.\n\nProject Specifications:\n- Target Floor Area: ${Number(area).toLocaleString()} Sq.Ft\n- Estimated Steel Required: ~${steel} Tons\n- Estimated Erection Timeline: ~${timeline} Weeks`;
      }

      setFormData(prev => ({
        ...prev,
        service: matchedService || prev.service,
        message: initialMessage || prev.message
      }));
    }
  }, []);

  return (
    <section id="contact" className="py-24 bg-surface-subtle border-t border-surface-mid">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Info */}
          <div>
            <h2 className="section-label mb-6">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-ink leading-[1.1] mb-8 tracking-tighter">
              Discuss Your <br />
              <span className="gradient-text">Next Project.</span>
            </h3>
            <p className="text-lg text-ink-muted mb-12 max-w-md">
              Ready to construct an industrial masterpiece? Connect with our engineering specialists.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 glass-panel flex items-center justify-center rounded-2xl shrink-0 group-hover:bg-amber/10 transition-all duration-500 group-hover:scale-110 shadow-sm">
                  <MapPin className="w-6 h-6 text-amber" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-ink text-xl mb-1 tracking-tight">Corporate HQ</h4>
                  <p className="text-ink-muted text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    New No. 31,31A, Old No.14,15, Coromandal Town,<br />
                    SIDCO Industrial Estate, Ambattur, Chennai - 600098
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 glass-panel flex items-center justify-center rounded-2xl shrink-0 group-hover:bg-amber/10 transition-all duration-500 group-hover:scale-110 shadow-sm">
                  <Phone className="w-6 h-6 text-amber" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-ink text-xl mb-1 tracking-tight">Direct Line</h4>
                  <a href="tel:+919600067611" className="text-ink-muted text-base hover:text-amber transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded-sm">
                    +91 96000 67611
                  </a>
                  <span className="block text-xs text-ink-muted/60 mt-1">Landline: 044-26256416</span>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 glass-panel flex items-center justify-center rounded-2xl shrink-0 group-hover:bg-amber/10 transition-all duration-500 group-hover:scale-110 shadow-sm">
                  <Mail className="w-6 h-6 text-amber" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-ink text-xl mb-1 tracking-tight">Electronic Mail</h4>
                  <a href="mailto:infoadmin@deepikabuiltech.in" className="text-ink-muted text-base hover:text-amber transition-colors block font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded-sm">
                    infoadmin@deepikabuiltech.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-panel p-8 md:p-12 rounded-[2rem] border-white/40">
            <h4 className="font-heading font-bold text-3xl text-ink mb-8 tracking-tight">Get a Free Quote</h4>
            {/* Pass state values derived from URL parameters as defaults */}
            <ContactForm compact={true} initialService={formData.service} initialMessage={formData.message} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;


