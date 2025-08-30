import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import './PaymentStatus.css';

interface PaymentResult {
  orderId: string;
  paymentId?: string;
  transactionId?: string;
  amount: string;
  status: string;
  message: string;
  responseCode?: string;
  timestamp: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  astrologerName?: string;
  packageName?: string;
}

const PaymentStatus: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentResult, setPaymentResult] = useState<PaymentResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if payment result is passed via location state (from Razorpay)
    if (location.state?.paymentResult) {
      setPaymentResult(location.state.paymentResult);
      setLoading(false);
      return;
    }

    // Extract payment result from URL parameters (fallback for direct access)
    const result: PaymentResult = {
      orderId: searchParams.get('orderId') || '',
      paymentId: searchParams.get('paymentId') || undefined,
      transactionId: searchParams.get('transactionId') || searchParams.get('paymentId') || '',
      amount: searchParams.get('amount') || '',
      status: searchParams.get('status') || '',
      message: searchParams.get('message') || '',
      responseCode: searchParams.get('responseCode') || undefined,
      timestamp: searchParams.get('timestamp') || new Date().toISOString(),
      customerName: searchParams.get('customerName') || undefined,
      customerEmail: searchParams.get('customerEmail') || undefined,
      customerPhone: searchParams.get('customerPhone') || undefined,
      astrologerName: searchParams.get('astrologerName') || undefined,
      packageName: searchParams.get('packageName') || undefined,
    };

    setPaymentResult(result);
    setLoading(false);
  }, [searchParams, location.state]);

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleBookAgain = () => {
    navigate('/astrologers');
  };

  if (loading) {
    return (
      <div className="payment-status-container">
        <div className="loading-spinner">Processing payment...</div>
      </div>
    );
  }

  if (!paymentResult) {
    return (
      <div className="payment-status-container">
        <div className="error-message">Invalid payment response</div>
        <button onClick={handleBackToHome} className="back-button">
          Back to Home
        </button>
      </div>
    );
  }

  const isSuccess = paymentResult.status === 'SUCCESS';
  const isPending = paymentResult.status === 'PENDING';

  return (
    <div className="payment-status-container">
      <div className="payment-status-card">
        <div className={`status-icon ${isSuccess ? 'success' : isPending ? 'pending' : 'failed'}`}>
          {isSuccess ? '✓' : isPending ? '⏳' : '✗'}
        </div>
        
        <h1 className="status-title">
          {isSuccess ? 'Payment Successful!' : isPending ? 'Payment Pending' : 'Payment Failed'}
        </h1>
        
        <p className="status-message">{paymentResult.message}</p>
        
        <div className="payment-details">
          <div className="detail-row">
            <span className="label">Order ID:</span>
            <span className="value">{paymentResult.orderId}</span>
          </div>
          
          {(paymentResult.paymentId || paymentResult.transactionId) && (
            <div className="detail-row">
              <span className="label">Payment ID:</span>
              <span className="value">{paymentResult.paymentId || paymentResult.transactionId}</span>
            </div>
          )}
          
          <div className="detail-row">
            <span className="label">Amount:</span>
            <span className="value">₹{paymentResult.amount}</span>
          </div>
          
          <div className="detail-row">
            <span className="label">Status:</span>
            <span className={`value status-${paymentResult.status.toLowerCase()}`}>
              {paymentResult.status}
            </span>
          </div>
          
          {paymentResult.customerName && (
            <div className="detail-row">
              <span className="label">Customer:</span>
              <span className="value">{paymentResult.customerName}</span>
            </div>
          )}
          
          {paymentResult.astrologerName && (
            <div className="detail-row">
              <span className="label">Astrologer:</span>
              <span className="value">{paymentResult.astrologerName}</span>
            </div>
          )}
          
          {paymentResult.packageName && (
            <div className="detail-row">
              <span className="label">Package:</span>
              <span className="value">{paymentResult.packageName}</span>
            </div>
          )}
          
          <div className="detail-row">
            <span className="label">Date:</span>
            <span className="value">
              {new Date(paymentResult.timestamp).toLocaleString()}
            </span>
          </div>
        </div>
        
        <div className="action-buttons">
          {isSuccess && (
            <button onClick={handleBookAgain} className="book-again-button">
              Book Another Consultation
            </button>
          )}
          
          <button onClick={handleBackToHome} className="home-button">
            Back to Home
          </button>
        </div>
        
        {isSuccess && (
          <div className="success-note">
            <p>🎉 Your booking has been confirmed!</p>
            <p>You will receive a confirmation email shortly with further details.</p>
          </div>
        )}
        
        {isPending && (
          <div className="pending-note">
            <p>⏳ Your payment is being processed.</p>
            <p>You will be notified once the payment is completed.</p>
          </div>
        )}
        
        {!isSuccess && !isPending && (
          <div className="failed-note">
            <p>❌ Payment was not completed successfully.</p>
            <p>Please try again or contact support if the issue persists.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentStatus;
