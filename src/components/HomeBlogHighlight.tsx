import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blogs";

const HomeBlogHighlight = () => {
  // Take top 2 blogs
  const posts = blogPosts.slice(0, 2);

  return (
    <section className="py-24 bg-surface-subtle">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 text-center lg:text-left">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <span className="text-amber text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Industrial Journal</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-ink tracking-tighter leading-none mb-6">
              Engineering <span className="gradient-text">Intelligence.</span>
            </h2>
          </div>
          <Link to="/blogs" className="group flex items-center gap-3 font-black text-ink border-b-2 border-amber pb-1 hover:border-carbon transition-all mx-auto lg:mx-0">
            View Technical Journal
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-[2.5rem] flex flex-col md:flex-row gap-8 shadow-xl shadow-carbon/5 hover:shadow-2xl transition-all border border-surface-mid group"
            >
              <div className="md:w-1/3 aspect-square rounded-2xl overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
              </div>
              <div className="md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-amber mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-black text-ink mb-4 leading-tight tracking-tight group-hover:text-amber transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed font-sans line-clamp-2">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.slug}`} className="mt-6 text-[10px] font-black uppercase tracking-widest text-carbon hover:text-amber flex items-center gap-2">
                  Read Analysis <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogHighlight;
