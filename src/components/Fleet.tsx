import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Users, Gauge, Shield, Crown, MapPin } from "lucide-react";
import hondaFitImg from "@/assets/car-honda-fit-red.jpg";
import mazdaDemioSilverImg from "@/assets/car-mazda-demio-silver.jpg";
import mazdaDemioWhiteImg from "@/assets/car-mazda-demio-white-back.jpg";
import nissanNoteImg from "@/assets/car-nissan-note-white.jpg";
import hondaFitRed2 from "@/assets/honda-fit-red-side.jpg";
import mazdaDemioSilverFront from "@/assets/mazda-demio-silver-front.jpg";
import mazdaDemioSilverBack from "@/assets/mazda-demio-silver-back.jpg";

const fleetData = [
  {
    category: "Honda Fit",
    description: "Compact and fuel-efficient city car",
    features: ["5 Passengers", "Automatic", "Touchscreen Display"],
    icon: Car,
    image: hondaFitImg,
    priceNairobi: "3,000 KSH",
    priceOutside: "3,500 KSH",
    type: "Self-drive"
  },
  {
    category: "Mazda Demio",
    description: "Stylish and comfortable for city drives",
    features: ["5 Passengers", "Fuel Efficient", "Modern Interior"],
    icon: Users,
    image: mazdaDemioSilverImg,
    priceNairobi: "3,000 KSH",
    priceOutside: "3,500 KSH",
    type: "Self-drive"
  },
  {
    category: "Mazda Demio Sport",
    description: "Sporty design with great handling",
    features: ["5 Passengers", "Sport Mode", "Premium Features"],
    icon: Gauge,
    image: mazdaDemioWhiteImg,
    priceNairobi: "3,000 KSH",
    priceOutside: "3,500 KSH",
    type: "Self-drive"
  },
  {
    category: "Nissan Note",
    description: "Spacious and reliable family car",
    features: ["5 Passengers", "Electric Hybrid", "Spacious Cabin"],
    icon: Shield,
    image: nissanNoteImg,
    priceNairobi: "3,000 KSH",
    priceOutside: "3,500 KSH",
    type: "Self-drive"
  },
  {
    category: "Honda Fit - KDK 534D",
    description: "Modern red Honda Fit with premium features",
    features: ["5 Passengers", "Automatic", "Touchscreen Display"],
    icon: Car,
    image: hondaFitRed2,
    priceNairobi: "3,000 KSH",
    priceOutside: "3,500 KSH",
    type: "Self-drive"
  },
  {
    category: "Mazda Demio - KDN 798D",
    description: "Silver Mazda Demio with elegant styling",
    features: ["5 Passengers", "Fuel Efficient", "Modern Design"],
    icon: Users,
    image: mazdaDemioSilverFront,
    priceNairobi: "3,000 KSH",
    priceOutside: "3,500 KSH",
    type: "Self-drive"
  },
];

const Fleet = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-secondary mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated selection of luxury vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fleetData.map((vehicle, index) => {
            const Icon = vehicle.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary bg-card overflow-hidden"
              >
                {/* Vehicle Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-gold">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                <CardContent className="p-6 text-center">
                  <h3 className="font-playfair font-bold text-xl text-secondary mb-2">
                    {vehicle.category}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {vehicle.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-center justify-center gap-2">
                        <Crown className="w-3 h-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Pricing Info */}
                  <div className="bg-muted/30 rounded-lg p-4 mb-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        Within Nairobi
                      </span>
                      <span className="font-semibold text-primary">{vehicle.priceNairobi}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        Outside Nairobi
                      </span>
                      <span className="font-semibold text-primary">{vehicle.priceOutside}</span>
                    </div>
                    <div className="text-xs text-center text-muted-foreground border-t border-border pt-2">
                      {vehicle.type}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
