import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Contact Us | Deepika Builtech Engineering Chennai"
        description="Get in touch with Deepika Builtech for PEB construction quotes, project inquiries, or site visits. Call +91 96000 67611 or email dbtechengg@gmail.com."
      />
      <Navbar />
      
      <div className="bg-surface-subtle py-16 border-b border-surface-mid">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-ink mb-4">
            Connect <span className="text-amber">With Us</span>
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto font-sans">
            Ready to build your vision? Our engineering experts are here to help.
          </p>
        </div>
      </div>

      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      <main id="content">
        <ContactSection />
        
        {/* Geographic Presence & Units Section */}
        <section className="py-24 bg-surface border-t border-surface-mid">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <span className="text-amber text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Our Facilities</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-ink tracking-tight mb-6">
                Corporate Office & <span className="gradient-text">Manufacturing Units</span>
              </h2>
              <p className="text-ink-muted text-base max-w-2xl mx-auto font-sans">
                Deepika Builtech operates across three primary locations to design, fabricate, and dispatch high-tensile steel assemblies efficiently.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Corporate Office */}
              <div className="bg-white border border-surface-mid p-8 rounded-3xl shadow-sm space-y-6 hover:shadow-xl hover:border-amber/30 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-surface-subtle border border-surface-mid flex items-center justify-center rounded-2xl text-amber">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-black text-xl text-ink">Corporate Headquarters</h3>
                  <p className="text-sm text-ink-muted font-sans leading-relaxed">
                    New No. 31,31A, Old No.14,15, Coromandal Town, SIDCO Industrial Estate, Ambattur, Chennai - 600098
                  </p>
                </div>
                <div className="space-y-2 pt-4 border-t border-surface-mid">
                  <span className="text-[10px] font-black uppercase tracking-widest text-ink-muted block">Direct Contact</span>
                  <a href="tel:+919600067611" className="text-sm font-bold text-ink hover:text-amber transition-colors block">+91 96000 67611</a>
                  <a href="mailto:info@deepikabuiltech.com" className="text-xs font-semibold text-ink hover:text-amber transition-colors block underline underline-offset-4 decoration-amber/30">info@deepikabuiltech.com</a>
                </div>
              </div>

              {/* Manufacturing Unit I */}
              <div className="bg-white border border-surface-mid p-8 rounded-3xl shadow-sm space-y-6 hover:shadow-xl hover:border-amber/30 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-surface-subtle border border-surface-mid flex items-center justify-center rounded-2xl text-amber">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-black text-xl text-ink">Manufacturing Unit I</h3>
                  <p className="text-sm text-ink-muted font-sans leading-relaxed">
                    Survey No.44/5, Rajakulam Road, Vaiyavur Post, Karur Village, Kanchipuram District - 631561
                  </p>
                </div>
                <div className="space-y-2 pt-4 border-t border-surface-mid">
                  <span className="text-[10px] font-black uppercase tracking-widest text-ink-muted block">Factory Contact</span>
                  <a href="mailto:sivaadithya@deepikabuiltech.in" className="text-xs font-semibold text-ink hover:text-amber transition-colors block underline underline-offset-4 decoration-amber/30">sivaadithya@deepikabuiltech.in</a>
                </div>
              </div>

              {/* Manufacturing Unit II */}
              <div className="bg-white border border-surface-mid p-8 rounded-3xl shadow-sm space-y-6 hover:shadow-xl hover:border-amber/30 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-surface-subtle border border-surface-mid flex items-center justify-center rounded-2xl text-amber">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-black text-xl text-ink">Manufacturing Unit II</h3>
                  <p className="text-sm text-ink-muted font-sans leading-relaxed">
                    No.349/A, SIDCO Industrial Estate, Thirumullaivoyal, Ambattur Taluk, Thiruvallur District - 600062
                  </p>
                </div>
                <div className="space-y-2 pt-4 border-t border-surface-mid">
                  <span className="text-[10px] font-black uppercase tracking-widest text-ink-muted block">Logistics Contact</span>
                  <a href="mailto:skylift@deepikabuiltech.in" className="text-xs font-semibold text-ink hover:text-amber transition-colors block underline underline-offset-4 decoration-amber/30">skylift@deepikabuiltech.in</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-24 bg-surface-subtle relative overflow-hidden border-t border-surface-mid">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="section-label mb-4 mx-auto">Interactive Location Map</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-ink mb-6 tracking-tight">
                Visit Our <span className="gradient-text">Headquarters</span>
              </h3>
              <p className="text-ink-muted text-base max-w-2xl mx-auto font-sans">
                Experience our industrial excellence firsthand. Drop by our Ambattur estate office for a detailed project consultation.
              </p>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-2 border border-surface-mid group">
              <div className="relative rounded-[2rem] overflow-hidden w-full h-[450px] md:h-[500px] bg-surface-subtle">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31093.578663851578!2d80.14251268489725!3d13.086708682087574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263ee8d3369a3%3A0xc3cf93eb5a5360fb!2sSIDCO%20Industrial%20Estate%2C%20Ambattur%2C%20Chennai%2C%20Tamil%20Nadu%20600098!5e0!3m2!1sen!2sin!4v1713780000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps: SIDCO Industrial Estate, Ambattur, Chennai 600098"
                  className="w-full h-full grayscale-[0.6] group-hover:grayscale-0 transition-all duration-1000 ease-in-out object-cover block"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
