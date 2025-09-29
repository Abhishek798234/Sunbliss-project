import { Card } from "@/components/ui/card";
import { MapPin, Car, Building, Plane } from "lucide-react";

const locationFeatures = [
  {
    icon: Car,
    title: "Major Highways",
    description: "Seamless connectivity to key routes"
  },
  {
    icon: Building,
    title: "Business Hubs", 
    description: "Close to commercial centers"
  },
  {
    icon: MapPin,
    title: "Lifestyle Destinations",
    description: "Shopping, dining, and entertainment"
  },
  {
    icon: Plane,
    title: "Transport Links",
    description: "Easy access to airports and stations"
  }
];

export const Location = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            AT THE CENTER OF CONNECTIVITY
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Live in a location that keeps you close to what matters - seamlessly connected 
            to major highways, business hubs, and lifestyle destinations. This thoughtfully 
            planned address offers a refined balance of comfort, style, and everyday exclusivity. 
            Discover a private retreat where modern living meets unmatched convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locationFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 bg-card">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-golden rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card 
            className="p-8 bg-gradient-primary text-primary-foreground inline-block cursor-pointer hover:shadow-luxury transition-all duration-300 hover:-translate-y-1"
            onClick={() => window.open('https://maps.app.goo.gl/C6HVb4JLes8Fat1U6', '_blank')}
          >
            <h4 className="font-serif text-2xl font-semibold mb-2">LOCATION MAP</h4>
            
          </Card>
        </div>
      </div>
    </section>
  );
};