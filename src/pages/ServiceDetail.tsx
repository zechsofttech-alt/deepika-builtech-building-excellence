import { useParams, Link } from "react-router-dom";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-black mb-4">Service Not Found</h1>
          <Link to="/" className="text-amber hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-carbon">
        <div className="absolute inset-0 opacity-20">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-surface-mid hover:text-amber mb-12 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Back to Solutions</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.9] tracking-tighter mb-8 max-w-4xl">
              {service.title}.
            </h1>
            <p className="text-xl md:text-2xl text-surface-mid font-sans max-w-3xl leading-relaxed">
              {service.fullDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
            
            {/* Left: Detail Content */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {service.features.map((feature, idx) => (
                  <motion.div 
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-surface-subtle border border-surface-mid rounded-2xl group hover:border-amber/30 transition-all shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-surface-mid flex items-center justify-center mb-6 group-hover:bg-amber group-hover:border-amber transition-all">
                      <feature.icon className="w-5 h-5 text-amber group-hover:text-carbon" />
                    </div>
                    <h3 className="text-lg font-heading font-black text-ink mb-3 tracking-tight">{feature.title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed font-sans">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Technical Specifications */}
              <div className="bg-carbon p-10 lg:p-16 rounded-[2.5rem] text-white overflow-hidden relative">
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
            </div>

            {/* Right: Sidebar / CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-amber p-10 rounded-[2rem] shadow-2xl shadow-amber/20">
                  <h3 className="text-2xl font-heading font-black text-carbon mb-6 tracking-tight">Start Your Project</h3>
                  <p className="text-carbon/80 font-sans mb-10 leading-relaxed font-medium">
                    Discuss your structural requirements with our expert engineering team.
                  </p>
                  <Link to="/contact" className="w-full bg-carbon text-white font-black text-[13px] uppercase tracking-[0.1em] py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-all whitespace-nowrap group">
                    <span>Request a Technical Quote</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="border border-surface-mid p-8 rounded-[2rem]">
                  <h4 className="text-sm font-black uppercase tracking-widest text-ink-muted mb-6">Other Solutions</h4>
                  <div className="space-y-4">
                    {services.filter(s => s.slug !== slug).slice(0, 3).map(s => (
                      <Link key={s.slug} to={`/service/${s.slug}`} className="flex items-center justify-between group">
                        <span className="text-ink font-bold group-hover:text-amber transition-colors">{s.title}</span>
                        <ChevronRight className="w-4 h-4 text-surface-mid group-hover:text-amber transition-all group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
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

export default ServiceDetail;
