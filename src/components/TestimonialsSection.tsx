import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const videoTestimonials = [
  {
    name: "Murugan Swamy",
    role: "Operational Head, Southern Logistics",
    thumbnail: "/assets/testimonials/review_1.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
    summary: "Deepika Builtech delivered our warehouse ahead of schedule with unparalleled precision and quality.",
  },
  {
    name: "Anjali Devi",
    role: "Project Manager, Industrial Infra Corp",
    thumbnail: "/assets/testimonials/review_2.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "Their PEB design optimization was critical for our manufacturing workflow efficiency and space utilization.",
  },
  {
    name: "Robert Wilson",
    role: "CEO, Global Cold Chain Solutions",
    thumbnail: "/assets/testimonials/review_3.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary: "Top-tier expertise in cold storage structural integrity. Their thermal solutions are state-of-the-art.",
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-surface-subtle overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-amber mb-6">
          <span className="w-8 h-[1px] bg-amber"></span>
          Success Stories
          <span className="w-8 h-[1px] bg-amber"></span>
        </div>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-ink leading-[1.1] tracking-tighter">
          Video <span className="gradient-text">Reviews.</span>
        </h3>
        <p className="mt-6 text-ink-muted text-lg max-w-2xl mx-auto font-sans">
          Hear directly from our partners about their experience building industrial excellence with Deepika Builtech.
        </p>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {videoTestimonials.map((item, idx) => (
            <div key={idx} className="group flex flex-col animate-fade-up" style={{ animationDelay: `${idx * 150}ms` }}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-video rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl hover:shadow-amber/20 transition-all duration-500 group-hover:-translate-y-2 border border-white/50">
                    <img 
                      src={item.thumbnail} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center group-hover:bg-amber group-hover:scale-110 transition-all duration-500 border border-white/30 shadow-2xl">
                        <Play className="w-6 h-6 text-white fill-current translate-x-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
                        Watch Review
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 aspect-video bg-black border-none overflow-hidden sm:rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                  <DialogHeader className="sr-only">
                    <DialogTitle>Video Review by {item.name}</DialogTitle>
                  </DialogHeader>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={item.videoUrl} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </DialogContent>
              </Dialog>
              
              <div className="mt-8 px-4">
                <p className="text-ink-muted leading-relaxed mb-6 text-base font-medium italic opacity-90">
                  "{item.summary}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber to-amber-light flex items-center justify-center text-carbon font-heading font-black text-xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-ink text-lg tracking-tight leading-none">{item.name}</h4>
                    <p className="text-[10px] font-black text-amber uppercase tracking-[0.2em] mt-2 opacity-80">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

