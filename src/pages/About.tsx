import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import { Crown } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen font-inter">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/95 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <Crown className="absolute top-10 left-10 w-40 h-40 animate-pulse" />
          <Crown className="absolute bottom-10 right-10 w-40 h-40 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-primary-foreground mb-6">
              About <span className="text-primary">Monarch</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Founded on the principle that luxury travel should be accessible, Monarch Car Rental 
              has been delivering exceptional experiences since our inception. We believe every journey 
              deserves the royal treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair font-bold text-3xl md:text-4xl text-secondary mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Monarch Car Rental was born from a simple vision: to transform the car rental 
                  experience into something extraordinary. We recognized that travelers deserve 
                  more than just transportation—they deserve an experience that matches their 
                  aspirations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Today, we operate across 50+ locations worldwide, maintaining a fleet of over 
                  500 premium vehicles. Each vehicle is carefully selected and meticulously 
                  maintained to ensure the highest standards of luxury, safety, and performance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment to excellence has earned us the trust of over 10,000 satisfied 
                  customers, from business executives to families seeking memorable adventures.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6 text-center shadow-soft">
                  <div className="font-playfair text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Premium Vehicles</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center shadow-soft">
                  <div className="font-playfair text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Global Locations</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center shadow-soft">
                  <div className="font-playfair text-4xl font-bold text-primary mb-2">10k+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center shadow-soft">
                  <div className="font-playfair text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* How It Works */}
      <HowItWorks />

      {/* Mission & Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-secondary mb-12">
              Our Mission & Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-secondary mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in every aspect of our service
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-secondary mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  Transparency and honesty guide all our customer relationships
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-secondary mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously improving to exceed customer expectations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
