import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Building, Factory, Send, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    size: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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

  const contactMethods = [
    {
      title: "Call Us Now",
      icon: <Phone className="w-6 h-6 text-amber" />,
      lines: [
        <a key="tel1" href="tel:+919600067611" className="hover:text-amber transition-colors font-bold">+91 96000 67611</a>,
        <a key="tel2" href="tel:04426256416" className="hover:text-amber transition-colors font-medium">044-26256416</a>
      ],
      subtext: "Mon–Sat, 9 AM – 6 PM",
      className: "bg-white border-surface-mid"
    },
    {
      title: "WhatsApp Us",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          fill="#25D366"
          className="w-6 h-6"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      lines: [
        <span key="wa1" className="font-bold text-emerald-900">+91 96000 67611</span>,
        <a 
          key="wa2" 
          href="https://wa.me/919600067611?text=Hi%2C%20I%20am%20interested%20in%20your%20construction%20services.%20Please%20share%20a%20quote." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-emerald-700 font-black flex items-center gap-1 hover:text-emerald-900 transition-colors"
        >
          Click to start a chat &rarr;
        </a>
      ],
      subtext: "",
      className: "bg-[#f0fdf4] border-[#bbf7d0]"
    },
    {
      title: "Email Us",
      icon: <Mail className="w-6 h-6 text-amber" />,
      lines: [
        <a key="mail1" href="mailto:infoadmin@deepikabuiltech.in" className="hover:text-amber transition-colors font-bold text-sm truncate block">infoadmin@deepikabuiltech.in</a>,
        <a key="mail2" href="mailto:dbtechengg@gmail.com" className="hover:text-amber transition-colors font-medium text-sm truncate block">dbtechengg@gmail.com</a>
      ],
      subtext: "Official Communications",
      className: "bg-white border-surface-mid"
    }
  ];

  const offices = [
    {
      title: "Head Office — Chennai",
      address: "New No. 31,31A, Old No.14,15, Coromandal Town, SIDCO Industrial Estate, Ambattur, Chennai - 600098",
      icon: <Building className="w-5 h-5 text-amber" />,
      link: "https://maps.google.com/?q=SIDCO+Industrial+Estate,+Ambattur,+Chennai+600098"
    },
    {
      title: "Unit I — Kanchipuram",
      address: "Survey No.44/5, Rajakulam Road, Vaiyavur Post, Karur Village, Kanchipuram District - 631561",
      icon: <Factory className="w-5 h-5 text-amber" />,
      link: null
    },
    {
      title: "Unit II — Thiruvallur",
      address: "No.349/A, SIDCO Industrial Estate, Thirumullaivoyal, Ambattur Taluk, Thiruvallur District - 600062",
      icon: <Factory className="w-5 h-5 text-amber" />,
      link: null
    }
  ];

  const faqs = [
    {
      question: "How quickly do you respond to enquiries?",
      answer: "Our team typically responds within 2 business hours on working days (Monday–Saturday, 9 AM to 6 PM). For urgent requirements, please WhatsApp us directly on +91 96000 67611."
    },
    {
      question: "Do you offer free site visits?",
      answer: "Yes. Deepika Builtech offers complimentary site visits across Chennai and all major Tamil Nadu industrial zones including Sriperumbudur, Oragadam, Kanchipuram, Thiruvallur, and Hosur."
    },
    {
      question: "What information should I have ready when I contact you?",
      answer: "It helps to have: the type of structure needed (PEB/warehouse/cold storage etc.), approximate size in sq.ft or acres, location of the project site, intended use, and your preferred timeline. Don't worry if you don't have all details — we'll guide you through the requirements."
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-surface">
      <SEO 
        title="Contact Us | Deepika Builtech Engineering Chennai"
        description="Get in touch with Deepika Builtech for PEB construction quotes, project inquiries, or site visits. Call +91 96000 67611 or email infoadmin@deepikabuiltech.in."
      />
      <Navbar />
      
      {/* SECTION 1 — Page Hero */}
      <section className="bg-carbon py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div 
            style={{ 
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
              backgroundSize: '80px 80px' 
            }} 
            className="w-full h-full" 
          />
        </div>
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-tight mb-4 tracking-tighter">
            Contact Deepika Builtech — <span className="text-amber">Get a Free Quote</span>
          </h1>
          <p className="text-surface-mid text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Our team responds within 2 hours. Call, WhatsApp, or fill the form below.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      <main id="content" className="py-16 space-y-24">
        
        {/* SECTION 2 — Three contact method cards */}
        <section className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, idx) => (
              <div 
                key={idx}
                className={`border p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4 ${method.className}`}
              >
                <div className="w-14 h-14 bg-surface-subtle border border-surface-mid flex items-center justify-center rounded-2xl shadow-sm">
                  {method.icon}
                </div>
                <h3 className="font-heading font-black text-xl text-ink">{method.title}</h3>
                <div className="flex flex-col space-y-1">
                  {method.lines.map((line, lidx) => (
                    <div key={lidx} className="text-base text-ink-muted">
                      {line}
                    </div>
                  ))}
                </div>
                {method.subtext && (
                  <span className="text-xs text-ink-muted/60 block pt-2">{method.subtext}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — Three office address cards */}
        <section className="container mx-auto px-6 lg:px-12">
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
            {offices.map((office, idx) => (
              <div 
                key={idx}
                className="bg-white border border-surface-mid p-8 rounded-3xl shadow-sm space-y-6 hover:shadow-xl hover:border-amber/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-surface-subtle border border-surface-mid flex items-center justify-center rounded-2xl text-amber">
                    {office.icon}
                  </div>
                  <h3 className="font-heading font-black text-xl text-ink">{office.title}</h3>
                  <p className="text-sm text-ink-muted font-sans leading-relaxed">
                    {office.address}
                  </p>
                </div>
                {office.link && (
                  <div className="pt-6 border-t border-surface-mid">
                    <a 
                      href={office.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-black uppercase tracking-widest text-amber hover:text-ink transition-colors flex items-center gap-1 group"
                    >
                      View on Google Maps &rarr;
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 — Quote Request Form (full 7-field version) */}
        <section className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="bg-white border border-surface-mid p-8 md:p-12 rounded-[2.5rem] shadow-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-ink tracking-tight mb-3">Request a Free Quote</h2>
              <p className="text-ink-muted text-base font-sans">
                Fill in your project details and we'll prepare a detailed quote within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-black text-emerald-900 text-2xl">Enquiry Submitted Successfully!</h3>
                <p className="text-emerald-800 text-base font-sans leading-relaxed max-w-lg mx-auto">
                  Thank you, <span className="font-bold">{formData.name}</span>! We have received your enquiry and our team will contact you within 2 business hours on <span className="font-bold">{formData.phone}</span>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="https://wa.me/919600067611?text=Hi%2C%20I%20am%20interested%20in%20your%20construction%20services.%20Please%20share%20a%20quote." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 uppercase tracking-wider text-xs shadow-md"
                  >
                    Urgent? WhatsApp Us Now
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        service: "",
                        location: "",
                        size: "",
                        message: ""
                      });
                    }}
                    className="border border-emerald-300 hover:border-emerald-500 text-emerald-700 font-bold py-4 px-8 rounded-xl transition-all duration-300 uppercase tracking-wider text-xs"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="full-name" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Name *</label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-surface-subtle border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2"
                    />
                  </div>
                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="phone-num" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Phone Number *</label>
                    <input
                      id="phone-num"
                      type="tel"
                      required
                      placeholder="+91XXXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-surface-subtle border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email-addr" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Email Address *</label>
                    <input
                      id="email-addr"
                      type="email"
                      required
                      placeholder="e.g. buyer@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-surface-subtle border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2"
                    />
                  </div>
                  {/* Service dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="service-select" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Service Interested In *</label>
                    <select
                      id="service-select"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-surface-subtle border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2"
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Project Location */}
                  <div className="space-y-2">
                    <label htmlFor="proj-loc" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Project Location / City *</label>
                    <input
                      id="proj-loc"
                      type="text"
                      required
                      placeholder="e.g. Sriperumbudur, Ambattur"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-surface-subtle border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2"
                    />
                  </div>
                  {/* Approximate Project Size */}
                  <div className="space-y-2">
                    <label htmlFor="proj-size" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Approximate Project Size</label>
                    <input
                      id="proj-size"
                      type="text"
                      placeholder="e.g. 5000 sq.ft or 1 acre"
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full bg-surface-subtle border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans focus-visible:outline focus-visible:outline-2"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="proj-details" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Message / Project Details</label>
                  <textarea
                    id="proj-details"
                    rows={4}
                    placeholder="Tell us about your project, timeline, and any specific requirements"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-surface-subtle border border-surface-mid px-5 py-4 rounded-xl focus:outline-none focus:border-amber focus:ring-4 focus:ring-amber/10 transition-all text-ink font-sans resize-none focus-visible:outline focus-visible:outline-2"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-carbon hover:bg-carbon-mid text-white font-black py-5 rounded-xl flex items-center justify-center gap-3 transition-all duration-500 shadow-xl uppercase tracking-widest text-sm focus-visible:outline focus-visible:outline-2"
                >
                  {isSubmitting ? "Sending..." : "Send My Quote Request →"}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* SECTION 5 — Google Maps Embed */}
        <section className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-ink mb-4 tracking-tight">
              Find Our Office
            </h2>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-2 border border-surface-mid group">
            <div className="relative rounded-[2rem] overflow-hidden w-full h-[400px] bg-surface-subtle">
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
        </section>

        {/* SECTION 6 — FAQ (3 questions for contact page) */}
        <section className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-ink mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-500 overflow-hidden ${
                  openFaqIndex === index 
                    ? 'border-amber/50 bg-surface-subtle shadow-lg scale-[1.01]' 
                    : 'border-surface-mid bg-white hover:border-amber/30 hover:shadow-md'
                }`}
              >
                <button 
                  className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none group"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className={`font-heading font-bold text-lg md:text-xl transition-colors duration-300 ${openFaqIndex === index ? 'text-ink' : 'text-ink-muted group-hover:text-ink'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500 shrink-0 ${openFaqIndex === index ? 'bg-amber text-carbon rotate-180' : 'bg-surface-subtle text-ink-muted'}`}>
                    {openFaqIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaqIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8">
                        <div className="h-px bg-surface-mid mb-6" />
                        <p className="text-ink-muted leading-relaxed text-base font-sans">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;
