import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Home, FileText } from "lucide-react";

interface ExploreResidencesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ExploreResidencesDialog: React.FC<ExploreResidencesDialogProps> = ({ open, onOpenChange }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/SunBliss Brochure.pdf';
    link.download = 'SunBliss Brochure.pdf';
    link.click();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-foreground text-center flex items-center justify-center gap-2">
            <Home className="w-6 h-6 text-secondary" />
            Explore Our Residences 🏡
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-6 p-6">
          <div className="w-20 h-20 mx-auto bg-gradient-golden rounded-full flex items-center justify-center">
            <FileText className="w-10 h-10 text-secondary-foreground" />
          </div>
          
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">
              📖 Download Our Exclusive Brochure
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              🌟 Discover detailed floor plans, premium amenities, and luxury features of Purvanchal SunBliss. 
              Get complete information about our residences! ✨
            </p>
          </div>

          <Button 
            onClick={handleDownload}
            variant="golden" 
            size="lg"
            className="w-full font-medium flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            📥 Download Brochure
          </Button>
          
          <p className="text-sm text-muted-foreground">
            🎯 Everything you need to know about your dream home!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};