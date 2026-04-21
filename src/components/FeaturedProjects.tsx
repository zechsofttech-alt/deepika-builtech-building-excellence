import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Ruler } from "lucide-react";
import { projects } from "@/data/projects";

const FeaturedProjects = () => {
  // Take top 3 projects
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-amber text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-ink tracking-tighter leading-none mb-6">
              Major Structural <br />
              <span className="gradient-text">Milestones.</span>
            </h2>
          </div>
          <Link to="/projects" className="group flex items-center gap-3 bg-carbon text-white px-8 py-4 rounded-xl font-bold hover:bg-amber hover:text-carbon transition-all shadow-xl">
            Explore All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {featured.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/project/${project.slug}`} className="block overflow-hidden rounded-[2.5rem] relative aspect-[4/5] mb-8 shadow-2xl shadow-carbon/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-amber" />
                    <p className="text-[10px] font-black uppercase tracking-widest">{project.category}</p>
                  </div>
                  <h3 className="text-2xl font-heading font-black mb-4 leading-none tracking-tight">{project.title}</h3>
                  <div className="flex items-center gap-6 pt-4 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-amber" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="w-3.5 h-3.5 text-amber" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{project.area}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
