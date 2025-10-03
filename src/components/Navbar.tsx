import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Crown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Fleet", path: "/fleet" },
    { label: "Gallery", path: "/gallery" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary-foreground/10 shadow-royal">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Crown className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            <div>
              <div className="font-playfair font-bold text-xl text-primary">MONARCH</div>
              <div className="text-xs font-semibold text-secondary-foreground">CAR RENTAL</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-secondary-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-gold transition-all duration-300 hover:scale-105"
            >
              Reserve Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-secondary-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-secondary-foreground/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors duration-300 ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-secondary-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full"
              >
                Reserve Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
