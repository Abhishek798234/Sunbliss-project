import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";
import { ExploreResidencesDialog } from "./ExploreResidencesDialog";

interface HeroProps {
  onScheduleVisitClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleVisitClick }) => {
  const [isExploreDialogOpen, setIsExploreDialogOpen] = useState(false);
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
          PURVANCHAL SUNBLISS
        </h1>
        <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 max-w-3xl mx-auto">
           CREATING INNOVATIVE SPACES<br />
          AND BUILDING THE<br />
          FUTURE
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="golden" 
            size="xl" 
            className="font-medium"
            onClick={() => setIsExploreDialogOpen(true)}
          >
            Explore Residences
          </Button>
          <Button variant="hero" size="xl" className="font-medium" onClick={onScheduleVisitClick}>
            Schedule Visit
          </Button>
        </div>
      </div>

      <ExploreResidencesDialog 
        open={isExploreDialogOpen} 
        onOpenChange={setIsExploreDialogOpen}
        onScheduleVisit={onScheduleVisitClick}
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};