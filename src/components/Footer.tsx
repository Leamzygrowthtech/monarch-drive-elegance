import { Crown } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-8 h-8 text-primary" />
              <div>
                <div className="font-playfair font-bold text-2xl text-primary">MONARCH</div>
                <div className="font-semibold text-secondary-foreground">CAR RENTAL</div>
              </div>
            </div>
            <p className="text-secondary-foreground/70 max-w-md leading-relaxed">
              Experience royalty on the road with our premium luxury vehicle rental service. 
              Exceptional quality, unmatched service, unforgettable journeys.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-lg text-secondary-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/fleet" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-playfair font-bold text-lg text-secondary-foreground mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#terms" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} Monarch Car Rental. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#facebook" className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm">
                Facebook
              </a>
              <a href="#instagram" className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm">
                Instagram
              </a>
              <a href="#twitter" className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm">
                Twitter
              </a>
              <a href="#linkedin" className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
