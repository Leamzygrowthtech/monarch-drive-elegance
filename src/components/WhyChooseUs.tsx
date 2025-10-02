import { MapPin, Clock, Wrench, HeadphonesIcon } from "lucide-react";
import globalNetworkImg from "@/assets/global-network.jpg";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Global Presence",
      description: "50+ locations worldwide for your convenience",
    },
    {
      icon: Clock,
      title: "Instant Booking",
      description: "Reserve your vehicle in under 2 minutes",
    },
    {
      icon: Wrench,
      title: "Premium Maintenance",
      description: "Every vehicle meticulously serviced and inspected",
    },
    {
      icon: HeadphonesIcon,
      title: "VIP Support",
      description: "Dedicated concierge available 24/7",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={globalNetworkImg} 
          alt="Global Network"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-secondary mb-4">
            Why Choose Monarch?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that true luxury service makes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-gold">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-playfair font-bold text-xl text-secondary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
