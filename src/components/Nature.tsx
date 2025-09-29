import { Button } from "@/components/ui/button";
import natureView from "@/assets/nature-view.jpg";

export const Nature = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image First */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-luxury">
              <img 
                src={natureView} 
                alt="Serene balcony view with landscaped gardens at Purvanchal SunBliss"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-secondary italic">A Breath</h3>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                OF NATURE,<br />
                RIGHT OUTSIDE<br />
                YOUR DOOR
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Step onto your balcony and take in the serene beauty of landscaped greens 
              merging with expansive views. This is where nature and modern living coexist 
              in perfect harmony - creating a peaceful retreat just beyond your living space.
            </p>

            <div className="space-y-4">
              <h4 className="font-serif text-xl font-semibold text-foreground">Natural Features:</h4>
              <div className="space-y-3">
                {[
                  "Landscaped Gardens & Green Spaces",
                  "Peaceful Walking Paths",
                  "Serene Water Features", 
                  "Premium Balcony Views",
                  "Fresh Air & Natural Light"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <p className="text-foreground font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};