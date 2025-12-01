import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";
import ContactForm from "./ContactForm";

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationDialog = ({ open, onOpenChange }: ConsultationDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    condition: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi! I'd like to book a FREE consultation.%0A%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone)}%0ACondition: ${encodeURIComponent(formData.condition)}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/66817342027?text=${message}`, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your consultation request will be sent via WhatsApp.",
    });
    
    // Reset form and close dialog
    setFormData({ name: "", email: "", phone: "", condition: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">Book Your FREE Consultation</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll contact you to schedule your personalized consultation.
          </DialogDescription>
        </DialogHeader>
        
        {/* <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+66 81-734-2027"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="condition">Tell us about your condition</Label>
            <Textarea
              id="condition"
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              placeholder="Describe your health concerns or what you'd like to improve..."
              rows={4}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground gap-2"
            size="lg"
          >
            <MessageCircle className="h-5 w-5" />
            Send via WhatsApp
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            By submitting, you agree to be contacted via WhatsApp
          </p>
        </form> */}
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;
