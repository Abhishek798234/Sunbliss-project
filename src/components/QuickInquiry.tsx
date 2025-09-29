import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/formbg.png";

export const QuickInquiry = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    contact: "",
    preferredContact: "phone",
    agreeToPolicy: false
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:3001/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast({
          title: "Inquiry Submitted!",
          description: "Thank you for your interest. We'll contact you soon.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          countryCode: "+91",
          contact: "",
          preferredContact: "phone",
          agreeToPolicy: false
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              QUICK INQUIRY
            </h2>
            <p className="text-xl font-bold text-black/90 mb-2">
              If you have any question?
            </p>
            <p className="text-lg font-bold text-black/80">
              We are glad to consult you as soon as possible
            </p>
          </div>

          <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
            <h3 className="font-serif text-2xl font-semibold text-white mb-6 text-center">
              Register Your Interest
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white font-medium">
                    FIRST NAME *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                    className="border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white font-medium">
                    LAST NAME *
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                    className="border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium">
                  EMAIL *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="border-border"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white font-medium">
                    COUNTRY CODE *
                  </Label>
                  <Select value={formData.countryCode} onValueChange={(value) => setFormData({...formData, countryCode: value})}>
                    <SelectTrigger className="border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+91">India (+91)</SelectItem>
                      <SelectItem value="+1">USA (+1)</SelectItem>
                      <SelectItem value="+44">UK (+44)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-white font-medium">
                    CONTACT *
                  </Label>
                  <Input
                    id="contact"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    required
                    className="border-border"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-white font-medium">
                  Preferred mode of contact *
                </Label>
                <RadioGroup 
                  value={formData.preferredContact} 
                  onValueChange={(value) => setFormData({...formData, preferredContact: value})}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone" />
                    <Label htmlFor="phone">Phone</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email-contact" />
                    <Label htmlFor="email-contact">Email</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="policy"
                  checked={formData.agreeToPolicy}
                  onCheckedChange={(checked) => setFormData({...formData, agreeToPolicy: checked as boolean})}
                />
                <Label htmlFor="policy" className="text-sm text-white/80 leading-relaxed">
                  I'd like to hear about news and offers. I've read and agree to privacy policy
                </Label>
              </div>

              <div className="text-center pt-4">
                <Button 
                  type="submit" 
                  variant="luxury" 
                  size="xl" 
                  className="font-medium px-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};