import Hero from "@/components/Hero";
import Fleet from "@/components/Fleet";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Hero />
      <Fleet />
      <Features />
      <HowItWorks />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
