import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-carbon text-surface pt-16 border-t border-carbon-soft relative overflow-hidden flex flex-col group">
      
      {/* Premium Architectural Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '3rem 3rem'
        }}
      />
      
      {/* Ambient Floor Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[400px] bg-amber/10 blur-[120px] pointer-events-none z-0 rounded-full opacity-50" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Logo className="w-16 h-16" showText={true} />
            </div>
            <p className="text-surface-subtle/70 text-base leading-relaxed mb-6 max-w-xs font-sans">
              Architecting the industrial future with elite Pre-Engineered Building solutions. Precision, durability, and on-time execution.
            </p>
          </div>
          
          <div>
            <h5 className="font-heading font-semibold text-sm uppercase tracking-widest text-amber mb-6">Company</h5>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Blogs', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                    className="text-surface-subtle/60 hover:text-amber transition-all duration-300 text-base font-medium flex items-center gap-2 group/link"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber scale-0 group-hover/link:scale-100 transition-transform duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-heading font-semibold text-sm uppercase tracking-widest text-amber mb-6">Expertise</h5>
            <ul className="space-y-3">
              {['PEB Buildings', 'Warehousing', 'Cold Storage', 'Mezzanine Floors', 'EOT Cranes'].map((link) => (
                <li key={link}>
                  <Link to="/services" className="text-surface-subtle/60 hover:text-amber transition-all duration-300 text-base font-medium flex items-center gap-2 group/link">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber scale-0 group-hover/link:scale-100 transition-transform duration-300" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-heading font-semibold text-sm uppercase tracking-widest text-amber mb-6">Connect</h5>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919600067611" className="text-surface-subtle/60 hover:text-amber transition-all duration-300 text-base font-medium">
                  +91 96000 67611
                </a>
              </li>
              <li>
                <a href="mailto:dbtechengg@gmail.com" className="text-surface-subtle/60 hover:text-amber transition-all duration-300 text-base font-medium block">
                  dbtechengg@gmail.com
                </a>
              </li>
              <li className="pt-6 flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-sm text-surface-subtle hover:bg-amber hover:text-carbon hover:border-amber cursor-pointer transition-all duration-500 hover:-translate-y-1">in</div>
                <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-sm text-surface-subtle hover:bg-amber hover:text-carbon hover:border-amber cursor-pointer transition-all duration-500 hover:-translate-y-1">x</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-carbon-soft pt-8 flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <p className="text-sm text-surface-subtle">
            &copy; {new Date().getFullYear()} Deepika Builtech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-surface-subtle">
            <a href="#" className="hover:text-surface transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-surface transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Massive Bottom Text */}
      <div className="w-full mt-auto flex justify-center items-center pointer-events-none select-none overflow-hidden pt-4 pb-20">
        <h1 className="text-[10.5vw] font-heading font-black whitespace-nowrap leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] group-hover:[-webkit-text-stroke:1px_rgba(255,191,0,0.5)] transition-all duration-1000">
          DEEPIKA BUILTECH
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
