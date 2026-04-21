import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
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
      <ContactSection />
      
      {/* Map Section */}
      <section className="py-24 bg-surface relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber/5 to-transparent opacity-50 z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-carbon-light/5 to-transparent opacity-50 z-0 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-label mb-4 mx-auto">Our Location</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-ink mb-6 tracking-tight">
              Visit Our <span className="gradient-text">Headquarters</span>
            </h3>
            <p className="text-ink-muted text-lg max-w-2xl mx-auto font-sans">
              Experience our industrial excellence firsthand. Drop by our Ambattur estate office for a detailed project consultation.
            </p>
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl glass-panel group p-2 border-white/20">
            <div className="absolute inset-0 bg-gradient-to-br from-amber/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden w-full h-[450px] md:h-[500px] bg-surface-subtle">
              {/* Overlay Glass Card - Now visible on mobile, hover-only on desktop */}
              <div className="absolute top-4 left-4 right-4 md:top-8 md:left-8 md:right-auto z-20 glass-panel p-5 md:p-6 rounded-2xl md:max-w-xs backdrop-blur-xl border-white/40 shadow-xl opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-700 delay-100">
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber/20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber animate-pulse"></div>
                  </div>
                  <h4 className="font-heading font-bold text-ink text-base md:text-lg">Corporate HQ</h4>
                </div>
                <p className="text-xs md:text-sm text-ink-muted leading-relaxed font-medium">
                  SIDCO Industrial Estate,<br />
                  Ambattur, Chennai - 600098
                </p>
                <a 
                  href="https://www.google.com/maps/place/SIDCO+Industrial+Estate,+Ambattur,+Chennai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-3 md:mt-4 inline-flex items-center gap-2 text-amber text-[10px] md:text-xs font-bold uppercase tracking-wider hover:text-carbon transition-colors"
                >
                  Get Directions <span className="text-base">→</span>
                </a>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31093.578663851578!2d80.14251268489725!3d13.086708682087574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263ee8d3369a3%3A0xc3cf93eb5a5360fb!2sSIDCO%20Industrial%20Estate%2C%20Ambattur%2C%20Chennai%2C%20Tamil%20Nadu%20600098!5e0!3m2!1sen!2sin!4v1713780000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
                className="w-full h-full grayscale-[0.6] group-hover:grayscale-0 transition-all duration-1000 ease-in-out object-cover block"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </div>
  );
};

export default Contact;
