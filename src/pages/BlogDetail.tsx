import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Share2, ChevronRight } from "lucide-react";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-black mb-4">Article Not Found</h1>
          <Link to="/blogs" className="text-amber hover:underline">Back to Journal</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Article Header */}
      <section className="pt-40 pb-20 bg-surface-subtle border-b border-surface-mid">
        <div className="container mx-auto px-6 lg:px-12">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-ink-muted hover:text-amber mb-12 transition-colors group">
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
            
            <div className="lg:col-span-8">
              <div className="aspect-video w-full overflow-hidden rounded-[2.5rem] mb-16 shadow-2xl">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="prose prose-xl max-w-none text-ink-muted font-sans leading-relaxed whitespace-pre-line">
                {post.content}
              </div>

              <div className="mt-20 pt-10 border-t border-surface-mid flex flex-wrap gap-3">
                {post.tags.map(tag => (
                  <span key={tag} className="px-5 py-2 bg-surface-subtle border border-surface-mid rounded-full text-xs font-bold text-ink-muted hover:text-amber transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                {/* Share Card */}
                <div className="bg-carbon p-10 rounded-[2.5rem] text-white">
                  <h3 className="text-xl font-heading font-black mb-6 tracking-tight">Share Insights</h3>
                  <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-xl bg-white/5 hover:bg-amber hover:text-carbon transition-all flex items-center justify-center border border-white/10">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <p className="text-sm text-white/50 leading-snug">Distribute this technical knowledge with your network.</p>
                  </div>
                </div>

                {/* Popular Articles */}
                <div className="border border-surface-mid p-10 rounded-[2.5rem]">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-ink-muted mb-8">Related Journal Entries</h4>
                  <div className="space-y-8">
                    {blogPosts.filter(p => p.slug !== slug).map(p => (
                      <Link key={p.slug} to={`/blog/${p.slug}`} className="group block">
                        <span className="text-[10px] font-bold text-amber uppercase tracking-widest mb-2 block">{p.date}</span>
                        <h5 className="font-heading font-bold text-lg text-ink group-hover:text-amber transition-colors leading-snug tracking-tight">
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
                  <input type="email" placeholder="Email Address" className="w-full bg-white border border-surface-mid p-4 rounded-xl mb-4 focus:outline-none focus:border-amber transition-colors" />
                  <button className="w-full bg-amber text-carbon font-black py-4 rounded-xl hover:bg-carbon hover:text-white transition-all shadow-xl shadow-amber/10">
                    Subscribe
                  </button>
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
