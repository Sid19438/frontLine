import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RazorpayPayment.css';

interface PaymentData {
  orderId: string;
  receipt: string;
  amount: number;
  currency: string;
  key: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  astrologerName: string;
  packageName: string;
}

interface RazorpayPaymentProps {
  amount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  astrologerName: string;
  packageName: string;
  onSuccess?: (paymentData: any) => void;
  onFailure?: (error: any) => void;
}

const RazorpayPayment: React.FC<RazorpayPaymentProps> = ({
  amount,
  customerName,
  customerEmail,
  customerPhone,
  astrologerName,
  packageName,
  onSuccess,
  onFailure
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError(null);

      // Call your backend to create order
      const response = await fetch('/api/payment/initiate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          customerName,
          customerEmail,
          customerPhone,
          astrologerName,
          packageName,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to initiate payment');
      }

      const paymentData: PaymentData = result.data;

      // Configure Razorpay options
      const options = {
        key: paymentData.key,
        amount: paymentData.amount,
        currency: paymentData.currency,
        name: 'Astrology Consultation',
        description: `${packageName} with ${astrologerName}`,
        image: '/logo192.png', // Your logo
        order_id: paymentData.orderId,
        handler: async (response: any) => {
          try {
            // Verify payment with your backend
            const verifyResponse = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                customerName,
                customerEmail,
                customerPhone,
                astrologerName,
                packageName,
              }),
            });

            const verifyResult = await verifyResponse.json();

            if (verifyResult.success) {
              if (onSuccess) {
                onSuccess(verifyResult.data);
              } else {
                // Redirect to success page
                navigate('/payment-status', {
                  state: {
                    paymentResult: verifyResult.data
                  }
                });
              }
            } else {
              throw new Error(verifyResult.message || 'Payment verification failed');
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            if (onFailure) {
              onFailure(error);
            } else {
              setError('Payment verification failed. Please contact support.');
            }
          }
        },
        prefill: {
          name: customerName,
          email: customerEmail,
          contact: customerPhone,
        },
        notes: {
          address: 'Astrology Consultation Service',
          astrologer: astrologerName,
          package: packageName,
        },
        theme: {
          color: '#3399cc',
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
      };

      // Initialize Razorpay
      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error('Payment initiation error:', error);
      setError(error instanceof Error ? error.message : 'Failed to initiate payment');
      if (onFailure) {
        onFailure(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="razorpay-payment-container">
      <div className="payment-summary">
        <h3>Payment Summary</h3>
        <div className="summary-details">
          <div className="summary-row">
            <span>Service:</span>
            <span>{packageName}</span>
          </div>
          <div className="summary-row">
            <span>Astrologer:</span>
            <span>{astrologerName}</span>
          </div>
          <div className="summary-row">
            <span>Customer:</span>
            <span>{customerName}</span>
          </div>
          <div className="summary-row">
            <span>Email:</span>
            <span>{customerEmail}</span>
          </div>
          <div className="summary-row total">
            <span>Total Amount:</span>
            <span>₹{amount}</span>
          </div>
        </div>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <button
        className="pay-button"
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? 'Processing...' : `Pay ₹${amount}`}
      </button>

      <div className="payment-info">
        <p>🔒 Secure payment powered by Razorpay</p>
        <p>💳 Accepts all major credit/debit cards, UPI, net banking</p>
      </div>
    </div>
  );
};

export default RazorpayPayment;
