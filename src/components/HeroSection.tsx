import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold tracking-wider">HEXANIO</h1>
          </div>
          
          {/* Hero Title */}
          <h2 className="text-hero text-foreground mb-6">
            Digital Solutions
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              That Power Tomorrow
            </span>
          </h2>
          
          {/* Tagline */}
          <p className="text-large text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We craft cutting-edge electrical AI solutions, responsive web applications, 
            and intuitive mobile experiences that transform your vision into reality.
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="group px-8 py-6 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Let's Build Something Amazing
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;