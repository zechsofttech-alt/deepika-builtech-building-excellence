import { useParams, Link, useLocation } from "react-router-dom";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronRight, Phone, MapPin, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

// Google Maps embeds based on location/unit proximity
const mapEmbeds: Record<string, string> = {
  "peb-construction-ambattur": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31093.578663851578!2d80.14251268489725!3d13.086708682087574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263ee8d3369a3%3A0xc3cf93eb5a5360fb!2sSIDCO%20Industrial%20Estate%2C%20Ambattur%2C%20Chennai%2C%20Tamil%20Nadu%20600098!5e0!3m2!1sen!2sin!4v1713780000000!5m2!1sen!2sin",
  "peb-construction-sriperumbudur": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62226.79093356877!2d79.91494883477169!3d12.960682283995874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cc2b0f44dd7%3A0xcb1ba04889c25ffb!2sSriperumbudur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713800000000!5m2!1sen!2sin",
  "peb-construction-kanchipuram": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62261.272186985794!2d79.6749969446869!3d12.83416954203112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c257ca6b8bf3%3A0x6e8f495dc89fa086!2sKanchipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713810000000!5m2!1sen!2sin",
  "peb-construction-thiruvallur": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62151.70617300762!2d79.87877237937968!3d13.132034947702462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52a32ec4221199%3A0xfa9180c437a3465!2sThiruvallur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713820000000!5m2!1sen!2sin",
  "peb-construction-tambaram": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62215.11210214878!2d80.08253139366523!3d12.927230489957388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f69c55b7217%3A0xe541c4a03ee7a6db!2sTambaram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713830000000!5m2!1sen!2sin",
  "peb-construction-oragadam": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.378953158913!2d79.95751917592472!3d12.882103587424673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4477c7ccfcf%3A0xc3cf93eb5a5360fc!2sOragadam%20Industrial%20Corridor!5e0!3m2!1sen!2sin!4v1713840000000!5m2!1sen!2sin",
  "peb-construction-chennai-port": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1368940899015!2d80.28723227592751!3d13.090518787235882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f588c874f63%3A0xe1009e4fb90e82!2sChennai%20Port!5e0!3m2!1sen!2sin!4v1713850000000!5m2!1sen!2sin",
  "peb-construction-hosur": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62282.802104085794!2d77.7854619446869!3d12.73816954203112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae713f044bb74b%3A0x6e8f495dc89fa086!2sHosur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713860000000!5m2!1sen!2sin"
};

const LocationDetail = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();

  // Match either route param or direct URL path
  const currentSlug = slug || pathname.replace(/^\//, "").replace(/\/$/, "");
  const locationProfile = locations.find((l) => l.slug === currentSlug);

  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!locationProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <SEO 
          title="Location Not Found | Deepika Builtech" 
          description="The requested geographic office or service location was not found."
          robots="noindex, follow"
        />
        <div className="text-center">
          <h1 className="text-4xl font-heading font-black mb-4">Location Not Found</h1>
          <Link to="/" className="text-amber hover:underline p-2">Back to Home</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formspreeEndpoint = "https://formspree.io/f/xvgooleq";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source_location: locationProfile.name,
          subject: `New Location Quote Request — ${locationProfile.name} — deepikabuiltech.com`
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Form submission failed.");
      }
    } catch (error) {
      const subject = encodeURIComponent(`Project Quote for ${locationProfile.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}\nService: ${formData.service}\nLocation: ${locationProfile.name}`);
      window.location.href = `mailto:infoadmin@deepikabuiltech.in?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.deepikabuiltech.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `PEB Construction in ${locationProfile.name}`,
        "item": `https://www.deepikabuiltech.com/location/${locationProfile.slug}`
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Deepika Builtech - ${locationProfile.name} Office`,
    "image": "https://www.deepikabuiltech.com/assets/peb-building.jpg",
    "telephone": "+91 96000 67611",
    "email": "infoadmin@deepikabuiltech.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "New No. 31, 31A, Old No.14, 15, Coromandal Town, SIDCO Industrial Estate, Ambattur",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600098",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Place",
      "name": `${locationProfile.name}, Tamil Nadu`
    },
    "url": `https://www.deepikabuiltech.com/location/${locationProfile.slug}`
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": locationProfile.faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-surface">
      <SEO 
        title={locationProfile.metaTitle} 
        description={locationProfile.metaDesc} 
        ogImage={locationProfile.image}
      />
      
      {/* Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <Navbar />

      {/* 1. Hero Zone */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-carbon text-white">
        <div className="absolute inset-0 opacity-15">
          <picture>
            <source srcSet={locationProfile.webpImage} type="image/webp" />
            <img 
              src={locationProfile.image} 
              alt={`Industrial PEB Erection in ${locationProfile.name} by Deepika Builtech`} 
              width="1920"
              height="600"
              loading="eager"
              {...{ fetchpriority: "high" }}
              className="w-full h-full object-cover grayscale"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <span className="text-xs font-black uppercase tracking-widest text-amber mb-4 block">
              Geographic Presence & Turnkey Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-black leading-tight tracking-tight mb-6">
              {locationProfile.h1}
            </h1>
            <p className="text-lg md:text-xl text-surface-subtle font-sans leading-relaxed mb-10">
              {locationProfile.subheading}
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#quote-form" 
                className="bg-amber hover:bg-white text-carbon font-black px-8 py-4 rounded-xl transition-all duration-300 uppercase tracking-wider text-xs shadow-xl shadow-amber/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
              >
                Start Your Project
              </a>
              <a 
                href="#showcase" 
                className="border border-white/20 hover:border-amber text-white font-black px-8 py-4 rounded-xl transition-all duration-300 uppercase tracking-wider text-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                View Showcase
              </a>
            </div>
            
            {/* Trust Anchor Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4 text-xs font-black uppercase tracking-wider text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber" /> ISO 9001:2015 Certified Manufacturing
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber" /> 150+ Projects Erected
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Widget */}
      <Breadcrumbs 
        items={[
          { label: "Locations", href: "/" },
          { label: locationProfile.name }
        ]} 
      />

      <main id="content" className="py-24 space-y-24">
        {/* 2. Location Context Section */}
        <section className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-ink tracking-tight">
                Engineering Custom Pre-Engineered Steel Structures in {locationProfile.name}
              </h2>
              <div className="prose prose-lg text-ink-muted leading-relaxed font-sans">
                <p className="whitespace-pre-line">{locationProfile.intro}</p>
              </div>
            </div>
            {/* 4. Local Business Statistics */}
            <div className="lg:col-span-5 bg-surface-subtle border border-surface-mid p-10 rounded-[2.5rem] grid gap-6">
              <h3 className="text-sm font-black uppercase tracking-wider text-ink-muted border-b border-surface-mid pb-4">
                Local Presence Metrics
              </h3>
              {locationProfile.stats.map(stat => (
                <div key={stat.label} className="flex justify-between items-center border-b border-surface-mid/50 pb-4 last:border-0 last:pb-0">
                  <span className="text-xs font-bold text-ink-muted uppercase tracking-wider">{stat.label}</span>
                  <span className="text-2xl font-heading font-black text-amber">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Services Grid in Location */}
        <section className="bg-surface-subtle border-y border-surface-mid py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-heading font-black text-ink mb-4 tracking-tight">
                Our Services in {locationProfile.name}
              </h2>
              <p className="text-ink-muted font-sans">
                From foundation excavation to structural framing, we provide complete turnkey PEB construction services.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(s => (
                <Link 
                  key={s.slug} 
                  to={`/${s.slug}`} 
                  className="p-6 bg-white border border-surface-mid rounded-2xl shadow-sm hover:border-amber/40 hover:shadow-lg transition-all group focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
                >
                  <h3 className="text-base font-heading font-bold text-ink mb-2 group-hover:text-amber transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed font-sans mb-4">
                    {s.shortDesc}
                  </p>
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber inline-flex items-center gap-1">
                    Explore Solution <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Project Showcase Cards */}
        <section id="showcase" className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-heading font-black text-ink tracking-tight mb-2">
                Project Showcase in {locationProfile.name}
              </h2>
              <p className="text-ink-muted font-sans text-sm">
                Engineering marvels fabricated and erected by Deepika Builtech in this corridor.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {locationProfile.projects.map(proj => (
              <div key={proj.title} className="border border-surface-mid p-8 rounded-[2.5rem] bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber mb-2 block">{proj.industry}</span>
                <h3 className="text-xl font-heading font-bold text-ink mb-4 tracking-tight">{proj.title}</h3>
                <div className="grid grid-cols-2 gap-4 text-xs font-sans text-ink-muted pt-4 border-t border-surface-mid">
                  <div>
                    <span className="block font-bold text-ink-muted/60 uppercase text-[9px] tracking-wider mb-1">Erection Year</span>
                    <span className="font-bold text-ink">{proj.year}</span>
                  </div>
                  <div>
                    <span className="block font-bold text-ink-muted/60 uppercase text-[9px] tracking-wider mb-1">Total Coverage</span>
                    <span className="font-bold text-ink">{proj.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. FAQ Section */}
        <section className="bg-surface-subtle py-24 border-y border-surface-mid">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <h2 className="text-3xl font-heading font-black text-ink mb-12 text-center tracking-tight">
              Frequently Asked Questions - {locationProfile.name}
            </h2>
            <div className="space-y-6">
              {locationProfile.faqs.map((faq, idx) => (
                <div key={idx} className="p-8 bg-white border border-surface-mid rounded-3xl shadow-sm">
                  <h3 className="text-lg font-heading font-bold text-ink mb-2 tracking-tight">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Quote Form & 8. Google Maps Embed */}
        <section id="quote-form" className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Form */}
            <div className="lg:col-span-7 bg-white border border-surface-mid p-10 lg:p-16 rounded-[2.5rem] shadow-xl">
              <h2 className="text-3xl font-heading font-black text-ink mb-2 tracking-tight">Request an Engineering Quote</h2>
              <p className="text-ink-muted font-sans mb-8">Get custom project pricing for pre-engineered steel buildings in {locationProfile.name}.</p>
              
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
                      WhatsApp Us Now
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", phone: "", service: "", message: "" });
                      }}
                      className="border border-emerald-300 hover:border-emerald-500 text-emerald-700 font-bold py-4 px-8 rounded-xl transition-all duration-300 uppercase tracking-wider text-xs"
                    >
                      Send another request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="form-name" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Name *</label>
                      <input 
                        id="form-name"
                        type="text" 
                        required 
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-surface-subtle border border-surface-mid p-4 rounded-xl focus:outline-none focus:border-amber transition-colors font-sans text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="form-phone" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Phone Number *</label>
                      <input 
                        id="form-phone"
                        type="tel" 
                        required 
                        placeholder="+91XXXXXXXXXX"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-surface-subtle border border-surface-mid p-4 rounded-xl focus:outline-none focus:border-amber transition-colors font-sans text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="form-service" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Service Interested In *</label>
                    <select
                      id="form-service"
                      required
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-surface-subtle border border-surface-mid p-4 rounded-xl focus:outline-none focus:border-amber transition-colors font-sans text-sm"
                    >
                      <option value="">Select a service...</option>
                      <option value="PEB Building Structure">PEB Building Structure</option>
                      <option value="Civil & Steel Construction">Civil & Steel Construction</option>
                      <option value="Cold Storage Construction">Cold Storage Construction</option>
                      <option value="Mezzanine Floor">Mezzanine Floor</option>
                      <option value="Warehouse Construction">Warehouse Construction</option>
                      <option value="EOT Cranes">EOT Cranes</option>
                      <option value="Steel Structure Fabrication">Steel Structure Fabrication</option>
                      <option value="Industrial Shed Construction">Industrial Shed Construction</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="form-message" className="text-xs font-semibold uppercase tracking-wider text-ink-muted block">Message</label>
                    <textarea 
                      id="form-message"
                      rows={4} 
                      placeholder="Tell us about your project, timeline, and any specific requirements"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-surface-subtle border border-surface-mid p-4 rounded-xl focus:outline-none focus:border-amber transition-colors font-sans text-sm resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-carbon hover:bg-carbon-mid text-white font-black py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest text-xs shadow-lg"
                  >
                    {isSubmitting ? "Submitting..." : "Send My Quote Request →"}
                  </button>
                </form>
              )}
            </div>
            
            {/* Map */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-surface-mid rounded-[2.5rem] overflow-hidden aspect-square shadow-xl relative group">
                <iframe
                  src={mapEmbeds[locationProfile.slug]}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Google Maps location in ${locationProfile.name}`}
                  className="w-full h-full grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 object-cover"
                ></iframe>
              </div>
              <div className="p-8 bg-surface-subtle border border-surface-mid rounded-[2rem]">
                <h4 className="text-xs font-black uppercase tracking-wider text-ink mb-2">Driving Directions Note</h4>
                <p className="text-xs text-ink-muted leading-relaxed font-sans">
                  Visiting our workspace? Drop by our Corporate office in SIDCO Ambattur, or coordinates at Kanchipuram and Thiruvallur manufacturing sites. Use NH-48 or GST corridors for convenient truck logistics or site meetings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Related Nearby Locations */}
        <section className="container mx-auto px-6 lg:px-12 border-t border-surface-mid pt-16">
          <h2 className="text-xs font-black uppercase tracking-[0.25em] text-ink-muted mb-8">Other Regions Served</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {locationProfile.nearbySlugs.map(ns => {
              const nearby = locations.find(l => l.slug === ns);
              if (!nearby) return null;
              return (
                <Link 
                  key={nearby.slug} 
                  to={`/location/${nearby.slug}`} 
                  className="flex items-center justify-between p-6 bg-white border border-surface-mid rounded-xl hover:border-amber transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
                >
                  <span className="text-sm font-bold text-ink group-hover:text-amber transition-colors">{nearby.name}</span>
                  <ChevronRight className="w-4 h-4 text-surface-mid group-hover:text-amber transition-transform group-hover:translate-x-1" />
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LocationDetail;
