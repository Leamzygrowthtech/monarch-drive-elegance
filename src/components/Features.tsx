import { Clock, Shield, Award, Headphones } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service to meet your needs anytime, anywhere",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Comprehensive coverage for complete peace of mind",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Meticulously maintained vehicles meeting the highest standards",
  },
  {
    icon: Headphones,
    title: "Concierge Service",
    description: "Dedicated support team for a seamless experience",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-secondary/95 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            The Monarch Difference
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Experience luxury car rental redefined
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-playfair font-bold text-xl text-primary-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
