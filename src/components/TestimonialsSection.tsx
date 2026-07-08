"use client";

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
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-amber-dark mb-6">
          <span className="w-8 h-[1px] bg-amber-dark"></span>
          Success Stories
          <span className="w-8 h-[1px] bg-amber-dark"></span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-ink leading-[1.1] tracking-tighter">
          What Our Clients Say About Deepika Builtech
        </h2>
        <p className="mt-6 text-ink-muted text-lg max-w-2xl mx-auto font-sans">
          Hear directly from our partners about their experience building industrial excellence with Deepika Builtech.
        </p>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="testimonial-card"
            >
              <div className="stars">★★★★★</div>
              <blockquote>
                <p>"{item.quote}"</p>
              </blockquote>
              <div className="client-info">
                <strong>{item.name}</strong>
                <span>{item.designation} — {item.company}, {item.city}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


