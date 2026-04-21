import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Enquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`);
    window.location.href = `mailto:dbtechengg@gmail.com?subject=${subject}&body=${body}`;
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
                    SIDCO Industrial Estate,<br />
                    Ambattur, Chennai - 600098
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 glass-panel flex items-center justify-center rounded-2xl shrink-0 group-hover:bg-amber/10 transition-all duration-500 group-hover:scale-110 shadow-sm">
                  <Phone className="w-6 h-6 text-amber" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-ink text-xl mb-1 tracking-tight">Direct Line</h4>
                  <a href="tel:+919600067611" className="text-ink-muted text-base hover:text-amber transition-colors font-medium">
                    +91 96000 67611
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 glass-panel flex items-center justify-center rounded-2xl shrink-0 group-hover:bg-amber/10 transition-all duration-500 group-hover:scale-110 shadow-sm">
                  <Mail className="w-6 h-6 text-amber" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-ink text-xl mb-1 tracking-tight">Electronic Mail</h4>
                  <a href="mailto:dbtechengg@gmail.com" className="text-ink-muted text-base hover:text-amber transition-colors block font-medium">
                    dbtechengg@gmail.com
                  </a>
                  <a href="mailto:infoadmin@deepikabuiltech.in" className="text-ink-muted text-base hover:text-amber transition-colors block mt-1 font-medium">
                    infoadmin@deepikabuiltech.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-panel p-8 md:p-12 rounded-[2rem] border-white/40">
            <h4 className="font-heading font-bold text-3xl text-ink mb-8 tracking-tight">Send a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/50 border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-ink-muted ml-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/50 border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-ink-muted ml-1">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/50 border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-ink-muted ml-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/50 border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-carbon hover:bg-carbon-light text-surface font-black py-5 rounded-xl flex items-center justify-center gap-3 transition-all duration-500 group shadow-xl hover:shadow-carbon/20 active:scale-[0.98] uppercase tracking-widest text-sm"
              >
                Submit Request
                <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
