import { Star, Quote } from "lucide-react";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "CTO, TechCorp",
      image: client1,
      content: "HEXANIO delivered an exceptional AI-powered electrical management system that reduced our energy costs by 30%. Their technical expertise and attention to detail are unmatched.",
      rating: 5
    },
    {
      name: "Sarah Martinez",
      role: "Founder, StartupLab",
      image: client2,
      content: "The web platform HEXANIO built for us is not just beautiful, it's incredibly fast and user-friendly. Our conversion rates increased by 45% after launch.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Product Manager, InnovateNow",
      image: client3,
      content: "Working with HEXANIO on our mobile app was a game-changer. They understood our vision perfectly and delivered an app that our users absolutely love.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-section-title text-foreground">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it — hear from the companies and founders who trust HEXANIO
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="glass-card p-8 h-full hover-lift">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <blockquote className="text-foreground leading-relaxed mb-8 relative z-10">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl p-8 border border-primary/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Project Success</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;