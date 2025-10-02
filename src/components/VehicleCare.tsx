import { CheckCircle2 } from "lucide-react";
import vehicleCareImg from "@/assets/vehicle-care.jpg";

const VehicleCare = () => {
  const carePoints = [
    "Professional detailing after every rental",
    "Comprehensive safety inspections",
    "Premium grade fuel and fluids",
    "Regular manufacturer servicing",
    "24/7 roadside assistance included",
    "Sanitized and pristine interiors",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative rounded-2xl overflow-hidden shadow-gold group">
            <img 
              src={vehicleCareImg} 
              alt="Premium Vehicle Care"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-playfair font-bold text-3xl text-primary-foreground mb-2">
                Premium Care
              </h3>
              <p className="text-primary-foreground/90">
                Every detail matters to us
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-secondary mb-6">
              Excellence in <span className="text-primary">Every Mile</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to excellence extends beyond the vehicles themselves. 
              Every car in our fleet receives meticulous care and attention to ensure 
              you experience nothing but perfection.
            </p>

            <div className="space-y-4">
              {carePoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleCare;
