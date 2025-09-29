import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">PURVANCHAL SUNBLISS</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Where every day begins in light, and every moment begins with a dream. 
              Experience luxury living redefined.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "About SunBliss",
                "Unit Configurations", 
                "Amenities",
                "Location Advantages",
                "Payment Plans",
                "Contact Us"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Key Features</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Premium Vitrified Tiles",
                "Modular Kitchen with Appliances",
                "Split AC & Furniture Included",
                "RO Water System",
                "Power Backup 3 KVA",
                "FTTH Fiber Connectivity"
              ].map((spec, index) => (
                <li key={index} className="text-primary-foreground/80">
                  • {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Purvanchal SunBliss. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              RERA Registration
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            Disclaimer: All renderings and images shown are for representational purposes only. 
            Actual specifications and features may vary. Please verify all details before purchase.
          </p>
        </div>
      </div>
    </footer>
  );
};