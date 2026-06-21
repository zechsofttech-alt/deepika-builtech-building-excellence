"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";
import { ArrowUpRight } from "lucide-react";

export default function BlogsPageClient() {
  const [sidebarForm, setSidebarForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleSidebarFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    const formspreeEndpoint = "https://formspree.io/f/xvgooleq";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...sidebarForm,
          subject: `Blogs Sidebar Quote Request — ${sidebarForm.service} — deepikabuiltech.com`
        })
      });

      if (response.ok) {
        setFormStatus(`Thank you, ${sidebarForm.name}! We have received your enquiry and will contact you within 2 business hours.`);
        setSidebarForm({ name: "", phone: "", service: "", message: "" });
      } else {
        throw new Error("Form submission error.");
      }
    } catch (err) {
      window.location.href = `mailto:infoadmin@deepikabuiltech.com?subject=Quote Request&body=Name: ${sidebarForm.name}%0APhone: ${sidebarForm.phone}%0AService: ${sidebarForm.service}%0AMessage: ${sidebarForm.message}`;
      setFormStatus("Submission redirected via email client.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      {/* Editorial Header */}
      <div className="bg-carbon py-16 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber opacity-5 blur-[120px]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
            <div className="max-w-3xl">
              <span className="text-amber text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Building Knowledge</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.9] tracking-tighter mb-8">
                Industrial <br />
                <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">Insights.</span>
              </h1>
            </div>
            <p className="text-surface-mid text-lg max-w-sm font-sans mb-2 border-l border-white/10 pl-8">
              Technical expertise, latest global trends, and structural engineering wisdom from our front-line experts.
            </p>
          </div>
        </div>
      </div>

      <Breadcrumbs items={[{ label: "Blogs" }]} />

      {/* High-Contrast Blog Grid & Sidebar */}
      <div className="py-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left Column: Blog List */}
            <div className="lg:col-span-8 space-y-16">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-16">
                {blogPosts.map((post) => (
                  <div key={post.slug} className="group flex flex-col justify-between">
                    <div>
                      <Link href={`/blog/${post.slug}`} className="block">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6 shadow-xl shadow-carbon/5">
                          <picture>
                            <source srcSet={post.webpImage} type="image/webp" />
                            <img 
                              src={post.image} 
                              alt={post.title}
                              width="640"
                              height="400"
                              loading="lazy"
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                          </picture>
                          <div className="absolute inset-0 bg-gradient-to-t from-carbon/20 to-transparent" />
                        </div>
                      </Link>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-amber">
                          <span className="bg-amber/10 px-3 py-1 rounded-full">{post.category}</span>
                          <span className="w-1 h-1 rounded-full bg-surface-mid" />
                          <span className="text-ink-muted">{post.date}</span>
                        </div>
                        
                        <Link href={`/blog/${post.slug}`}>
                          <h2 className="text-2xl font-heading font-bold text-ink group-hover:text-amber transition-colors leading-snug tracking-tight mb-2">
                            {post.title}
                          </h2>
                        </Link>
                        
                        <p className="text-ink-muted text-sm leading-relaxed font-sans line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-surface-mid flex items-center justify-between">
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="text-xs font-black uppercase tracking-widest text-amber hover:text-carbon transition-colors"
                      >
                        Read More →
                      </Link>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-carbon flex items-center justify-center text-white text-[9px] font-black">
                          DB
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-ink">{post.author}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 space-y-12">
              {/* Get a Free Quote Form (4 fields) */}
              <div className="bg-surface-subtle p-8 rounded-3xl border border-surface-mid">
                <h3 className="text-xl font-heading font-black text-ink mb-2 tracking-tight">Get a Free Quote</h3>
                <p className="text-ink-muted text-xs font-sans mb-6">Our structural engineering experts respond within 2 business hours.</p>
                
                <form onSubmit={handleSidebarFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-ink-muted mb-1.5">Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      placeholder="e.g. Rajesh Kumar" 
                      value={sidebarForm.name}
                      onChange={e => setSidebarForm({ ...sidebarForm, name: e.target.value })}
                      className="w-full bg-white border border-surface-mid p-3.5 rounded-xl text-sm focus:outline-none focus:border-amber transition-colors font-sans" 
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-wider text-ink-muted mb-1.5">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      placeholder="e.g. +91 96000 67611" 
                      value={sidebarForm.phone}
                      onChange={e => setSidebarForm({ ...sidebarForm, phone: e.target.value })}
                      className="w-full bg-white border border-surface-mid p-3.5 rounded-xl text-sm focus:outline-none focus:border-amber transition-colors font-sans" 
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-[10px] font-bold uppercase tracking-wider text-ink-muted mb-1.5">Service Interested In *</label>
                    <select 
                      id="service"
                      required
                      value={sidebarForm.service}
                      onChange={e => setSidebarForm({ ...sidebarForm, service: e.target.value })}
                      className="w-full bg-white border border-surface-mid p-3.5 rounded-xl text-sm focus:outline-none focus:border-amber transition-colors font-sans"
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

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-ink-muted mb-1.5">Message / Requirements</label>
                    <textarea 
                      id="message"
                      rows={3}
                      placeholder="Tell us about your project area, location, etc."
                      value={sidebarForm.message}
                      onChange={e => setSidebarForm({ ...sidebarForm, message: e.target.value })}
                      className="w-full bg-white border border-surface-mid p-3.5 rounded-xl text-sm focus:outline-none focus:border-amber transition-colors font-sans resize-none" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-amber text-carbon font-black py-4 rounded-xl hover:bg-carbon hover:text-white transition-all shadow-xl shadow-amber/10 text-xs uppercase tracking-wider"
                  >
                    {isSubmitting ? "Submitting..." : "Send My Request →"}
                  </button>
                  {formStatus && (
                    <p className="text-xs font-bold text-center text-amber mt-2">{formStatus}</p>
                  )}
                </form>
              </div>

              {/* Our Services quick links */}
              <div className="border border-surface-mid p-8 rounded-3xl sticky top-32">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-ink-muted mb-6">Our Services</h4>
                <div className="space-y-3">
                  {[
                    { name: "PEB Building Structure", path: "/industrial-peb-construction-chennai" },
                    { name: "Civil & Steel Construction", path: "/construction-services-in-chennai" },
                    { name: "Cold Storage Solutions", path: "/cold-storage-solutions-chennai" },
                    { name: "Mezzanine Floor", path: "/mezzanine-floor-construction-chennai" },
                    { name: "Warehouse Construction", path: "/warehouse-construction-chennai" },
                    { name: "EOT Cranes", path: "/eot-crane-manufacturers-in-chennai" },
                    { name: "Steel Structure Fabrication", path: "/steel-structure-fabrication-chennai" },
                    { name: "Industrial Shed Construction", path: "/industrial-shed-construction-chennai" }
                  ].map(s => (
                    <Link 
                      key={s.path} 
                      href={s.path} 
                      className="block p-3.5 bg-surface-subtle border border-surface-mid rounded-xl hover:border-amber text-xs font-bold text-ink hover:text-amber transition-all flex items-center justify-between"
                    >
                      <span>{s.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
