import { useParams, Link, useLocation } from "react-router-dom";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronRight, Phone, Send, MapPin, Mail, Clock } from "lucide-react";
import { useState, useEffect } from "react";

// Explicit SEO Meta Content mapping for 100/100 target for all 8 services
const seoContent: Record<string, { title: string; description: string; h1: string }> = {
  "industrial-peb-construction-chennai": {
    title: "Industrial PEB Construction in Chennai | Deepika Builtech",
    description: "Looking for PEB construction in Chennai? Deepika Builtech delivers precision pre-engineered steel buildings for factories, warehouses & industrial units. 10+ years experience. Call +91 96000 67611.",
    h1: "Industrial PEB Construction in Chennai"
  },
  "construction-services-in-chennai": {
    title: "Civil & Steel Construction Services in Chennai | Deepika Builtech",
    description: "Expert civil and steel construction services in Chennai by Deepika Builtech. We build factories, industrial units, commercial structures across Tamil Nadu. Free quote: +91 96000 67611.",
    h1: "Civil & Steel Construction Services in Chennai"
  },
  "cold-storage-solutions-chennai": {
    title: "Cold Storage Construction & Solutions in Chennai | Deepika Builtech",
    description: "Build a reliable cold storage facility in Chennai with Deepika Builtech. Custom temperature-controlled storage for pharma, food & logistics. Call +91 96000 67611.",
    h1: "Cold Storage Construction & Solutions in Chennai"
  },
  "mezzanine-floor-construction-chennai": {
    title: "Mezzanine Floor Construction in Chennai | Deepika Builtech",
    description: "Maximise your floor space with a custom steel mezzanine floor in Chennai. Deepika Builtech designs and installs industrial mezzanines. Call +91 96000 67611.",
    h1: "Mezzanine Floor Construction in Chennai"
  },
  "warehouse-construction-chennai": {
    title: "Warehouse Construction & Design in Chennai | Deepika Builtech",
    description: "Build your warehouse in Chennai faster and cheaper with PEB technology. Deepika Builtech has completed 150+ warehouse and industrial projects. Call +91 96000 67611.",
    h1: "Warehouse Construction & Design in Chennai"
  },
  "eot-crane-manufacturers-in-chennai": {
    title: "EOT Crane Manufacturers & Suppliers in Chennai | Deepika Builtech",
    description: "Deepika Builtech manufactures and installs Electric Overhead Travelling (EOT) cranes in Chennai. Custom capacity, span & duty class. Call +91 96000 67611.",
    h1: "EOT Crane Manufacturers in Chennai"
  },
  "steel-structure-fabrication-chennai": {
    title: "Steel Structure Fabrication & Erection in Chennai | Deepika Builtech",
    description: "Precision structural steel fabrication in Chennai using CNC machinery, MIG, MAG & submerged arc welding. Deepika Builtech — trusted by 100+ clients. Call +91 96000 67611.",
    h1: "Steel Structure Fabrication in Chennai"
  },
  "industrial-shed-construction-chennai": {
    title: "Industrial Shed Construction in Chennai | Deepika Builtech",
    description: "Custom industrial shed construction in Chennai using pre-engineered steel. Fast delivery, durable, cost-effective. Deepika Builtech — 10+ years. Call +91 96000 67611.",
    h1: "Industrial Shed Construction in Chennai"
  }
};

// Internal linking configurations: 3 locations per service
const serviceLocationsMap: Record<string, { name: string; slug: string }[]> = {
  "industrial-peb-construction-chennai": [
    { name: "Ambattur", slug: "peb-construction-ambattur" },
    { name: "Sriperumbudur", slug: "peb-construction-sriperumbudur" },
    { name: "Oragadam", slug: "peb-construction-oragadam" }
  ],
  "construction-services-in-chennai": [
    { name: "Kanchipuram", slug: "peb-construction-kanchipuram" },
    { name: "Thiruvallur", slug: "peb-construction-thiruvallur" },
    { name: "Tambaram", slug: "peb-construction-tambaram" }
  ],
  "cold-storage-solutions-chennai": [
    { name: "Chennai Port", slug: "peb-construction-chennai-port" },
    { name: "Sriperumbudur", slug: "peb-construction-sriperumbudur" },
    { name: "Hosur", slug: "peb-construction-hosur" }
  ],
  "mezzanine-floor-construction-chennai": [
    { name: "Ambattur", slug: "peb-construction-ambattur" },
    { name: "Tambaram", slug: "peb-construction-tambaram" },
    { name: "Kanchipuram", slug: "peb-construction-kanchipuram" }
  ],
  "warehouse-construction-chennai": [
    { name: "Sriperumbudur", slug: "peb-construction-sriperumbudur" },
    { name: "Oragadam", slug: "peb-construction-oragadam" },
    { name: "Thiruvallur", slug: "peb-construction-thiruvallur" }
  ],
  "eot-crane-manufacturers-in-chennai": [
    { name: "Oragadam", slug: "peb-construction-oragadam" },
    { name: "Ambattur", slug: "peb-construction-ambattur" },
    { name: "Hosur", slug: "peb-construction-hosur" }
  ],
  "steel-structure-fabrication-chennai": [
    { name: "Ambattur", slug: "peb-construction-ambattur" },
    { name: "Kanchipuram", slug: "peb-construction-kanchipuram" },
    { name: "Thiruvallur", slug: "peb-construction-thiruvallur" }
  ],
  "industrial-shed-construction-chennai": [
    { name: "Sriperumbudur", slug: "peb-construction-sriperumbudur" },
    { name: "Oragadam", slug: "peb-construction-oragadam" },
    { name: "Tambaram", slug: "peb-construction-tambaram" }
  ]
};

// Internal linking configurations: 2 blogs per service
const serviceBlogsMap: Record<string, { title: string; slug: string }[]> = {
  "industrial-peb-construction-chennai": [
    { title: "PEB vs RCC Cost Comparison", slug: "peb-vs-rcc-construction-cost-chennai" },
    { title: "The Step-by-Step PEB Manufacturing Process", slug: "pre-engineered-building-manufacturing-process" }
  ],
  "construction-services-in-chennai": [
    { title: "PEB vs RCC Cost Comparison", slug: "peb-vs-rcc-construction-cost-chennai" },
    { title: "Step-by-Step Industrial Approval Process", slug: "industrial-building-approval-process-tamil-nadu" }
  ],
  "cold-storage-solutions-chennai": [
    { title: "Cold Storage Construction Cost Factors", slug: "cold-storage-construction-cost-factors" },
    { title: "Warehouse Insulation & Ventilation Design", slug: "warehouse-insulation-ventilation-chennai" }
  ],
  "mezzanine-floor-construction-chennai": [
    { title: "Mezzanine Floor Design and Safety Standards", slug: "mezzanine-floor-design-safety-standards" },
    { title: "PEB for Commercial Showrooms & Multi-Story Units", slug: "peb-multi-story-commercial-buildings" }
  ],
  "warehouse-construction-chennai": [
    { title: "Warehouse Insulation & Ventilation Design", slug: "warehouse-insulation-ventilation-chennai" },
    { title: "Fire Safety Norms in Industrial Warehouses", slug: "fire-safety-norms-industrial-warehouses" }
  ],
  "eot-crane-manufacturers-in-chennai": [
    { title: "EOT Crane Gantry Girder Design and Calculations", slug: "eot-crane-gantry-girder-calculations" },
    { title: "Structural Steel Fabrication Quality Control and NDT", slug: "structural-steel-fabrication-quality-ndt" }
  ],
  "steel-structure-fabrication-chennai": [
    { title: "Structural Steel Fabrication Quality Control and NDT", slug: "structural-steel-fabrication-quality-ndt" },
    { title: "The Step-by-Step PEB Manufacturing Process", slug: "pre-engineered-building-manufacturing-process" }
  ],
  "industrial-shed-construction-chennai": [
    { title: "Preventive Maintenance Checklist for Industrial Sheds", slug: "preventive-maintenance-industrial-sheds" },
    { title: "Green Building Benefits of Pre-Engineered Steel", slug: "green-building-benefits-steel-peb" }
  ]
};

const serviceTestimonialsMap: Record<string, { quote: string; name: string; designation: string; company: string; city: string }> = {
  "industrial-peb-construction-chennai": {
    name: "Mr. K. Jayaraman",
    designation: "Managing Director",
    company: "Jayaraman Auto Components",
    city: "Kanchipuram",
    quote: "Deepika Builtech delivered an outstanding PEB steel structure for our manufacturing facility in Kanchipuram. The entire design, fabrication, and erection process was handled with extreme professionalism and completed exactly on our tight schedule."
  },
  "construction-services-in-chennai": {
    name: "Mr. Rajesh Kumar",
    designation: "Head of Operations",
    company: "RK Logistics & Warehousing",
    city: "Chennai",
    quote: "We contracted Deepika Builtech for our new 80,000 sq.ft logistics warehouse in Chennai. The column-free structural layout and heavy-duty VDF flooring they built have significantly optimized our daily operations. Their PEB expertise is truly top-notch."
  },
  "cold-storage-solutions-chennai": {
    name: "Mr. S. Vignesh",
    designation: "Technical Director",
    company: "Southern Cold Chain Solutions",
    city: "Ambattur",
    quote: "The thermal efficiency and structural integrity of our cold storage complex in Ambattur are excellent. Deepika Builtech perfectly integrated the thick PIR insulation panels and dynamic framing, proving themselves as the best industrial builders in Chennai."
  },
  "mezzanine-floor-construction-chennai": {
    name: "Mr. T. N. Venkatesan",
    designation: "Plant Manager",
    company: "Alpha Precision Tools",
    city: "Chennai",
    quote: "The structural steel mezzanine floor built by Deepika Builtech has doubled our workshop floor space. Erection was completed within 3 weeks with zero disruption to our ongoing assembly lines. A highly professional engineering team."
  },
  "warehouse-construction-chennai": {
    name: "Mr. M. R. Swaminathan",
    designation: "VP Supply Chain",
    company: "Greenways Agro Logistics",
    city: "Sriperumbudur",
    quote: "Our new logistics warehouse in Sriperumbudur has exceeded all expectations in terms of ventilation and floor flatwear. Deepika Builtech delivered a premium PEB warehouse under budget and ahead of time. Highly recommend their warehouse construction services."
  },
  "eot-crane-manufacturers-in-chennai": {
    name: "Mr. D. Christopher",
    designation: "Chief Engineer",
    company: "Apex Heavy Castings",
    city: "Oragadam",
    quote: "Deepika Builtech manufactured and erected a 25-ton double-girder EOT crane and runways for our foundry. Runway alignment is incredibly precise, and the crane runs smoothly under heavy loads daily. Their crane engineering expertise is exceptional."
  },
  "steel-structure-fabrication-chennai": {
    name: "Mr. A. B. Rahman",
    designation: "Director",
    company: "Chennai Heavy Fabricators",
    city: "Ambattur",
    quote: "We regularly outsource our heavy steel structure fabrication to Deepika Builtech. Their CNC cutting accuracy, SAW weld quality, and shot-blasting standards are exemplary. The best fabrication partner in Tamil Nadu."
  },
  "industrial-shed-construction-chennai": {
    name: "Mr. G. Muthuvel",
    designation: "Managing Director",
    company: "Muthuvel Engineering Works",
    city: "Thiruvallur",
    quote: "Deepika Builtech constructed our pre-engineered industrial shed in Thiruvallur. The shed has withstood heavy monsoon rains and high coastal winds with zero issues. Their speed of erection and structural design quality are top-notch."
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();

  // Match either route param or direct URL path
  const currentSlug = slug || pathname.replace(/^\//, "").replace(/\/$/, "");
  const service = services.find((s) => s.slug === currentSlug);

  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (service) {
      setFormData(prev => ({ ...prev, service: service.title }));
    }
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <SEO 
          title="Service Not Found | Deepika Builtech" 
          description="The requested pre-engineered building or construction service is not available."
          robots="noindex, follow"
        />
        <div className="text-center">
          <h1 className="text-4xl font-heading font-black mb-4">Service Not Found</h1>
          <Link to="/" className="text-amber hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber p-2">Back to Home</Link>
        </div>
      </div>
    );
  }

  const meta = seoContent[service.slug] || {
    title: `${service.title} | Deepika Builtech`,
    description: service.shortDesc,
    h1: service.title
  };

  const linkedLocations = serviceLocationsMap[service.slug] || [];
  const linkedBlogs = serviceBlogsMap[service.slug] || [];

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
          subject: `New Quote Request — ${formData.service} — deepikabuiltech.com`
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Form submission failed.");
      }
    } catch (error) {
      const subject = encodeURIComponent(`Project Quote for ${service.title}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}\nService: ${formData.service}`);
      window.location.href = `mailto:infoadmin@deepikabuiltech.com?subject=${subject}&body=${body}`;
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
        "name": service.title,
        "item": `https://www.deepikabuiltech.com/${service.slug}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(f => ({
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
        title={meta.title} 
        description={meta.description} 
        ogImage={service.image}
      />
      
      {/* Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-carbon text-white">
        <div className="absolute inset-0 opacity-15">
          <picture>
            <source srcSet={service.webpImage} type="image/webp" />
            <img 
              src={service.image} 
              alt={`Industrial service: ${service.title} by Deepika Builtech`} 
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
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-surface-mid hover:text-amber mb-8 transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Back to Solutions</span>
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-heading font-black leading-tight tracking-tight mb-6">
              {meta.h1}
            </h1>
            <p className="text-lg md:text-xl text-surface-subtle font-sans leading-relaxed mb-10">
              {service.subheading}
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#quote-form" 
                className="bg-amber hover:bg-white text-carbon font-black px-8 py-4 rounded-xl transition-all duration-300 uppercase tracking-wider text-xs shadow-xl shadow-amber/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
              >
                Request an Engineering Quote
              </a>
              <Link 
                to="/projects" 
                className="border border-white/20 hover:border-amber text-white font-black px-8 py-4 rounded-xl transition-all duration-300 uppercase tracking-wider text-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                View Completed Projects
              </Link>
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

      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: "Services", href: "/services" },
          { label: service.title }
        ]} 
      />

      <main id="content" className="py-24 space-y-24">
        
        {/* 2. Intro Paragraphs & Location/Blog Internal Linking */}
        <section className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-3xl font-heading font-black text-ink tracking-tight">Overview & Capabilities</h2>
              <div className="prose prose-lg text-ink-muted leading-relaxed font-sans">
                <p className="whitespace-pre-line">{service.fullDesc}</p>
              </div>
            </div>
            
            {/* Sidebar for Dynamic Cross-Linking */}
            <div className="lg:col-span-4 space-y-8 bg-surface-subtle p-8 rounded-[2rem] border border-surface-mid">
              {/* Linked Locations (3 Locations served) */}
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-ink-muted border-b border-surface-mid pb-2">
                  Locations We Serve
                </h3>
                <p className="text-xs text-ink-muted font-sans leading-relaxed">
                  We erect high-precision steel buildings in key Tamil Nadu corridors including:
                </p>
                <div className="flex flex-col gap-2">
                  {linkedLocations.map(loc => (
                    <Link 
                      key={loc.slug} 
                      to={`/location/${loc.slug}`}
                      className="text-sm font-bold text-ink hover:text-amber transition-colors flex items-center gap-1 group"
                    >
                      <span className="underline">{loc.name} Industrial Sector</span>
                      <ChevronRight className="w-3.5 h-3.5 text-surface-mid group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Linked Blogs (2 Recommended articles) */}
              <div className="space-y-4 pt-4 border-t border-surface-mid">
                <h3 className="text-xs font-black uppercase tracking-wider text-ink-muted border-b border-surface-mid pb-2">
                  Technical Resources
                </h3>
                <p className="text-xs text-ink-muted font-sans leading-relaxed">
                  Read our cost engineering and design insights:
                </p>
                <div className="flex flex-col gap-3">
                  {linkedBlogs.map(blog => (
                    <Link 
                      key={blog.slug} 
                      to={`/blog/${blog.slug}`}
                      className="text-xs font-bold text-ink hover:text-amber transition-colors leading-snug block hover:underline"
                    >
                      {blog.title} &rarr;
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What We Offer (Features Grid) */}
        <section className="bg-surface-subtle border-y border-surface-mid py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-heading font-black text-ink mb-12 tracking-tight text-center">
              Key Benefits & Advantages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {service.features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.title}
                    className="p-8 bg-white border border-surface-mid rounded-2xl group hover:border-amber/30 transition-all shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-surface-subtle border border-surface-mid flex items-center justify-center mb-6 group-hover:bg-amber transition-colors">
                      <Icon className="w-5 h-5 text-amber group-hover:text-carbon transition-colors" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-ink mb-3 tracking-tight">{feature.title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed font-sans">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Why Choose Deepika Builtech (3 Columns) */}
        <section className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-heading font-black text-ink mb-12 tracking-tight text-center">
            Why Choose Deepika Builtech
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {service.whyChoose.map((wc, idx) => (
              <div key={idx} className="p-8 border border-surface-mid rounded-[2.5rem] bg-white relative">
                <span className="absolute top-6 right-8 text-6xl font-heading font-black text-surface-mid/20">0{idx + 1}</span>
                <h3 className="text-xl font-heading font-bold text-ink mb-4 tracking-tight pr-10">{wc.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed font-sans">{wc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specifications Callout */}
        <section className="container mx-auto px-6 lg:px-12">
          <div className="bg-carbon p-10 lg:p-16 rounded-[2.5rem] text-white overflow-hidden relative shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber opacity-5 blur-[120px]" />
            <h2 className="text-3xl font-heading font-black mb-12 tracking-tight">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
              {service.specs.map((spec) => (
                <div key={spec.label} className="flex flex-col border-b border-white/10 pb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">{spec.label}</span>
                  <span className="text-xl font-heading font-bold text-white">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Process Steps (5-Step Timeline) */}
        <section className="bg-surface-subtle py-24 border-y border-surface-mid">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-heading font-black text-ink mb-16 tracking-tight text-center">
              Our Step-by-Step Erection Process
            </h2>
            <div className="grid md:grid-cols-5 gap-8">
              {service.process.map((step) => (
                <div key={step.number} className="relative space-y-4">
                  <div className="w-12 h-12 rounded-full bg-amber text-carbon flex items-center justify-center font-heading font-black text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-base font-heading font-bold text-ink tracking-tight">{step.title}</h3>
                  <p className="text-xs text-ink-muted leading-relaxed font-sans">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {(() => {
          const testimonial = serviceTestimonialsMap[service.slug];
          if (!testimonial) return null;
          return (
            <section className="container mx-auto px-6 lg:px-12 max-w-2xl">
              <h2 className="text-3xl font-heading font-black text-ink mb-12 text-center tracking-tight">
                What Our Clients Say
              </h2>
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <blockquote>
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                <div className="client-info">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.designation} — {testimonial.company}, {testimonial.city}</span>
                </div>
              </div>
            </section>
          );
        })()}

        {/* 6. FAQ Section */}
        <section className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h2 className="text-3xl font-heading font-black text-ink mb-12 text-center tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq, idx) => (
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
        </section>

        {/* 7. Quote Form */}
        <section id="quote-form" className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="bg-white border border-surface-mid p-10 lg:p-16 rounded-[2.5rem] shadow-xl">
            <h2 className="text-3xl font-heading font-black text-ink mb-2 tracking-tight text-center">Request an Engineering Quote</h2>
            <p className="text-ink-muted font-sans mb-8 text-center">Get structural sizing and pricing calculations from our technical team.</p>
            
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
                      setFormData({ name: "", phone: "", service: service?.title || "", message: "" });
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
        </section>

        {/* 8. Related Services (3 Cards) */}
        <section className="container mx-auto px-6 lg:px-12 border-t border-surface-mid pt-16">
          <h2 className="text-xs font-black uppercase tracking-[0.25em] text-ink-muted mb-8">Related Engineering Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.filter(s => s.slug !== service.slug).slice(0, 3).map(s => (
              <Link 
                key={s.slug} 
                to={`/${s.slug}`} 
                className="p-6 bg-white border border-surface-mid rounded-2xl shadow-sm hover:border-amber hover:shadow-lg transition-all group focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
              >
                <h3 className="text-base font-heading font-bold text-ink mb-2 group-hover:text-amber transition-colors">{s.title}</h3>
                <p className="text-xs text-ink-muted leading-relaxed font-sans mb-4">{s.shortDesc}</p>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber inline-flex items-center gap-1">
                  View Specifications <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* 9. NAP Footer */}
        <section className="container mx-auto px-6 lg:px-12 border-t border-surface-mid pt-16">
          <div className="grid md:grid-cols-4 gap-8 bg-surface-subtle p-10 rounded-[2.5rem] border border-surface-mid">
            <div className="space-y-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-ink">Deepika Builtech</h4>
              <p className="text-xs text-ink-muted leading-relaxed font-sans">
                Engineering precision steel buildings, factories, and warehouses across South India since 2015.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[9px] font-black uppercase tracking-widest text-ink-muted block">Corporate HQ</span>
              <p className="text-xs text-ink font-bold flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber shrink-0" />
                <span>New No. 31, 31A, Old No.14, 15, Coromandal Town, SIDCO Industrial Estate, Ambattur, Chennai - 600098</span>
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[9px] font-black uppercase tracking-widest text-ink-muted block">Connect Directly</span>
              <p className="text-xs text-ink font-bold flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber" />
                <span>+91 96000 67611</span>
              </p>
              <p className="text-xs text-ink font-bold flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber" />
                <span>infoadmin@deepikabuiltech.com</span>
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[9px] font-black uppercase tracking-widest text-ink-muted block">Certifications</span>
              <p className="text-xs text-ink font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber" />
                <span>ISO 9001:2015 Certified</span>
              </p>
              <p className="text-xs text-ink font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber" />
                <span>Excellence Award (2025)</span>
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;


