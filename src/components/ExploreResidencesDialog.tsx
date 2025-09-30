import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Home, FileText } from "lucide-react";

interface ExploreResidencesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onScheduleVisit: () => void;
}

export const ExploreResidencesDialog: React.FC<ExploreResidencesDialogProps> = ({ open, onOpenChange, onScheduleVisit }) => {

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
              📖 Exclusive Brochure Available
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              🌟 To access our detailed floor plans, premium amenities, and luxury features brochure, 
              please schedule a site visit first! ✨
            </p>
          </div>

          <Button 
            onClick={() => {
              onOpenChange(false);
              onScheduleVisit();
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
  );
};