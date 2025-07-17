import { Target, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Section Title */}
          <div className="space-y-6">
            <h2 className="text-section-title text-foreground">
              About <span className="text-primary">HEXANIO</span>
            </h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a forward-thinking AI innovation industry that bridges the gap between innovative technology 
              and practical solutions. Our mission is to empower businesses through cutting-edge Embedded Solutions, 
              seamless web experiences, and intuitive mobile applications.
            </p>
          </div>
          
          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Precision</h3>
              <p className="text-muted-foreground">
                Every project is executed with meticulous attention to detail and engineered for perfection.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We stay ahead of technology trends to deliver solutions that define the future.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Partnership</h3>
              <p className="text-muted-foreground">
                We work closely with our clients to understand their vision and exceed expectations.
              </p>
            </div>
          </div>
          
          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl p-8 border border-primary/10">
            <blockquote className="text-xl italic text-center text-foreground">
              "At HEXANIO, we don't just build digital products — we craft experiences that 
              transform the way people interact with technology."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;