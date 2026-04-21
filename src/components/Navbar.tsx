import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we are scrolled enough for styling
      setScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false); // Scrolling DOWN
      } else {
        setIsVisible(true); // Scrolling UP
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled 
          ? "py-3 bg-white/70 backdrop-blur-xl border-b border-surface-mid shadow-sm" 
          : "py-6 bg-white"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group relative z-10 transition-all duration-300">
          <Logo className="w-14 h-14" showText={true} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`relative px-4 py-2 text-[13px] font-bold uppercase tracking-wider transition-all duration-300 group/link ${
                  pathname === link.href 
                    ? "text-amber" 
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-amber transform origin-left transition-transform duration-300 ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100'}`} />
              </Link>
            ))}
          </div>
          
          <div className="w-px h-6 bg-surface-mid/50" />
          
          <Link to="/contact" className="group">
            <div className="relative flex items-center justify-center gap-2 bg-carbon text-white font-black text-[11px] uppercase tracking-[0.15em] px-8 py-3.5 rounded-lg overflow-hidden group-hover:bg-amber group-hover:text-carbon transition-all duration-500 shadow-xl shadow-carbon/10">
              <Phone className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden relative z-10 flex items-center gap-2">
          <a href="tel:+919600067611" className="w-10 h-10 flex items-center justify-center bg-surface-subtle text-amber rounded-full tap-target">
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center text-ink hover:bg-surface-subtle rounded-full tap-target"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`absolute top-full left-0 right-0 bg-white border-b border-surface-mid shadow-2xl transition-all duration-500 ease-in-out lg:hidden ${
            isOpen ? "max-h-[100vh] opacity-100 border-t border-surface-subtle" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-8 gap-1">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.label}
                initial={false}
                animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-4 text-lg font-heading font-bold transition-all active:translate-x-2 ${
                    pathname === link.href 
                      ? "text-amber" 
                      : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
                <div className="h-px bg-surface-mid/50 w-full" />
              </motion.div>
            ))}
            
            <motion.div
              initial={false}
              animate={{ y: isOpen ? 0 : 20, opacity: isOpen ? 1 : 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-3 bg-carbon text-white font-black text-sm uppercase tracking-widest py-5 rounded-2xl shadow-xl shadow-carbon/20 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Get a Quote Now</span>
              </Link>
            </motion.div>

            <div className="mt-12 text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ink-muted mb-2">Connect With Experts</p>
              <a href="mailto:dbtechengg@gmail.com" className="text-sm font-medium text-ink/60">dbtechengg@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
