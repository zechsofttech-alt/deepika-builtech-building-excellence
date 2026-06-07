import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
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
            <h5 className="font-heading font-semibold text-sm uppercase tracking-widest text-amber mb-6">Services</h5>
            <ul className="space-y-3">
              {[
                { label: 'PEB Building Structure', href: '/industrial-peb-construction-chennai' },
                { label: 'Civil & Steel Construction', href: '/construction-services-in-chennai' },
                { label: 'Cold Storage Construction', href: '/cold-storage-solutions-chennai' },
                { label: 'Mezzanine Floor', href: '/mezzanine-floor-construction-chennai' },
                { label: 'Warehouse Construction', href: '/warehouse-construction-chennai' },
                { label: 'EOT Cranes', href: '/eot-crane-manufacturers-in-chennai' },
                { label: 'Steel Structure Fabrication', href: '/steel-structure-fabrication-chennai' },
                { label: 'Industrial Shed Construction', href: '/industrial-shed-construction-chennai' }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-surface-subtle/60 hover:text-amber transition-all duration-300 text-[13px] font-medium flex items-center gap-2 group/link focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber scale-0 group-hover/link:scale-100 transition-transform duration-300 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-heading font-semibold text-sm uppercase tracking-widest text-amber mb-6">Locations</h5>
            <ul className="space-y-3">
              {[
                { label: 'Ambattur PEB Sheds', href: '/location/peb-construction-ambattur' },
                { label: 'Sriperumbudur Warehouse', href: '/location/peb-construction-sriperumbudur' },
                { label: 'Kanchipuram Steel Units', href: '/location/peb-construction-kanchipuram' },
                { label: 'Thiruvallur Factories', href: '/location/peb-construction-thiruvallur' },
                { label: 'Tambaram Storage Hubs', href: '/location/peb-construction-tambaram' },
                { label: 'Oragadam Auto Hubs', href: '/location/peb-construction-oragadam' },
                { label: 'Chennai Port Transit', href: '/location/peb-construction-chennai-port' },
                { label: 'Hosur Machining Plants', href: '/location/peb-construction-hosur' }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-surface-subtle/60 hover:text-amber transition-all duration-300 text-[13px] font-medium flex items-center gap-2 group/link focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber scale-0 group-hover/link:scale-100 transition-transform duration-300 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          <div className="col-span-2 md:col-span-1">
            <h5 className="font-heading font-semibold text-sm uppercase tracking-widest text-amber mb-6">Contact Info</h5>
            <ul className="space-y-3 text-surface-subtle/70 text-sm font-sans leading-relaxed">
              <li className="font-bold text-white text-base">Deepika Builtech Engineering</li>
              <li>
                New No. 31,31A, Old No.14,15, Coromandal Town,<br />
                SIDCO Industrial Estate, Ambattur, Chennai - 600098
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+919600067611" className="hover:text-amber transition-colors">+91 96000 67611</a> | 044-26256416
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:infoadmin@deepikabuiltech.in" className="hover:text-amber transition-colors">infoadmin@deepikabuiltech.in</a>
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
        <div className="text-[10.5vw] font-heading font-black whitespace-nowrap leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] group-hover:[-webkit-text-stroke:1px_rgba(255,191,0,0.5)] transition-all duration-1000">
          DEEPIKA BUILTECH
        </div>
      </div>
    </footer>
  );
};

export default Footer;
