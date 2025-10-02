import Fleet from "@/components/Fleet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FleetPage = () => {
  return (
    <div className="min-h-screen font-inter">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/95 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-primary-foreground mb-6">
              Our Premium <span className="text-primary">Fleet</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Discover our carefully curated collection of luxury vehicles, meticulously maintained 
              and ready to deliver an exceptional driving experience
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Component */}
      <Fleet />

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-secondary mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our concierge team is ready to help you find the perfect vehicle for your needs
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg shadow-gold transition-all duration-300 hover:scale-105"
              >
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetPage;
