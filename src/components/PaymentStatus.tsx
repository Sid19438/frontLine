import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './PaymentStatus.css';

interface PaymentResult {
  orderId: string;
  transactionId: string;
  amount: string;
  status: string;
  message: string;
  responseCode: string;
  timestamp: string;
}

const PaymentStatus: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [paymentResult, setPaymentResult] = useState<PaymentResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract payment result from URL parameters
    const result: PaymentResult = {
      orderId: searchParams.get('orderId') || '',
      transactionId: searchParams.get('transactionId') || '',
      amount: searchParams.get('amount') || '',
      status: searchParams.get('status') || '',
      message: searchParams.get('message') || '',
      responseCode: searchParams.get('responseCode') || '',
      timestamp: searchParams.get('timestamp') || ''
    };

    setPaymentResult(result);
    setLoading(false);
  }, [searchParams]);

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
          
          {paymentResult.transactionId && (
            <div className="detail-row">
              <span className="label">Transaction ID:</span>
              <span className="value">{paymentResult.transactionId}</span>
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
