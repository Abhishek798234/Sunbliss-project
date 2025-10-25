import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Location } from "@/components/Location";
import { Nature } from "@/components/Nature";
import { Amenities } from "@/components/Amenities";
import { Contact } from "@/components/Contact";

import { Footer } from "@/components/Footer";
import { ScheduleVisitDialog } from "@/components/ScheduleVisitDialog";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Wake up backend and show dialog
  useEffect(() => {
    // Wake up the backend server
    const wakeUpBackend = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
        await fetch(`${apiUrl}/health`, { 
          method: 'GET',
          mode: 'cors'
        });
        console.log('Backend server is awake');
      } catch (error) {
        console.log('Backend wake-up call made');
      }
    };

    wakeUpBackend();

    // Keep backend alive with periodic pings
    const keepAlive = setInterval(() => {
      wakeUpBackend();
    }, 10 * 60 * 1000); // Ping every 10 minutes

    const timer = setTimeout(() => {
      setIsDialogOpen(true);
    }, 0); // Show instantly

    return () => {
      clearTimeout(timer);
      clearInterval(keepAlive);
    };
  }, []);

  const handleScheduleVisitClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header onScheduleVisitClick={handleScheduleVisitClick} />
      <Hero onScheduleVisitClick={handleScheduleVisitClick} />
      <About />
      <Location />
      <Nature />
      <Amenities />
      <Contact onScheduleVisitClick={handleScheduleVisitClick} />

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
