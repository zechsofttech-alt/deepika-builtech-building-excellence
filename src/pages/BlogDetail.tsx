import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Share2, ChevronRight, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

// Mapping blogs to 2 relevant services for internal linking requirement
const blogServicesMap: Record<string, { title: string; slug: string }[]> = {
  "peb-vs-rcc-construction-cost-chennai": [
    { title: "PEB Building Structure", slug: "industrial-peb-construction-chennai" },
    { title: "Civil & Steel Construction", slug: "construction-services-in-chennai" }
  ],
  "industrial-building-approval-process-tamil-nadu": [
    { title: "Civil & Steel Construction", slug: "construction-services-in-chennai" },
    { title: "Industrial Shed Construction", slug: "industrial-shed-construction-chennai" }
  ],
  "warehouse-insulation-ventilation-chennai": [
    { title: "Warehouse Construction", slug: "warehouse-construction-chennai" },
    { title: "Cold Storage Solutions", slug: "cold-storage-solutions-chennai" }
  ],
  "mezzanine-floor-design-safety-standards": [
    { title: "Mezzanine Floor Construction", slug: "mezzanine-floor-construction-chennai" },
    { title: "Steel Structure Fabrication", slug: "steel-structure-fabrication-chennai" }
  ],
  "eot-crane-gantry-girder-calculations": [
    { title: "EOT Crane Installation", slug: "eot-crane-manufacturers-in-chennai" },
    { title: "Steel Structure Fabrication", slug: "steel-structure-fabrication-chennai" }
  ],
  "cold-storage-construction-cost-factors": [
    { title: "Cold Storage Solutions", slug: "cold-storage-solutions-chennai" },
    { title: "Warehouse Construction", slug: "warehouse-construction-chennai" }
  ],
  "pre-engineered-building-manufacturing-process": [
    { title: "PEB Building Structure", slug: "industrial-peb-construction-chennai" },
    { title: "Steel Structure Fabrication", slug: "steel-structure-fabrication-chennai" }
  ],
  "structural-steel-fabrication-quality-ndt": [
    { title: "Steel Structure Fabrication", slug: "steel-structure-fabrication-chennai" },
    { title: "PEB Building Structure", slug: "industrial-peb-construction-chennai" }
  ],
  "peb-multi-story-commercial-buildings": [
    { title: "Mezzanine Floor Construction", slug: "mezzanine-floor-construction-chennai" },
    { title: "Civil & Steel Construction", slug: "construction-services-in-chennai" }
  ],
  "preventive-maintenance-industrial-sheds": [
    { title: "Industrial Shed Construction", slug: "industrial-shed-construction-chennai" },
    { title: "PEB Building Structure", slug: "industrial-peb-construction-chennai" }
  ],
  "fire-safety-norms-industrial-warehouses": [
    { title: "Warehouse Construction", slug: "warehouse-construction-chennai" },
    { title: "Industrial Shed Construction", slug: "industrial-shed-construction-chennai" }
  ],
  "green-building-benefits-steel-peb": [
    { title: "PEB Building Structure", slug: "industrial-peb-construction-chennai" },
    { title: "Industrial Shed Construction", slug: "industrial-shed-construction-chennai" }
  ]
};

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <SEO 
          title="Article Not Found | Deepika Builtech" 
          description="The requested blog post was not found on our website."
          robots="noindex, follow"
        />
        <div className="text-center">
          <h1 className="text-4xl font-heading font-black mb-4">Article Not Found</h1>
          <Link to="/blogs" className="text-amber hover:underline">Back to Journal</Link>
        </div>
      </div>
    );
  }

  const linkedServices = blogServicesMap[post.slug] || [];

  const handleSidebarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formspreeEndpoint = "https://formspree.io/f/xvgooleq";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: `Newsletter/Enquiry from Blog: ${post.title}`
        })
      });

      if (response.ok) {
        setSubmitMessage("Subscription successful! Welcome aboard.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Submission failed.");
      }
    } catch (error) {
      // Fallback
      window.location.href = `mailto:info@deepikabuiltech.com?subject=Subscription&body=Email: ${formData.email}`;
      setSubmitMessage("Request processed via email.");
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
        "name": "Journal",
        "item": "https://www.deepikabuiltech.com/blogs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.deepikabuiltech.com/blog/${post.slug}`
      }
    ]
  };

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={post.metaTitle || `${post.title} | Deepika Builtech`} 
        description={post.metaDesc || post.excerpt} 
        ogImage={post.image}
      />
      
      {/* Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      <Navbar />
      
      {/* Article Header */}
      <section className="pt-40 pb-20 bg-surface-subtle border-b border-surface-mid">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: "Home", href: "/" },
              { label: "Journal", href: "/blogs" },
              { label: post.title }
            ]} />
          </div>
          <Link to="/blogs" className="inline-flex items-center gap-2 text-ink-muted hover:text-amber mb-12 transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber p-1">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Back to Journal</span>
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-6 mb-8 text-xs font-black uppercase tracking-widest text-amber">
              <span className="bg-amber/10 px-3 py-1 rounded-full">{post.category}</span>
              <div className="flex items-center gap-2 text-ink-muted">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-ink-muted">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-ink leading-[0.95] tracking-tighter mb-10">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 py-8 border-t border-surface-mid">
              <div className="w-12 h-12 rounded-full bg-carbon flex items-center justify-center text-white font-black">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-ink-muted mb-1">Written By</p>
                <p className="text-lg font-heading font-bold text-ink leading-none">{post.author}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-20">
            
            <div className="lg:col-span-8 space-y-16">
              <div className="aspect-video w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="prose prose-xl max-w-none text-ink-muted font-sans leading-relaxed whitespace-pre-line">
                {post.content}
              </div>

              {/* Related Services Links (Links to 2 Service Pages) */}
              <div className="bg-surface-subtle p-8 rounded-[2rem] border border-surface-mid">
                <h3 className="text-xs font-black uppercase tracking-wider text-ink-muted mb-4">Related Engineering Services</h3>
                <p className="text-sm text-ink-muted font-sans mb-6">Learn more about our design, fabrication, and erection capabilities in these sectors:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {linkedServices.map(s => (
                    <Link 
                      key={s.slug} 
                      to={`/${s.slug}`}
                      className="p-5 bg-white border border-surface-mid rounded-xl flex justify-between items-center hover:border-amber transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber"
                    >
                      <span className="text-sm font-bold text-ink group-hover:text-amber transition-colors">{s.title} Solutions</span>
                      <ChevronRight className="w-4 h-4 text-surface-mid group-hover:translate-x-1 group-hover:text-amber transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Inline FAQs Section */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="pt-12 border-t border-surface-mid space-y-8">
                  <h3 className="text-2xl font-heading font-black text-ink tracking-tight">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    {post.faqs.map((faq, idx) => (
                      <div key={idx} className="p-8 bg-surface-subtle border border-surface-mid rounded-2xl">
                        <h4 className="text-base font-heading font-bold text-ink mb-2 tracking-tight">{faq.question}</h4>
                        <p className="text-sm text-ink-muted leading-relaxed font-sans">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Get a Free Quote CTA Callout Box */}
              <div className="bg-amber p-10 lg:p-16 rounded-[2.5rem] shadow-xl text-carbon relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 blur-[120px]" />
                <h3 className="text-3xl font-heading font-black mb-4 tracking-tight">Looking to Build an Industrial Shed or Warehouse?</h3>
                <p className="text-carbon/80 font-sans mb-8 max-w-2xl leading-relaxed">
                  Partner with Deepika Builtech for high-precision turn-key PEB erection. Our engineering experts provide optimized material sizing and cost estimates.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-carbon hover:bg-black text-white font-black px-8 py-4 rounded-xl transition-colors uppercase tracking-wider text-xs shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-carbon"
                  >
                    Request an Engineering Quote
                  </Link>
                  <Link 
                    to="/services" 
                    className="border border-carbon/20 hover:border-carbon text-carbon font-black px-8 py-4 rounded-xl transition-all uppercase tracking-wider text-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-carbon"
                  >
                    View All Services
                  </Link>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-3">
                {post.tags.map(tag => (
                  <span key={tag} className="px-5 py-2 bg-surface-subtle border border-surface-mid rounded-full text-xs font-bold text-ink-muted hover:text-amber transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                {/* Share Card */}
                <div className="bg-carbon p-10 rounded-[2.5rem] text-white">
                  <h3 className="text-xl font-heading font-black mb-6 tracking-tight">Share Insights</h3>
                  <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-xl bg-white/5 hover:bg-amber hover:text-carbon transition-all flex items-center justify-center border border-white/10 p-2">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <p className="text-sm text-white/55 leading-snug">Distribute this technical knowledge with your engineering network.</p>
                  </div>
                </div>

                {/* Popular Articles ("You may also like") */}
                <div className="border border-surface-mid p-10 rounded-[2.5rem]">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-ink-muted mb-8">You May Also Like</h4>
                  <div className="space-y-8">
                    {blogPosts.filter(p => p.slug !== slug).slice(0, 3).map(p => (
                      <Link key={p.slug} to={`/blog/${p.slug}`} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded-sm p-1">
                        <span className="text-[10px] font-bold text-amber uppercase tracking-widest mb-2 block">{p.date}</span>
                        <h5 className="font-heading font-bold text-base text-ink group-hover:text-amber transition-colors leading-snug tracking-tight">
                          {p.title}
                        </h5>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Sidebar */}
                <div className="bg-surface-subtle p-10 rounded-[2.5rem] border border-surface-mid">
                  <h3 className="text-xl font-heading font-black text-ink mb-4 tracking-tight">Technical Newsletter</h3>
                  <p className="text-ink-muted text-sm mb-8">Quarterly insights on PEB fabrication & logistics structural trends.</p>
                  <form onSubmit={handleSidebarSubmit} className="space-y-4">
                    <input 
                      type="email" 
                      required
                      placeholder="Email Address" 
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-surface-mid p-4 rounded-xl focus:outline-none focus:border-amber transition-colors text-sm" 
                    />
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-amber text-carbon font-black py-4 rounded-xl hover:bg-carbon hover:text-white transition-all shadow-xl shadow-amber/10 text-xs uppercase tracking-wider"
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                    </button>
                    {submitMessage && (
                      <p className="text-xs font-bold text-center text-amber mt-2">{submitMessage}</p>
                    )}
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;
