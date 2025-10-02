import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";
import monarchLogo from "@/assets/monarch-logo.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/80" />
      
      {/* Animated crown icons */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <Crown className="absolute top-20 left-10 w-32 h-32 animate-pulse" />
        <Crown className="absolute bottom-20 right-10 w-40 h-40 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={monarchLogo} 
              alt="Monarch Car Rental" 
              className="h-48 w-auto drop-shadow-2xl"
            />
          </div>

          {/* Headline */}
          <h1 className="font-playfair font-bold text-5xl md:text-7xl text-primary-foreground mb-6 leading-tight">
            Experience Royalty
            <br />
            <span className="text-primary">On The Road</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Premium luxury vehicles, exceptional service, and unmatched comfort for your journey
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-gold transition-all duration-300 hover:scale-105"
            >
              Reserve Your Vehicle
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              View Our Fleet
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-primary-foreground/80">
            <div className="text-center">
              <div className="font-playfair text-4xl font-bold text-primary">500+</div>
              <div className="text-sm">Premium Vehicles</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-4xl font-bold text-primary">50+</div>
              <div className="text-sm">Locations</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-4xl font-bold text-primary">10k+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
