import { useState } from "react";
import { X } from "lucide-react";

// Honda Fit Images
import hondaFitRed from "@/assets/car-honda-fit-red.jpg";
import hondaFitRedBack from "@/assets/car-honda-fit-red-back.jpg";
import hondaFitInterior from "@/assets/car-honda-fit-interior.jpg";
import hondaFitDashboard from "@/assets/car-honda-fit-dashboard.jpg";
import hondaFitScreen from "@/assets/car-honda-fit-screen.jpg";
import hondaFitRed2 from "@/assets/honda-fit-red-side.jpg";
import hondaFitRedInterior2 from "@/assets/honda-fit-red-interior-2.jpg";
import hondaFitRedFront2 from "@/assets/honda-fit-red-front-2.jpg";
import hondaFitRedBackseat from "@/assets/honda-fit-red-backseat.jpg";
import hondaFitRedDashboard2 from "@/assets/honda-fit-red-dashboard-2.jpg";
import hondaFitRedTouchscreen from "@/assets/honda-fit-red-touchscreen.jpg";

// Mazda Demio Images
import mazdaDemioSilver from "@/assets/car-mazda-demio-silver.jpg";
import mazdaDemioWhiteBack from "@/assets/car-mazda-demio-white-back.jpg";
import mazdaDemioGauge from "@/assets/car-mazda-demio-gauge.jpg";
import mazdaDemioTrunk from "@/assets/car-mazda-demio-trunk.jpg";
import mazdaDemioSilverFront from "@/assets/mazda-demio-silver-front.jpg";
import mazdaDemioSilverBack from "@/assets/mazda-demio-silver-back.jpg";
import mazdaDemioBadge from "@/assets/mazda-demio-badge.jpg";
import mazdaDemioSilverFront2 from "@/assets/mazda-demio-silver-front-2.jpg";
import mazdaDemioSilverBack2 from "@/assets/mazda-demio-silver-back-2.jpg";
import mazdaDemioBackseat from "@/assets/mazda-demio-backseat.jpg";
import mazdaDemioFrontInterior from "@/assets/mazda-demio-front-interior.jpg";
import mazdaDemioBackLights from "@/assets/mazda-demio-back-lights.jpg";
import mazdaDemioDashboard from "@/assets/mazda-demio-dashboard.jpg";
import mazdaDemioEmergencyKit from "@/assets/mazda-demio-emergency-kit.jpg";
import mazdaDemioTrunkOpen from "@/assets/mazda-demio-trunk-open.jpg";
import mazdaDemioEngine from "@/assets/mazda-demio-engine.jpg";
import mazdaDemioBackView from "@/assets/mazda-demio-back-view.jpg";
import mazdaDemioWhiteSide from "@/assets/mazda-demio-white-side.jpg";
import mazdaDemioWhiteFront from "@/assets/mazda-demio-white-front.jpg";
import mazdaDemioWhiteBack2 from "@/assets/mazda-demio-white-back-2.jpg";
import mazdaDemioWhiteEngine from "@/assets/mazda-demio-white-engine.jpg";
import mazdaDemioWheel from "@/assets/mazda-demio-wheel.jpg";
import mazdaDemioWhiteBackseat from "@/assets/mazda-demio-white-backseat.jpg";
import mazdaDemioWhiteTrunk from "@/assets/mazda-demio-white-trunk.jpg";
import mazdaDemioControls from "@/assets/mazda-demio-controls.jpg";
import mazdaDemioWhiteInterior from "@/assets/mazda-demio-white-interior.jpg";
import mazdaDemioGrayFront from "@/assets/mazda-demio-gray-front.jpg";

// Nissan Note Images
import nissanNoteWhite from "@/assets/car-nissan-note-white.jpg";
import nissanNoteSilver from "@/assets/nissan-note-silver.jpg";
import nissanNoteBack from "@/assets/nissan-note-back.jpg";
import nissanNoteFront from "@/assets/nissan-note-front.jpg";
import nissanNoteSide from "@/assets/nissan-note-side.jpg";
import nissanNoteBackAngle from "@/assets/nissan-note-back-angle.jpg";
import nissanNoteInterior from "@/assets/nissan-note-interior.jpg";

// Mazda Detail Images
import mazdaDemioEngineOpen from "@/assets/mazda-demio-engine-open.jpg";
import mazdaDemioHeadlight from "@/assets/mazda-demio-headlight.jpg";
import mazdaInteriorFull from "@/assets/mazda-interior-full.jpg";
import mazdaSteeringWheel from "@/assets/mazda-steering-wheel.jpg";


// Mazda CX-5 Images
import mazdaCx5WhiteBack from "@/assets/mazda-cx5-white-back.jpg";
import mazdaCx5WhiteFront from "@/assets/mazda-cx5-white-front.jpg";
import mazdaCx5RedFront from "@/assets/mazda-cx5-red-front.jpg";
import mazdaCx5RedSide from "@/assets/mazda-cx5-red-side.jpg";


// Range Rover Images
import rangeRoverWhiteBack from "@/assets/range-rover-white-back.jpg";
import rangeRoverWhiteFront from "@/assets/range-rover-white-front.jpg";

// Toyota Harrier Images
import toyotaHarrierBlackFront from "@/assets/toyota-harrier-black-front.jpg";
import toyotaHarrierBlackBack from "@/assets/toyota-harrier-black-back.jpg";

const galleryImages = [
  // Honda Fit
  { src: hondaFitRed, alt: "Honda Fit Red", category: "Honda Fit" },
  { src: hondaFitRedBack, alt: "Honda Fit Red Back", category: "Honda Fit" },
  { src: hondaFitInterior, alt: "Honda Fit Interior", category: "Honda Fit" },
  { src: hondaFitDashboard, alt: "Honda Fit Dashboard", category: "Honda Fit" },
  { src: hondaFitScreen, alt: "Honda Fit Screen", category: "Honda Fit" },
  { src: hondaFitRed2, alt: "Honda Fit Red Side View", category: "Honda Fit" },
  { src: hondaFitRedInterior2, alt: "Honda Fit Interior 2", category: "Honda Fit" },
  { src: hondaFitRedFront2, alt: "Honda Fit Front", category: "Honda Fit" },
  { src: hondaFitRedBackseat, alt: "Honda Fit Backseat", category: "Honda Fit" },
  { src: hondaFitRedDashboard2, alt: "Honda Fit Dashboard 2", category: "Honda Fit" },
  { src: hondaFitRedTouchscreen, alt: "Honda Fit Touchscreen", category: "Honda Fit" },
  
  // Mazda Demio
  { src: mazdaDemioSilver, alt: "Mazda Demio Silver", category: "Mazda Demio" },
  { src: mazdaDemioWhiteBack, alt: "Mazda Demio White Back", category: "Mazda Demio" },
  { src: mazdaDemioGauge, alt: "Mazda Demio Gauge", category: "Mazda Demio" },
  { src: mazdaDemioTrunk, alt: "Mazda Demio Trunk", category: "Mazda Demio" },
  { src: mazdaDemioSilverFront, alt: "Mazda Demio Silver Front", category: "Mazda Demio" },
  { src: mazdaDemioSilverBack, alt: "Mazda Demio Silver Back", category: "Mazda Demio" },
  { src: mazdaDemioBadge, alt: "Mazda Demio Badge", category: "Mazda Demio" },
  { src: mazdaDemioSilverFront2, alt: "Mazda Demio Silver Front 2", category: "Mazda Demio" },
  { src: mazdaDemioSilverBack2, alt: "Mazda Demio Silver Back 2", category: "Mazda Demio" },
  { src: mazdaDemioBackseat, alt: "Mazda Demio Backseat", category: "Mazda Demio" },
  { src: mazdaDemioFrontInterior, alt: "Mazda Demio Front Interior", category: "Mazda Demio" },
  { src: mazdaDemioBackLights, alt: "Mazda Demio Back Lights", category: "Mazda Demio" },
  { src: mazdaDemioDashboard, alt: "Mazda Demio Dashboard", category: "Mazda Demio" },
  { src: mazdaDemioEmergencyKit, alt: "Mazda Demio Emergency Kit", category: "Mazda Demio" },
  { src: mazdaDemioTrunkOpen, alt: "Mazda Demio Trunk Open", category: "Mazda Demio" },
  { src: mazdaDemioEngine, alt: "Mazda Demio Engine", category: "Mazda Demio" },
  { src: mazdaDemioBackView, alt: "Mazda Demio Back View", category: "Mazda Demio" },
  { src: mazdaDemioWhiteSide, alt: "Mazda Demio White Side", category: "Mazda Demio" },
  { src: mazdaDemioWhiteFront, alt: "Mazda Demio White Front", category: "Mazda Demio" },
  { src: mazdaDemioWhiteBack2, alt: "Mazda Demio White Back", category: "Mazda Demio" },
  { src: mazdaDemioWhiteEngine, alt: "Mazda Demio White Engine", category: "Mazda Demio" },
  { src: mazdaDemioWheel, alt: "Mazda Demio Wheel", category: "Mazda Demio" },
  { src: mazdaDemioWhiteBackseat, alt: "Mazda Demio White Backseat", category: "Mazda Demio" },
  { src: mazdaDemioWhiteTrunk, alt: "Mazda Demio White Trunk", category: "Mazda Demio" },
  { src: mazdaDemioControls, alt: "Mazda Demio Controls", category: "Mazda Demio" },
  { src: mazdaDemioWhiteInterior, alt: "Mazda Demio White Interior", category: "Mazda Demio" },
  { src: mazdaDemioGrayFront, alt: "Mazda Demio Gray Front", category: "Mazda Demio" },
  
  // Nissan Note
  { src: nissanNoteWhite, alt: "Nissan Note White", category: "Nissan Note" },
  { src: nissanNoteSilver, alt: "Nissan Note Silver Exterior", category: "Nissan Note" },
  { src: nissanNoteFront, alt: "Nissan Note Front View", category: "Nissan Note" },
  { src: nissanNoteSide, alt: "Nissan Note Side View", category: "Nissan Note" },
  { src: nissanNoteBack, alt: "Nissan Note Back View", category: "Nissan Note" },
  { src: nissanNoteBackAngle, alt: "Nissan Note Back Angle", category: "Nissan Note" },
  { src: nissanNoteInterior, alt: "Nissan Note Interior", category: "Nissan Note" },
  
  // Mazda Details
  { src: mazdaDemioEngineOpen, alt: "Mazda Engine Bay", category: "Mazda Demio" },
  { src: mazdaDemioHeadlight, alt: "Mazda Headlight Detail", category: "Mazda Demio" },
  { src: mazdaInteriorFull, alt: "Mazda Interior Full View", category: "Mazda Demio" },
  { src: mazdaSteeringWheel, alt: "Mazda Steering Wheel", category: "Mazda Demio" },
  
  // Mazda CX-5
  { src: mazdaCx5WhiteBack, alt: "Mazda CX-5 White Back", category: "Mazda CX-5" },
  { src: mazdaCx5WhiteFront, alt: "Mazda CX-5 White Front", category: "Mazda CX-5" },
  { src: mazdaCx5RedFront, alt: "Mazda CX-5 Red Front", category: "Mazda CX-5" },
  { src: mazdaCx5RedSide, alt: "Mazda CX-5 Red Side", category: "Mazda CX-5" },
  
  // Range Rover
  { src: rangeRoverWhiteBack, alt: "Range Rover White Back", category: "Range Rover Sport" },
  { src: rangeRoverWhiteFront, alt: "Range Rover White Front", category: "Range Rover Sport" },
  
  // Toyota Harrier
  { src: toyotaHarrierBlackFront, alt: "Toyota Harrier Black Front", category: "Toyota Harrier" },
  { src: toyotaHarrierBlackBack, alt: "Toyota Harrier Black Back", category: "Toyota Harrier" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen font-inter bg-background">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/95 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-primary-foreground mb-6">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Explore our collection of premium vehicles - every angle, every detail
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30 sticky top-0 z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-gold"
                    : "bg-card text-foreground hover:bg-primary/10 border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-gold transition-all duration-300 cursor-pointer aspect-square"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-primary-foreground">
                    <p className="font-semibold">{image.category}</p>
                    <p className="text-sm text-primary-foreground/80">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
