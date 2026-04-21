import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogs";
import { ArrowUpRight } from "lucide-react";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Editorial Header */}
      <div className="bg-carbon pt-40 pb-24 border-b border-white/5 relative overflow-hidden">
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

      {/* High-Contrast Blog Grid */}
      <div className="py-24 bg-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-x-20 gap-y-24">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-10 shadow-2xl shadow-carbon/5">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/40 to-transparent" />
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="w-14 h-14 bg-amber text-carbon rounded-2xl flex items-center justify-center shadow-2xl">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-amber">
                    <span className="bg-amber/10 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-surface-mid" />
                    <span className="text-ink-muted">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-surface-mid" />
                    <span className="text-ink-muted">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-heading font-black text-ink group-hover:text-amber transition-colors leading-none tracking-tighter">
                    {post.title}
                  </h2>
                  
                  <p className="text-ink-muted text-lg leading-relaxed font-sans line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-surface-mid">
                    <div className="w-8 h-8 rounded-full bg-carbon flex items-center justify-center text-white text-[10px] font-black">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-ink">{post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Professional Newsletter */}
      <div className="bg-carbon py-32 relative overflow-hidden text-center">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber opacity-5 blur-[120px]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tighter leading-none">
            Forge a Smarter <br />
            <span className="gradient-text">Industrial Future.</span>
          </h2>
          <p className="text-surface-mid text-lg mb-12 max-w-lg mx-auto">Subscribe to our Quarterly Tech Insights for high-detail PEB & logistics structural trends.</p>
          <div className="flex flex-col sm:flex-row justify-center max-w-xl mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Corporate Email Address" 
              className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white w-full focus:outline-none focus:border-amber transition-colors backdrop-blur-md" 
            />
            <button className="bg-amber text-carbon font-black px-10 py-5 rounded-2xl hover:bg-white transition-all shadow-xl shadow-amber/10 whitespace-nowrap">
              Join the Network
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;

