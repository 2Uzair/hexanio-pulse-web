import { Zap, Globe, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Electrical AI Solutions",
      description: "Smart systems and automation powered by artificial intelligence. From smart grids to intelligent building management systems.",
      features: ["Smart Grid Technology", "IoT Integration", "Predictive Maintenance", "Energy Optimization"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive, fast-loading, and scalable websites that deliver exceptional user experiences across all devices.",
      features: ["Responsive Design", "Performance Optimization", "SEO-Friendly", "Custom CMS Solutions"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS and Android applications with intuitive UX/UI that engage users and drive business growth.",
      features: ["Cross-Platform Development", "UI/UX Design", "App Store Optimization", "Maintenance & Support"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-section-title text-foreground">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              We specialize in three core areas that represent the future of digital innovation
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="glass-card p-8 h-full hover-lift glow-effect">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <div className="mt-8">
                    <Button 
                      variant="ghost" 
                      className="group/btn text-primary hover:text-primary-foreground hover:bg-primary"
                      onClick={scrollToContact}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Ready to discuss your project?</p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;