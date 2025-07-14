import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioApp from "@/assets/portfolio-app.jpg";
import portfolioAI from "@/assets/portfolio-ai.jpg";
import portfolioWeb from "@/assets/portfolio-web.jpg";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Smart Home Hub",
      category: "Electrical AI",
      description: "AI-powered home automation system with predictive energy management and intelligent device control.",
      image: portfolioAI,
      tags: ["IoT", "Machine Learning", "Energy Optimization"]
    },
    {
      title: "FinTech Platform",
      category: "Web Development",
      description: "Responsive web application for financial services with real-time data visualization and secure transactions.",
      image: portfolioWeb,
      tags: ["React", "TypeScript", "Security"]
    },
    {
      title: "Fitness Companion",
      category: "Mobile App",
      description: "Cross-platform mobile app with AI workout recommendations and social fitness tracking features.",
      image: portfolioApp,
      tags: ["React Native", "AI/ML", "Health Tech"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-section-title text-foreground">
              Our <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Explore some of our recent projects that showcase our expertise across different domains
            </p>
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover-lift">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Projects Teaser */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((item) => (
              <div key={item} className="glass-card p-6 text-center border-dashed border-2 border-primary/20 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary/30 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-lg font-medium mb-2 text-muted-foreground">More Projects</h3>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Want to see your project featured here?</p>
            <Button 
              size="lg"
              className="group px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;