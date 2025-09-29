import { Card } from "@/components/ui/card";
import { Waves, Dumbbell, TreePine, Car, Shield, Wifi, ArrowLeft } from "lucide-react";
import { useState } from "react";
import React from "react";
import spaImage from "@/assets/spa-sanctuary.jpg";
import fitnessImage from "@/assets/gym.png";
import gardenImage from "@/assets/garden.png";
import securityImage from "@/assets/camera.png";
import carparking from "@/assets/carp.png";
import connectivityImage from "@/assets/connectivity.jpg";
import spaBg from "@/assets/spa-wellness.jpg";

const amenities = [
  {
    icon: Waves,
    title: "Spa & Wellness",
    description: "A tranquil sanctuary for pure relaxation and rejuvenation",
    image: spaImage,
    detailedText: "Escape the everyday and immerse yourself in pure relaxation. Our spa offers a tranquil retreat, thoughtfully designed to revitalize your body and calm your mind. Whether you're indulging in a soothing massage or a rejuvenating treatment, experience wellness and serenity in every moment."
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art equipment for your health and wellness",
    image: fitnessImage,
    detailedText: "Stay fit and healthy with our modern fitness center equipped with state-of-the-art equipment. From cardio machines to strength training equipment, everything you need for a complete workout is available 24/7 for your convenience."
  },
  {
    icon: TreePine,
    title: "Landscaped Gardens",
    description: "Lush greenery and peaceful walkways throughout",
    image: gardenImage,
    detailedText: "Discover a canvas painted by nature with beautifully landscaped gardens, serene walkways, and green spaces that create a peaceful environment for relaxation and recreation right at your doorstep."
  },
  {
    icon: Car,
    title: "Premium Parking", 
    description: "Secure parking with easy access to your residence",
    image: carparking,
    detailedText: "Enjoy the convenience of secure, covered parking spaces with easy access to your residence. Our well-designed parking area ensures the safety of your vehicle while providing hassle-free entry and exit."
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security for complete peace of mind",
    image: securityImage,
    detailedText: "Experience complete peace of mind with our comprehensive 24/7 security system featuring trained security personnel, CCTV surveillance, and controlled access points ensuring the safety and privacy of all residents."
  },
  {
    icon: Wifi,
    title: "Fiber Connectivity",
    description: "FTTH high-speed internet throughout the complex",
    image: connectivityImage,
    detailedText: "Stay connected with high-speed FTTH (Fiber-to-the-Home) internet connectivity throughout the entire complex. Enjoy seamless connectivity for work, entertainment, and communication needs."
  }
];

export const Amenities = () => {
  const [selectedAmenity, setSelectedAmenity] = useState<number | null>(null);

  const handleAmenityClick = (index: number) => {
    setSelectedAmenity(selectedAmenity === index ? null : index);
  };

  const handleBackClick = () => {
    setSelectedAmenity(null);
  };
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="font-serif text-2xl text-secondary italic mb-4">A Sanctuary</h3>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            PREMIUM AMENITIES<br />& LIFESTYLE FEATURES
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Escape the everyday and immerse yourself in pure luxury. Our thoughtfully 
            designed amenities offer everything you need for wellness, recreation, and 
            sophisticated living.
          </p>
        </div>

        {selectedAmenity !== null ? (
          <div className="space-y-8">
            {/* Selected Amenity Card */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/2">
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 cursor-pointer">
                  <div className="w-16 h-16 mb-4 bg-gradient-golden rounded-full flex items-center justify-center">
                    {React.createElement(amenities[selectedAmenity].icon, { className: "w-8 h-8 text-secondary-foreground" })}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-3">
                    {amenities[selectedAmenity].title}
                  </h3>
                  <p className="text-white/70">
                    {amenities[selectedAmenity].description}
                  </p>
                </Card>
              </div>
              
              {/* Detail Image and Content */}
              <div className="lg:w-1/2 relative">
                <button 
                  onClick={handleBackClick}
                  className="absolute top-4 left-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={amenities[selectedAmenity].image} 
                    alt={amenities[selectedAmenity].title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="font-serif text-2xl font-semibold text-white mb-3">
                      {amenities[selectedAmenity].title}
                    </h4>
                    <p className="text-white/90 leading-relaxed">
                      {amenities[selectedAmenity].detailedText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Amenities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {amenities.map((amenity, index) => {
                if (index === selectedAmenity) return null;
                const Icon = amenity.icon;
                return (
                  <Card 
                    key={index} 
                    onClick={() => handleAmenityClick(index)}
                    className="p-4 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="w-12 h-12 mb-3 bg-gradient-golden rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <h3 className="font-serif text-sm font-semibold text-white mb-2">
                      {amenity.title}
                    </h3>
                    <p className="text-white/60 text-xs">
                      {amenity.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <Card 
                  key={index} 
                  onClick={() => handleAmenityClick(index)}
                  className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="w-16 h-16 mb-4 bg-gradient-golden rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-3">
                    {amenity.title}
                  </h3>
                  <p className="text-white/70">
                    {amenity.description}
                  </p>
                </Card>
              );
            })}
          </div>
        )}

        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <h4 className="font-serif text-2xl font-semibold mb-4">Canvas Painted by Nature</h4>
            <p className="text-white/80 max-w-2xl">
              Discover a haven of relaxation surrounded by lush greenery, serene gardens 
              and peaceful walkways - all thoughtfully designed to enhance your living experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};