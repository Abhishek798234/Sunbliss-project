import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import locationMap from "@/assets/loc.png";

interface LocationMapDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LocationMapDialog: React.FC<LocationMapDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full bg-background border-border p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-serif text-foreground">
              Location Map - Purvanchal SunBliss
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onOpenChange(false)}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="p-6 pt-0">
          <div className="relative w-full">
            <img
              src={locationMap}
              alt="Purvanchal SunBliss Location Map"
              className="w-full h-auto rounded-lg shadow-lg bg-white"
              onError={(e) => {
                // Fallback to Google Maps embed if image not found
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            
            {/* Fallback Google Maps embed */}
            <div 
              className="w-full h-96 rounded-lg shadow-lg hidden"
              style={{ display: 'none' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292249863158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Purvanchal SunBliss Location"
              />
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-muted-foreground mb-4">
              Strategically located with excellent connectivity to major highways and business hubs
            </p>
            <Button
              variant="golden"
              onClick={() => window.open('https://maps.app.goo.gl/C6HVb4JLes8Fat1U6', '_blank')}
              className="font-medium"
            >
              Open in Google Maps
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};