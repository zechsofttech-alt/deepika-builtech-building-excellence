import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
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
        "warehouse": "Warehouse",
        "cold-storage": "Cold Storage",
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
      const response = await fetch("https://formspree.io/f/infoadmin_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
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
                  <a href="mailto:info@deepikabuiltech.com" className="text-ink-muted text-base hover:text-amber transition-colors block font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded-sm">
                    info@deepikabuiltech.com
                  </a>
                  <a href="mailto:dbtechengg@gmail.com" className="text-xs text-ink-muted/50 hover:text-amber transition-colors block mt-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded-sm">
                    dbtechengg@gmail.com (Backup)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-panel p-8 md:p-12 rounded-[2rem] border-white/40">
            <h4 className="font-heading font-bold text-3xl text-ink mb-8 tracking-tight">Send a Message</h4>
            
            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Send className="w-6 h-6" />
                </div>
                <h5 className="font-heading font-bold text-emerald-900 text-2xl">Enquiry Submitted!</h5>
                <p className="text-emerald-700 text-base font-sans leading-relaxed">
                  Thank you for connecting with Deepika Builtech. Our structural engineering specialists will review your requirements and respond within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-bold uppercase tracking-wider text-emerald-600 border-b border-emerald-400 hover:text-emerald-800 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form 
                action="https://formspree.io/f/infoadmin_form" 
                method="POST" 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Name</label>
                    <input
                      id="form-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/50 border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Email</label>
                    <input
                      id="form-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/50 border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="form-phone" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Phone Number</label>
                  <input
                    id="form-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/50 border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-service" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Service Interested In</label>
                  <select
                    id="form-service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white/50 border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
                  >
                    <option value="" disabled>Select a Service</option>
                    <option value="PEB Building Structure">PEB Building Structure</option>
                    <option value="Construction">Construction</option>
                    <option value="Cold Storage">Cold Storage</option>
                    <option value="Mezzanine Floor">Mezzanine Floor</option>
                    <option value="Warehouse">Warehouse</option>
                    <option value="EOT Cranes">EOT Cranes</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Message</label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/50 border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans resize-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-carbon hover:bg-carbon-light text-white font-black py-5 rounded-xl flex items-center justify-center gap-3 transition-all duration-500 group shadow-xl hover:shadow-carbon/20 active:scale-[0.98] uppercase tracking-widest text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                    <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                  </button>

                  <a 
                    href="https://wa.me/919600067611?text=Hi%2C%20I%20am%20interested%20in%20your%20construction%20services" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-500 shadow-xl hover:shadow-emerald-600/20 active:scale-[0.98] uppercase tracking-widest text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
                  >
                    <MessageSquare className="w-5 h-5" />
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
