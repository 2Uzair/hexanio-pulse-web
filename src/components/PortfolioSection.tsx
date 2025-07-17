import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioApp from "@/assets/ZigbeeTemperatureNode.jpg";
import portfolioAI from "@/assets/gesture_control.jpg";
import portfolioWeb from "@/assets/prezenter.jpg";
import HealthBand from "@/assets/HealthBand.jpg";
import AiBookingAgent from "@/assets/AiBookingAgent.png";
import axEvents from "@/assets/axEvents.webp";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Gesture Controlled Light",
      category: "Embedded Systems",
      description:
        "Designed a gesture-based light control system using the VCNL4300 proximity sensor. Gesture recognition via VCNL4300 sensor",
      image: portfolioAI,
      link: "https://www.upwork.com/freelancers/~0179c1fcedadd812b6?p=1911745800519241728",
    },
    {
      title: "PreZenter",
      category: "CAD Designer",
      description:
        "PreZenter is an innovative wireless audio and visual cueing system that allows remote control of presentations on one or two computers with a reliable communication range of 300 feet. ",
      image: portfolioWeb,
      link: "https://www.upwork.com/freelancers/~010870bc6aefbdbc8e?p=1884683313841983488",
    },
    {
      title: "Zigbee Temperature Node",
      category: "Embedded Systems",
      description:
        "Built a wireless node to monitor and report temperature over Zigbee. Periodic temperature sensing. Zigbee-based wireless reporting. Battery-efficient operation",
      image: portfolioApp,
      link: "https://www.upwork.com/freelancers/~0179c1fcedadd812b6?p=1911745800519241728",
    },
    {
      title: "Health Band",
      category: "Embedded systems",
      description:
        "Developed a smart wristband for health tracking and BLE sync with smartphones. Heart rate and step count monitoring. BLE-based data sync. Rechargeable battery with power optimization",
      image: HealthBand,
      link: "https://www.upwork.com/freelancers/~0179c1fcedadd812b6?p=1911745800519241728",
    },
    {
      title: "AppointEase",
      category: "AI Development",
      description:
        "AppointEase is an intelligent AI-powered booking assistant that automates appointment scheduling,sends reminders, and handles client communication with ease. It streamlines the entire booking process to save time and boost productivity for businesses",
      image: AiBookingAgent,
      link: "https://www.upwork.com/freelancers/~010870bc6aefbdbc8e?p=1884683313841983488",
    },
    {
      title: "AX Events",
      category: "App Development",
      description:
        "AX Events is a powerful event management application designed to simplify scheduling and attendee tracking. The app features automated WhatsApp and SMS notifications to ensure attendees receive timely updates, reminders, and alerts—improving engagement",
      image: axEvents,
      link: "https://www.upwork.com/freelancers/~010870bc6aefbdbc8e?p=1884683313841983488",
    },
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
              Explore some of our recent projects that showcase our expertise
              across different domains
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <a
                href={project.link}
                key={index}
                className="block group relative overflow-hidden rounded-2xl bg-card shadow-lg hover-lift"
              >
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
                </div>
              </a>
            ))}
          </div>

          {/* Additional Projects Teaser */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((item) => (
              <div key={item} className="glass-card p-6 text-center border-dashed border-2 border-primary/20 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary/30 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-lg font-medium mb-2 text-muted-foreground">More Projects</h3>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            ))}
          </div> */}

          {/* CTA */}
          {/* <div className="text-center">
            <p className="text-muted-foreground mb-6">Want to see your project featured here?</p>
            <Button 
              size="lg"
              className="group px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
