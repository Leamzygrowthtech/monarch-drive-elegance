import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Users, Gauge, Shield } from "lucide-react";
import executiveSedanImg from "@/assets/executive-sedan.jpg";
import luxurySuvImg from "@/assets/luxury-suv.jpg";
import sportsCarImg from "@/assets/sports-car.jpg";
import armoredVehicleImg from "@/assets/armored-vehicle.jpg";

const fleetData = [
  {
    category: "Executive Sedans",
    description: "Sophisticated comfort for business travel",
    features: ["5 Passengers", "Premium Audio", "GPS Navigation"],
    icon: Crown,
    image: executiveSedanImg,
  },
  {
    category: "Luxury SUVs",
    description: "Spacious elegance for family adventures",
    features: ["7 Passengers", "All-Wheel Drive", "Premium Interior"],
    icon: Users,
    image: luxurySuvImg,
  },
  {
    category: "Sports Cars",
    description: "Thrilling performance on demand",
    features: ["High Performance", "Premium Handling", "Luxury Finish"],
    icon: Gauge,
    image: sportsCarImg,
  },
  {
    category: "Armored Vehicles",
    description: "Ultimate security and protection",
    features: ["VIP Security", "Bulletproof", "Professional Driver"],
    icon: Shield,
    image: armoredVehicleImg,
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
                  <ul className="space-y-2 mb-6">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-center justify-center gap-2">
                        <Crown className="w-3 h-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    View Details
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
