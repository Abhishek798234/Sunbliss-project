import React, { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Location } from "@/components/Location";
import { Nature } from "@/components/Nature";
import { Amenities } from "@/components/Amenities";
import { Contact } from "@/components/Contact";
import { QuickInquiry } from "@/components/QuickInquiry";
import { Footer } from "@/components/Footer";
import { ScheduleVisitDialog } from "@/components/ScheduleVisitDialog";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Show dialog automatically on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDialogOpen(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleScheduleVisitClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Hero onScheduleVisitClick={handleScheduleVisitClick} />
      <About />
      <Location />
      <Nature />
      <Amenities />
      <Contact onScheduleVisitClick={handleScheduleVisitClick} />
      <QuickInquiry />
      <Footer />
      
      <ScheduleVisitDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
      
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
