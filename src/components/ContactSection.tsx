import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xvgooleq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          subject: `New Quote Request — ${formData.service} — deepikabuiltech.com`
        })
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("There was an issue submitting your request. Please try again or connect via WhatsApp.");
      }
    } catch (error) {
      alert("Submission error. Please try again or contact us directly on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Send className="w-6 h-6" />
                </div>
                <h5 className="font-heading font-bold text-emerald-900 text-2xl">Enquiry Submitted!</h5>
                <p className="text-emerald-700 text-base font-sans leading-relaxed">
                  Thank you, <span className="font-bold">{formData.name}</span>! We have received your enquiry and our team will contact you within 2 business hours on <span className="font-bold">{formData.phone}</span>. For urgent queries, WhatsApp us directly: +91 96000 67611
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="https://wa.me/919600067611?text=Hi%2C%20I%20am%20interested%20in%20your%20construction%20services.%20Please%20share%20a%20quote." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 uppercase tracking-wider text-xs shadow-md"
                  >
                    WhatsApp Us Now
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", phone: "", service: "", message: "" });
                    }}
                    className="text-sm font-bold uppercase tracking-wider text-emerald-600 border-b border-emerald-400 hover:text-emerald-800 transition-colors"
                  >
                    Send another request
                  </button>
                </div>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label htmlFor="form-name" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Name *</label>
                  <input
                    id="form-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/50 border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-phone" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Phone Number *</label>
                  <input
                    id="form-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91XXXXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/50 border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-service" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Service Interested In *</label>
                  <select
                    id="form-service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white/50 border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
                  >
                    <option value="">Select a service...</option>
                    <option value="PEB Building Structure">PEB Building Structure</option>
                    <option value="Civil & Steel Construction">Civil & Steel Construction</option>
                    <option value="Cold Storage Construction">Cold Storage Construction</option>
                    <option value="Mezzanine Floor">Mezzanine Floor</option>
                    <option value="Warehouse Construction">Warehouse Construction</option>
                    <option value="EOT Cranes">EOT Cranes</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Message</label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project, timeline, and any specific requirements"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/50 border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans resize-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-carbon hover:bg-carbon-mid text-white font-black py-5 rounded-xl flex items-center justify-center gap-3 transition-all duration-500 group shadow-xl active:scale-[0.98] uppercase tracking-widest text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
                  >
                    {isSubmitting ? "Submitting..." : "Send My Quote Request →"}
                  </button>

                  <a 
                    href="https://wa.me/919600067611?text=Hi%2C%20I%20am%20interested%20in%20your%20construction%20services.%20Please%20share%20a%20quote." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-500 shadow-xl active:scale-[0.98] uppercase tracking-widest text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
