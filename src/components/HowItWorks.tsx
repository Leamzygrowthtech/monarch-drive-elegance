import { Search, Calendar, Key, Crown } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Our Fleet",
    description: "Explore our collection of premium luxury vehicles",
    number: "01",
  },
  {
    icon: Calendar,
    title: "Select Dates",
    description: "Choose your pickup and return dates and location",
    number: "02",
  },
  {
    icon: Key,
    title: "Book Instantly",
    description: "Secure your reservation with our simple booking process",
    number: "03",
  },
  {
    icon: Crown,
    title: "Drive in Style",
    description: "Pick up your vehicle and experience royalty on the road",
    number: "04",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-secondary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to your luxury driving experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" style={{ top: '4rem' }} />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-playfair font-bold text-primary-foreground text-lg shadow-gold z-10">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="mb-6 pt-12 flex justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-card border-2 border-primary/20 flex items-center justify-center group hover:border-primary hover:shadow-gold transition-all duration-300">
                    <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-playfair font-bold text-xl text-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
