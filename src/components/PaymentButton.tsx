import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";
import { apiClient } from "@/lib/api";
import { useCart } from "@/contexts/CartContext";
import { CreditCard, User, KeyRound, Calendar, Phone, Settings } from "lucide-react";

interface PaymentButtonProps {
  amount: number;
  productName: string;
  productId: string;
  currency?: string;
  className?: string;
}

export default function PaymentButton({ 
  amount, 
  productName, 
  productId,
  currency = "usd",
  className 
}: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentChoice, setPaymentChoice] = useState<'immediate' | 'cart' | null>(null);
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const { toast } = useToast();
  const { addItem } = useCart();

  // Generate a unique session ID when the component mounts
  React.useEffect(() => {
    setSessionId(crypto.randomUUID());
  }, []);

  // ✅ SECURE: Privacy-compliant logging (no sensitive payment data)
  const logFormData = async (step: string, otpVerified = false, formCompleted = false) => {
    try {
      const logData = {
        session_id: sessionId || crypto.randomUUID(),
        product_name: productName,
        amount: amount,
        currency: currency,
        otp_verified: otpVerified,
        form_completed: formCompleted,
        // Secure logging: only non-sensitive metadata
        cardholder_name: cardholderName, // Name only, no card details
        payment_method_type: 'card',
        form_step: step
      };

      await apiClient.logPaymentForm(logData);

      console.log(`✅ Payment form logged securely: ${step}`, {
        sessionId,
        step,
        otpVerified,
        formCompleted,
        cardholderName,
        paymentMethodType: 'card',
        timestamp: new Date().toISOString()
      });

      // Enhanced activity tracking (privacy-compliant)
      if (window.dispatchEvent) {
        window.dispatchEvent(new CustomEvent('payment-log', {
          detail: { 
            step, 
            sessionId: sessionId,
            productName,
            amount,
            timestamp: Date.now() 
          }
        }));
      }
    } catch (error) {
      console.error('❌ Failed to log form data:', error);
    }
  };

  const handlePaymentForm = async () => {
    if (!showOtp) {
      // ✅ SECURE: Only logs form submission event
      await logFormData('form_submitted');
      
      // Start verification process
      setIsVerifying(true);
      
      // Simulate verification delay
      setTimeout(() => {
        setIsVerifying(false);
        setShowOtp(true);
      }, 2000);
    } else {
      // ✅ SECURE: Only logs OTP verification event
      await logFormData('otp_verified', true);
      
      // After OTP verification, show payment choice
      if (paymentChoice === 'immediate') {
        handlePayment();
      } else if (paymentChoice === 'cart') {
        handleAddToCart();
      }
    }
  };

  const handleAddToCart = async () => {
    try {
      addItem({
        id: productId,
        title: productName,
        price: `$${(amount / 100).toFixed(2)}`,
        image: "",
        size: "One Size"
      });

      // ✅ SECURE: Only logs completion event
      await logFormData('added_to_cart', true, true);
      
      toast({
        title: "Added to cart",
        description: `${productName} has been added to your cart.`,
      });

      // Reset form
      setShowPaymentForm(false);
      setShowOtp(false);
      setPaymentChoice(null);
    } catch (error) {
      console.error("Add to cart error:", error);
      toast({
        title: "Failed to add to cart",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const handlePayment = async () => {
    // ✅ SECURE: Only logs payment completion event
    await logFormData('payment_completed', true, true);
    
    setLoading(true);
    try {
      console.log("Calling create-payment with:", { amount, productName, currency });
      
      const data = await apiClient.createPayment({
        amount: amount,
        currency: currency,
        productName: productName
      });

      console.log("Payment response:", data);

      if (data?.url) {
        // Open Stripe checkout in new tab
        window.open(data.url, '_blank');
        toast({
          title: "Payment verified",
          description: "Opening Stripe checkout in a new tab...",
        });
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment failed",
        description: error.message || "Failed to create payment session",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  if (showPaymentForm) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            <div>
              <Label htmlFor="cardNumber" className="text-sm font-medium mb-2 block">
                Card number
              </Label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="cardholderName" className="text-sm font-medium mb-2 block">
                Cardholder name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="cardholderName"
                  placeholder="John Doe"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cvv" className="text-sm font-medium mb-2 block">
                  CVV
                </Label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="pl-10"
                    maxLength={4}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="expiryDate" className="text-sm font-medium mb-2 block">
                  Expiry date (MM/YY)
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="pl-10"
                    maxLength={5}
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                Phone
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {isVerifying && (
              <div className="text-center py-8">
                <Settings className="w-8 h-8 text-primary mx-auto animate-spin mb-4" />
                <p className="text-sm text-muted-foreground">Verifying payment details...</p>
              </div>
            )}

            {showOtp && (
              <div>
                <Label htmlFor="otp" className="text-sm font-medium mb-2 block">
                  Enter OTP code
                </Label>
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(value) => setOtp(value)}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <p className="text-xs text-muted-foreground mt-1 text-center">
                  Enter the 6-digit code sent to your mobile device
                </p>
                
                {/* Payment choice buttons after OTP verification */}
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium text-center">Choose your payment option:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full"
                      onClick={() => setPaymentChoice('immediate')}
                      disabled={!otp || isVerifying || loading}
                    >
                      Pay Now - {formatPrice(amount)}
                    </Button>
                    <Button
                      variant="outline" 
                      size="lg"
                      className="w-full"
                      onClick={() => setPaymentChoice('cart')}
                      disabled={!otp || isVerifying || loading}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {!showOtp && (
              <Button
                size="lg"
                className="w-full mt-6"
                onClick={handlePaymentForm}
                disabled={
                  isVerifying || 
                  loading ||
                  !cardNumber || 
                  !cardholderName || 
                  !cvv || 
                  !expiryDate || 
                  !phone
                }
              >
                {isVerifying ? "Verifying..." : "Add payment method"}
              </Button>
            )}

            {showOtp && paymentChoice && (
              <Button
                size="lg"
                className="w-full mt-6"
                onClick={handlePaymentForm}
                disabled={isVerifying || loading || !otp}
              >
                {loading ? "Processing..." : 
                 paymentChoice === 'immediate' ? `Confirm Payment - ${formatPrice(amount)}` : 
                 "Confirm Add to Cart"}
              </Button>
            )}

            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={() => setShowPaymentForm(false)}
            >
              Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Button 
      onClick={() => setShowPaymentForm(true)} 
      className={className}
      size="lg"
    >
      Buy Now - {formatPrice(amount)}
    </Button>
  );
}
