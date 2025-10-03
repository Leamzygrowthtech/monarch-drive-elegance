import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import { Crown } from "lucide-react";
import teamServiceImg from "@/assets/team-service.jpg";

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
              Where luxury meets affordability. MONARCH CAR RENTAL offers self-drive car rentals 
              around Nairobi and beyond, making premium vehicles accessible to everyone.
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
                  MONARCH CAR RENTAL was founded on the belief that luxury shouldn't come with 
                  an unreachable price tag. Based in Nairobi at Umoja Phase 2, Bee Center, we 
                  provide self-drive car rental services that combine premium quality with 
                  affordability.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our fleet includes well-maintained vehicles like the Honda Fit, Mazda Demio, 
                  and Nissan Note - all equipped with modern features to make your journey 
                  comfortable and enjoyable. Whether you're exploring Nairobi or heading beyond, 
                  we've got you covered.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With 24/7 customer support at +254 0759 342212, we're always here to ensure 
                  your car rental experience is smooth and hassle-free. Your journey matters 
                  to us.
                </p>
              </div>
              
              {/* Image & Stats Grid */}
              <div className="space-y-6">
                <div className="relative rounded-lg overflow-hidden shadow-gold">
                  <img 
                    src={teamServiceImg} 
                    alt="Monarch Team Service"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-lg p-6 text-center shadow-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                    <div className="font-playfair text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Quality Vehicles</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6 text-center shadow-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                    <div className="font-playfair text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Customer Support</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6 text-center shadow-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                    <div className="font-playfair text-4xl font-bold text-primary mb-2">Nairobi</div>
                    <div className="text-sm text-muted-foreground">Based Location</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6 text-center shadow-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                    <div className="font-playfair text-4xl font-bold text-primary mb-2">Self</div>
                    <div className="text-sm text-muted-foreground">Drive Rentals</div>
                  </div>
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
                <h3 className="font-playfair font-bold text-xl text-secondary mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  Well-maintained vehicles with modern features for your comfort
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-secondary mb-3">Affordability</h3>
                <p className="text-muted-foreground">
                  Premium vehicles at rates that won't break your budget
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-secondary mb-3">Reliability</h3>
                <p className="text-muted-foreground">
                  24/7 support ensuring you're never stranded on the road
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
