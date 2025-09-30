import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Car className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">AutoInvest SACCO</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#investment" className="text-foreground hover:text-primary transition-colors font-medium">
              Investment Model
            </a>
            <a href="#vehicles" className="text-foreground hover:text-primary transition-colors font-medium">
              Vehicles
            </a>
            <a href="#performance" className="text-foreground hover:text-primary transition-colors font-medium">
              Performance
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="font-semibold">
              Member Login
            </Button>
            <Button className="bg-gradient-primary text-primary-foreground font-semibold shadow-medium hover:shadow-large transition-all">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <a href="#home" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#investment" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              Investment Model
            </a>
            <a href="#vehicles" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              Vehicles
            </a>
            <a href="#performance" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              Performance
            </a>
            <a href="#contact" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <div className="pt-3 space-y-2">
              <Button variant="outline" className="w-full font-semibold">
                Member Login
              </Button>
              <Button className="w-full bg-gradient-primary text-primary-foreground font-semibold">
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;