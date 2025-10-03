import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Crown, Car, Shield, Award } from "lucide-react";
import monarchLogo from "@/assets/monarch-logo.jpeg";
import HeroSlideshow from "@/components/HeroSlideshow";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import VehicleCare from "@/components/VehicleCare";
import CTABanner from "@/components/CTABanner";

const Home = () => {
  return (
    <div className="min-h-screen font-inter">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Slideshow Background */}
        <HeroSlideshow />
        
        <div className="absolute inset-0 overflow-hidden opacity-5 z-10">
          <Crown className="absolute top-20 left-10 w-32 h-32 animate-pulse" />
          <Crown className="absolute bottom-20 right-10 w-40 h-40 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-20 container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <img 
                src={monarchLogo} 
                alt="Monarch Car Rental" 
                className="h-48 w-auto drop-shadow-2xl"
              />
            </div>

            <h1 className="font-playfair font-bold text-5xl md:text-7xl text-primary-foreground mb-6 leading-tight">
              Where Luxury Meets
              <br />
              <span className="text-primary">Affordability</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Self-drive car rentals around Nairobi and beyond. Premium vehicles at rates you can afford.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/fleet">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-gold transition-all duration-300 hover:scale-105"
                >
                  View Our Fleet
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8 text-primary-foreground/80">
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-primary">Quality</div>
                <div className="text-sm">Fleet Vehicles</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-primary">Nairobi</div>
                <div className="text-sm">& Beyond Coverage</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Car className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-playfair font-bold text-xl text-secondary mb-2">
                Premium Fleet
              </h3>
              <p className="text-muted-foreground">
                Carefully curated selection of luxury vehicles
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-playfair font-bold text-xl text-secondary mb-2">
                Fully Insured
              </h3>
              <p className="text-muted-foreground">
                Comprehensive coverage for complete peace of mind
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-playfair font-bold text-xl text-secondary mb-2">
                24/7 Service
              </h3>
              <p className="text-muted-foreground">
                Round-the-clock support for all your needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Vehicle Care */}
      <VehicleCare />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
};

export default Home;
