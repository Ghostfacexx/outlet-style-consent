import { useState, useCallback } from 'react';

export interface PaymentFormData {
  cardNumber: string;
  cardholderName: string;
  cvv: string;
  expiryDate: string;
  phone: string;
  otp: string;
}

export const usePaymentForm = () => {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    cardholderName: '',
    cvv: '',
    expiryDate: '',
    phone: '',
    otp: ''
  });
  
  const [showOtp, setShowOtp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [paymentChoice, setPaymentChoice] = useState<'immediate' | 'cart' | null>(null);

  const updateField = useCallback((field: keyof PaymentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      cardNumber: '',
      cardholderName: '',
      cvv: '',
      expiryDate: '',
      phone: '',
      otp: ''
    });
    setShowOtp(false);
    setIsVerifying(false);
    setPaymentChoice(null);
  }, []);

  const isFormValid = useCallback(() => {
    const { cardNumber, cardholderName, cvv, expiryDate, phone } = formData;
    return cardNumber && cardholderName && cvv && expiryDate && phone;
  }, [formData]);

  const isOtpValid = useCallback(() => {
    return formData.otp && formData.otp.length === 6;
  }, [formData.otp]);

  return {
    formData,
    updateField,
    resetForm,
    showOtp,
    setShowOtp,
    isVerifying,
    setIsVerifying,
    paymentChoice,
    setPaymentChoice,
    isFormValid,
    isOtpValid
  };
};