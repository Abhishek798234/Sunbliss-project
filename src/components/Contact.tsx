import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+918377951951"],
    action: "tel:+918377951951"
  },
  {
    icon: Mail,
    title: "Email Us", 
    details: ["Gainacre@gmail.com","info@gainacre.com"],
    action: "mailto:Gainacre@gmail.com"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["UG-30, Sethi Mart, Sector-150, Noida, UP-201301"],
    action: "#"
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sun: 10:00 AM - 6:00 PM"],
    action: "#"
  }
];

interface ContactProps {
  onScheduleVisitClick?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onScheduleVisitClick }) => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to make Purvanchal SunBliss your new home? Contact our sales team 
            for personalized assistance and to schedule your exclusive site visit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-luxury transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="luxury" 
              size="xl" 
              className="font-medium"
              onClick={onScheduleVisitClick}
            >
              Schedule Site Visit
            </Button>
            <Button 
              variant="golden" 
              size="xl" 
              className="font-medium"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/SunBliss Brochure.pdf';
                link.download = 'SunBliss Brochure.pdf';
                link.click();
              }}
            >
              Download Brochure
            </Button>
          </div>
          
          <div className="bg-gradient-golden/10 p-8 rounded-lg border border-secondary/20">
            <h4 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Exclusive Pre-Launch Offers Available
            </h4>
            <p className="text-muted-foreground mb-4">
              Limited time special pricing and payment plans for early investors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};