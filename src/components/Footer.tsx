import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  platform: [
    { name: "Browse Freelancers", href: "#" },
    { name: "Post a Project", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Enterprise", href: "#" },
  ],
  categories: [
    { name: "Design", href: "#" },
    { name: "Development", href: "#" },
    { name: "Writing", href: "#" },
    { name: "Marketing", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center shadow-glow">
                <span className="text-accent-foreground font-bold text-xl font-display">L</span>
              </div>
              <span className="text-2xl font-display font-bold">
                Link<span className="text-coral">Work</span>
              </span>
            </a>
            <p className="text-primary-foreground/60 mb-6 max-w-xs font-body">
              Connecting talented freelancers with amazing opportunities worldwide since 2020.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-coral transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4 font-body">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-body">Categories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-body">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-body">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="font-semibold mb-2 font-body">Subscribe to our newsletter</h4>
              <p className="text-primary-foreground/60 text-sm font-body">
                Get the latest news and updates delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <div className="flex-1 md:w-64 bg-primary-foreground/10 rounded-lg px-4 py-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-foreground/40" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none text-primary-foreground placeholder:text-primary-foreground/40 w-full font-body"
                />
              </div>
              <button className="px-6 py-2 bg-accent-gradient rounded-lg font-medium text-accent-foreground hover:shadow-glow transition-all font-body">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm font-body">
            © 2024 Link-Work. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
