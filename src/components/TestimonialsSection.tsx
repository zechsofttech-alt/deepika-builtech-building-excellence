import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mr. K. Jayaraman",
    designation: "Managing Director",
    company: "Jayaraman Auto Components",
    city: "Kanchipuram",
    quote: "Deepika Builtech delivered an outstanding PEB steel structure for our manufacturing facility in Kanchipuram. The entire design, fabrication, and erection process was handled with extreme professionalism and completed exactly on our tight schedule.",
  },
  {
    name: "Mr. Rajesh Kumar",
    designation: "Head of Operations",
    company: "RK Logistics & Warehousing",
    city: "Chennai",
    quote: "We contracted Deepika Builtech for our new 80,000 sq.ft logistics warehouse in Chennai. The column-free structural layout and heavy-duty VDF flooring they built have significantly optimized our daily operations. Their PEB expertise is truly top-notch.",
  },
  {
    name: "Mr. S. Vignesh",
    designation: "Technical Director",
    company: "Southern Cold Chain Solutions",
    city: "Ambattur",
    quote: "The thermal efficiency and structural integrity of our cold storage complex in Ambattur are excellent. Deepika Builtech perfectly integrated the thick PIR insulation panels and dynamic framing, proving themselves as the best industrial builders in Chennai.",
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-surface-subtle overflow-hidden border-t border-surface-mid">
      <div className="container mx-auto px-6 lg:px-12 text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-amber mb-6">
          <span className="w-8 h-[1px] bg-amber"></span>
          Success Stories
          <span className="w-8 h-[1px] bg-amber"></span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-ink leading-[1.1] tracking-tighter">
          What Our <span className="gradient-text">Clients Say.</span>
        </h2>
        <p className="mt-6 text-ink-muted text-lg max-w-2xl mx-auto font-sans">
          Hear directly from our partners about their experience building industrial excellence with Deepika Builtech.
        </p>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-l-[6px] border-[#e07b39] rounded-[8px] text-left flex flex-col justify-between"
              style={{ padding: "20px 24px" }}
            >
              <div>
                {/* 5 orange stars */}
                <div className="text-[#e07b39] text-xl mb-4 font-sans leading-none">
                  ★★★★★
                </div>
                <blockquote className="m-0">
                  <p className="text-ink-muted leading-relaxed mb-6 text-base font-sans font-medium">
                    "{item.quote}"
                  </p>
                  <footer className="mt-4">
                    <cite className="block text-sm not-italic font-sans text-ink">
                      <strong className="text-ink font-bold text-base block mb-0.5">{item.name}</strong>
                      <span className="text-ink-muted/80 text-xs block leading-tight">{item.designation}, {item.company}</span>
                      <span className="text-amber text-xs font-semibold uppercase tracking-wider block mt-1">{item.city}</span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
