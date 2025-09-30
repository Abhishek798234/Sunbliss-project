import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Phone, Mail, MapPin, Clock, FileText } from "lucide-react";

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
  const [showBrochureDialog, setShowBrochureDialog] = useState(false);
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
              onClick={() => setShowBrochureDialog(true)}
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

      <Dialog open={showBrochureDialog} onOpenChange={setShowBrochureDialog}>
        <DialogContent className="sm:max-w-[425px] bg-background border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-foreground text-center flex items-center justify-center gap-2">
              <FileText className="w-6 h-6 text-secondary" />
              Exclusive Brochure Available
            </DialogTitle>
          </DialogHeader>
          
          <div className="text-center space-y-6 p-6">
            <div className="w-20 h-20 mx-auto bg-gradient-golden rounded-full flex items-center justify-center">
              <FileText className="w-10 h-10 text-secondary-foreground" />
            </div>
            
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                🌟 To access our detailed floor plans, premium amenities, and luxury features brochure, 
                please schedule a site visit first! ✨
              </p>
            </div>

            <Button 
              onClick={() => {
                setShowBrochureDialog(false);
                onScheduleVisitClick?.();
              }}
              variant="golden" 
              size="lg"
              className="w-full font-medium flex items-center gap-2"
            >
              📅 Schedule Visit to Download
            </Button>
            
            <p className="text-sm text-muted-foreground">
              🎯 Schedule a visit to unlock the brochure download!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};