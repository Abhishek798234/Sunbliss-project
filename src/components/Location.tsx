import { useState } from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Car, Building, Plane } from "lucide-react";
import { LocationMapDialog } from "./LocationMapDialog";

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
  const [isMapDialogOpen, setIsMapDialogOpen] = useState(false);
  return (
    <section id="location" className="py-20 bg-[#1B0C22]">
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
            className="p-8 bg-gradient-golden text-secondary-foreground inline-block cursor-pointer hover:shadow-golden transition-all duration-300 hover:-translate-y-1"
            onClick={() => setIsMapDialogOpen(true)}
          >
            <h4 className="font-serif text-2xl font-semibold mb-2">LOCATION MAP</h4>
            <p className="text-sm opacity-90">Click to view detailed location map</p>
          </Card>
        </div>

        <LocationMapDialog 
          open={isMapDialogOpen} 
          onOpenChange={setIsMapDialogOpen} 
        />
      </div>
    </section>
  );
};