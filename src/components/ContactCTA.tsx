import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
            Ready to Experience Royal Treatment?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
            Contact us today to reserve your luxury vehicle or speak with our concierge team
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
                <Phone className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-primary-foreground mb-1">Call Us</div>
                <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
                <Mail className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-primary-foreground mb-1">Email Us</div>
                <a href="mailto:info@monarchrental.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@monarchrental.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-primary-foreground mb-1">Visit Us</div>
                <p className="text-primary-foreground/80">50+ Locations Worldwide</p>
              </div>
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-10 py-6 text-lg shadow-royal transition-all duration-300 hover:scale-105"
          >
            Book Your Luxury Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
