import { Zap, Linkedin, Github, Twitter, Mail, Phone } from "lucide-react";
import Logo from "@/assets/logo.png"; 

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold tracking-wider">HEXANIO</h3>
              </div>
              <p className="text-background/80 leading-relaxed mb-6 max-w-md">
                Empowering businesses through cutting-edge Embedded Solutions, 
                seamless web experiences, and intuitive mobile applications.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="mailto:hello@hexanio.com"
                  className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@hexanio.com
                </a>
              </div>
              {/* <div className="flex items-center gap-4 mt-2">
                <a 
                  href="tel:+1555123456"
                  className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +1 (555) 123-4567
                </a>
              </div> */}
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-background/80 hover:text-primary transition-colors text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-background/80 hover:text-primary transition-colors text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('portfolio')}
                    className="text-background/80 hover:text-primary transition-colors text-left"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-background/80 hover:text-primary transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-background/80">Embedded Solutions</span>
                </li>
                <li>
                  <span className="text-background/80">Web Development</span>
                </li>
                <li>
                  <span className="text-background/80">Mobile App Development</span>
                </li>
                <li>
                  <span className="text-background/80">Consulting</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Social Links & Copyright */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Social Links */}
              {/* <div className="flex items-center gap-4">
                <span className="text-background/60 text-sm">Follow Us:</span>
                <div className="flex gap-3">
                  <a 
                    href="https://linkedin.com/company/hexanio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                  >
                    <Linkedin className="w-4 h-4 text-background group-hover:text-primary-foreground" />
                  </a>
                  <a 
                    href="https://github.com/hexanio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                  >
                    <Github className="w-4 h-4 text-background group-hover:text-primary-foreground" />
                  </a>
                  <a 
                    href="https://twitter.com/hexanio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                  >
                    <Twitter className="w-4 h-4 text-background group-hover:text-primary-foreground" />
                  </a>
                </div>
              </div> */}
              
              {/* Copyright */}
              <div className="text-background/60 text-sm">
                © {new Date().getFullYear()} HEXANIO. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;