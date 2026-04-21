import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is a Pre-Engineered Building (PEB)?",
    answer: "A Pre-Engineered Building is a steel structure built over a structural concept of primary members, secondary members, and the cover sheeting connected to each other. The structural members are custom designed to be lighter in weight as well as high in strength, fabricated at the factory, and then assembled on-site."
  },
  {
    question: "How long does it take to construct a standard PEB warehouse?",
    answer: "The timeline depends on the scale, but PEBs are typically 30-50% faster to construct than conventional buildings. A standard 50,000 sq.ft warehouse can often be designed, fabricated, and erected within 8-12 weeks."
  },
  {
    question: "Are your steel structures weather and fire-resistant?",
    answer: "Yes, all our primary and secondary steel members are treated with high-grade anti-corrosive primers and paints. We also offer specialized fire-resistant coatings and insulated sandwich panels for enhanced extreme weather protection."
  },
  {
    question: "Do you handle the end-to-end project, including civil work?",
    answer: "While our core expertise is in the structural steel design, fabrication, and erection, we often partner with trusted civil contractors to provide a turnkey solution for our clients upon request."
  },
  {
    question: "What certifications do your materials meet?",
    answer: "We source our steel from top-tier manufacturers. Our designs and fabrications strictly comply with ISO 9001:2015 standards and Indian Standard (IS) codes like IS 800 for structural design."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3">
            <h2 className="section-label mb-6">Got Questions?</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-ink leading-[1.1] mb-8 tracking-tighter">
              Frequently <br />
              <span className="gradient-text">Asked Answers.</span>
            </h3>
            <p className="text-ink-muted text-lg leading-relaxed mb-8">
              Everything you need to know about our engineering process, structural reliability, and project timelines.
            </p>
            <a href="/contact" className="inline-block font-bold text-ink border-b-2 border-amber pb-1 hover:border-ink transition-colors">
              Still have questions? Contact us
            </a>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-500 overflow-hidden ${
                  openIndex === index 
                    ? 'border-amber/50 bg-surface-subtle shadow-lg scale-[1.02]' 
                    : 'border-surface-mid bg-white hover:border-amber/30 hover:shadow-md'
                }`}
              >
                <button 
                  className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-heading font-bold text-xl transition-colors duration-300 ${openIndex === index ? 'text-ink' : 'text-ink-muted group-hover:text-ink'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 ${openIndex === index ? 'bg-amber text-carbon rotate-180' : 'bg-surface-subtle text-ink-muted'}`}>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>
                <div 
                  className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="h-px bg-surface-mid mb-6" />
                  <p className="text-ink-muted leading-relaxed text-lg font-sans">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
