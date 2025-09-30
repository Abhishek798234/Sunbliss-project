import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const scheduleVisitSchema = z.object({
  fullName: z.string().trim().min(2, { message: "Full name must be at least 2 characters" }).max(100, { message: "Full name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().min(10, { message: "Phone number must be at least 10 digits" }).max(15, { message: "Phone number must be less than 15 digits" }).regex(/^\+?[\d\s\-\(\)]+$/, { message: "Invalid phone number format" })
});

type ScheduleVisitForm = z.infer<typeof scheduleVisitSchema>;

interface ScheduleVisitDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ScheduleVisitDialog: React.FC<ScheduleVisitDialogProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();
  
  const form = useForm<ScheduleVisitForm>({
    resolver: zodResolver(scheduleVisitSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: ""
    }
  });

  const onSubmit = async (data: ScheduleVisitForm) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/site-visit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        toast({
          title: "Request Submitted!",
          description: "Our expert will get back to you soon. Brochure download starting...",
        });
        
        // Automatically download brochure
        const link = document.createElement('a');
        link.href = '/SunBliss Brochure.pdf';
        link.download = 'SunBliss Brochure.pdf';
        link.click();
        
        form.reset();
        onOpenChange(false);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif text-foreground text-center">
            Schedule A Site Visit
          </DialogTitle>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Please fill out the form below, our expert will get back to you soon.
          </p>
        </DialogHeader>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-foreground">Your Full Name</Label>
            <Input
              id="fullName"
              {...form.register("fullName")}
              placeholder="Enter your full name"
              className="bg-background border-input text-foreground"
            />
            {form.formState.errors.fullName && (
              <p className="text-sm text-destructive">{form.formState.errors.fullName.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email Address</Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              placeholder="Enter your email address"
              className="bg-background border-input text-foreground"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">Phone/Mobile</Label>
            <Input
              id="phone"
              {...form.register("phone")}
              placeholder="Enter your phone number"
              className="bg-background border-input text-foreground"
            />
            {form.formState.errors.phone && (
              <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            variant="golden" 
            className="w-full mt-6 font-medium"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "SUBMITTING..." : "GET CALL BACK"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};