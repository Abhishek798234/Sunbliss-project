import { Card } from "@/components/ui/card";
import lifestyleImage from "@/assets/lifestyle-image.jpg";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-secondary italic">Experience</h3>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                THE IDEAL BLEND<br />OF COMFORT, STYLE,<br />AND SMART LIVING
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thoughtfully designed, these residences are available in multiple configurations, 
              spacious layouts, and premium specifications. Located in a prime area, these 
              residences are tailored to meet a variety of lifestyle needs - ideal for 
              individuals, couples, and families.
            </p>

            <div className="space-y-4">
              <h4 className="font-serif text-xl font-semibold text-foreground">UNIT CONFIGURATIONS:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "4 BHK with Servant Room",
                  "3 BHK with Servant & Study Room", 
                  "3 BHK with Servant Room",
                  "3 BHK with 3 Toilets",
                  "1 BHK"
                ].map((config, index) => (
                  <Card key={index} className="p-4 border-l-4 border-l-secondary bg-card/50">
                    <p className="font-medium text-foreground">{config}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-luxury">
              <img 
                src={lifestyleImage} 
                alt="Luxury family lifestyle at Purvanchal SunBliss"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};