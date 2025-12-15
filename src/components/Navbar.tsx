import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy shadow-lg" : "bg-hero"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
              <span className="text-accent-foreground font-bold text-xl font-display">L</span>
            </div>
            <span className="text-2xl font-display font-bold text-primary-foreground">
              Link<span className="text-coral">Work</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#categories" 
              onClick={(e) => handleNavClick(e, "#categories")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-coral hover:after:w-full after:transition-all"
            >
              Categories
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleNavClick(e, "#how-it-works")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-coral hover:after:w-full after:transition-all"
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => handleNavClick(e, "#testimonials")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-coral hover:after:w-full after:transition-all"
            >
              Testimonials
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="hero-outline" size="default" className="hover:scale-105 transition-transform">
              Sign In
            </Button>
            <Button variant="hero" size="default" className="hover:scale-105 transition-transform">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-primary-foreground/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a 
                href="#categories" 
                onClick={(e) => handleNavClick(e, "#categories")}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2 font-body"
              >
                Categories
              </a>
              <a 
                href="#how-it-works" 
                onClick={(e) => handleNavClick(e, "#how-it-works")}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2 font-body"
              >
                How It Works
              </a>
              <a 
                href="#testimonials" 
                onClick={(e) => handleNavClick(e, "#testimonials")}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2 font-body"
              >
                Testimonials
              </a>
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="hero-outline" className="w-full">
                  Sign In
                </Button>
                <Button variant="hero" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
