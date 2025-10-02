import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

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
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Our concierge team is ready to assist you with reservations, questions, 
              or any special requests
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-playfair font-bold text-3xl text-secondary mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                    <p className="text-sm text-muted-foreground">24/7 Support Line</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Email</h3>
                    <a href="mailto:info@monarchrental.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@monarchrental.com
                    </a>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Locations</h3>
                    <p className="text-muted-foreground">50+ Locations Worldwide</p>
                    <p className="text-sm text-muted-foreground">Find your nearest branch</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Mon - Sun: 24/7</p>
                    <p className="text-sm text-muted-foreground">Always at your service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8 shadow-soft">
              <h2 className="font-playfair font-bold text-2xl text-secondary mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (234) 567-890" 
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..." 
                    className="mt-2 min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-gold transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent relative overflow-hidden">
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
              Reserve your luxury vehicle today and experience the Monarch difference
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
    </div>
  );
};

export default Contact;
