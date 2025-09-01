import React, { useState } from 'react';
import './BookingForm.css';
import axios from 'axios';

interface BookingFormProps {
  selectedPackage: any;
  astrologerName: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ selectedPackage, astrologerName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    termsAccepted: false
  });
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      // Prepare payment data
      const paymentData = {
        amount: selectedPackage?.price || 0,
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.whatsapp,
        astrologerName: astrologerName,
        packageName: `${selectedPackage?.label || 'Consultation'} (${selectedPackage?.minutes || 30} Min)`
      };

      // Call backend to initiate payment
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL || 'https://csbackend-xr99.onrender.com/api'}/payment/initiate`, paymentData);
      
      if (response.data.success) {
        // Load Razorpay script if not already loaded
        if (!(window as any).Razorpay) {
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.async = true;
          document.body.appendChild(script);
          
          script.onload = () => {
            openRazorpayPayment(response.data.data);
          };
        } else {
          openRazorpayPayment(response.data.data);
        }
      } else {
        setError('Failed to initiate payment. Please try again.');
      }
    } catch (error: any) {
      console.error('Payment initiation error:', error);
      setError(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const openRazorpayPayment = (paymentData: any) => {
    // Configure Razorpay options
    const options = {
      key: paymentData.key,
      amount: paymentData.amount,
      currency: paymentData.currency,
      name: 'Astrology Consultation',
      description: `${paymentData.packageName} with ${paymentData.astrologerName}`,
      image: '/logo192.png',
      order_id: paymentData.orderId,
      handler: async (response: any) => {
        try {
          // Verify payment with your backend
          const verifyResponse = await axios.post(`${process.env.REACT_APP_API_BASE_URL || 'https://csbackend-xr99.onrender.com/api'}/payment/verify`, {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            customerName: formData.name,
            customerEmail: formData.email,
            customerPhone: formData.whatsapp,
            astrologerName: astrologerName,
            packageName: paymentData.packageName,
          });

          if (verifyResponse.data.success) {
            // Redirect to success page
            window.location.href = `/payment-status?orderId=${response.razorpay_order_id}&paymentId=${response.razorpay_payment_id}&status=SUCCESS&message=Payment successful&amount=${paymentData.amount}&customerName=${formData.name}&astrologerName=${astrologerName}&packageName=${paymentData.packageName}&timestamp=${new Date().toISOString()}`;
          } else {
            throw new Error(verifyResponse.data.message || 'Payment verification failed');
          }
        } catch (error) {
          console.error('Payment verification error:', error);
          setError('Payment verification failed. Please contact support.');
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.whatsapp,
      },
      notes: {
        address: 'Astrology Consultation Service',
        astrologer: astrologerName,
        package: paymentData.packageName,
      },
      theme: {
        color: '#764ba2',
      },
      modal: {
        ondismiss: () => {
          setIsProcessing(false);
        },
      },
    };

    // Initialize Razorpay
    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="booking-page">
          <div className="booking-header">
          <h2 style={{color:'#764ba2'}} >Book a Call Consultation</h2>
          <p style={{color:'#764ba2'}} >Complete your booking details and proceed to payment</p>
        </div>
      <div className="booking-container">
        {/* <div className="booking-header">
          <h2 style={{color:'#764ba2'}} >Book a Call Consultation</h2>
          <p style={{color:'#764ba2'}} >Complete your booking details and proceed to payment</p>
        </div> */}
        
        <div className="booking-content">
          {/* Left Side - Package Details */}
          <div className="package-details">
            <div className="package-image">
              <div className="astrology-chart">
                <span className="premium-badge">Premium</span>
                <div className="chart-symbols">♈♉♊♋♌♍♎♏♐♑♒♓</div>
              </div>
            </div>
            
            <div className="package-info">
              <h3>{selectedPackage?.label || 'Normal'} Consultation ({selectedPackage?.minutes || 30} Min) - {selectedPackage?.connect || 'Audio'}</h3>
              <div className="package-price">₹{selectedPackage?.price?.toLocaleString() || '1,48,000'}</div>
              <p className="package-description">
                Join an audio call for a {selectedPackage?.minutes || 30}-minute astrology consultation. 
                Ideal for those who prefer audio over video.
              </p>
              
              <div className="whats-included">
                <h4>What's Included:</h4>
                <ul>
                  <li>Insight into your career path using planetary analysis</li>
                  <li>Clarity on current struggles and repeated setbacks</li>
                  <li>Personalized guidance on timing, opportunities & challenges</li>
                  <li>Remedies and astrological advice to support your next move</li>
                  <li>Audio consultation for a more comfortable interaction</li>
                </ul>
              </div>
              
              <div className="limited-slots">
                <strong>Limited slots available - Book Now!</strong>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="booking-form">
            <form onSubmit={handleSubmit}>
              {/* Personal Details */}
              <div className="form-section">
                <h4>Personal Details</h4>
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="Enter your WhatsApp number"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Birth Details */}
              <div className="form-section">
                <h4>Your Birth Details</h4>
                <div className="form-group">
                  <label>Date of Birth *</label>
                  <div className="input-with-icon">
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="icon">📅</span>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Time of Birth</label>
                  <div className="input-with-icon">
                    <input
                      type="time"
                      name="timeOfBirth"
                      value={formData.timeOfBirth}
                      onChange={handleInputChange}
                    />
                    <span className="icon">🕐</span>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Place of Birth</label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    placeholder="City, State, Country"
                    value={formData.placeOfBirth}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Terms and Payment */}
              <div className="form-section">
                {/* Error Display */}
                {error && (
                  <div className="error-message" style={{
                    background: '#ffebee',
                    color: '#c62828',
                    padding: '10px',
                    borderRadius: '5px',
                    marginBottom: '15px',
                    fontSize: '14px'
                  }}>
                    {error}
                  </div>
                )}
                
                <div className="terms-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      required
                    />
                    I agree to the <a href="/terms-conditions" className="terms-link">Terms and Conditions</a>
                  </label>
                </div>
                
                <div className="final-amount">
                  <span>Final Amount:</span>
                  <span className="amount">₹{selectedPackage?.price?.toLocaleString() || '1,48,000'}</span>
                </div>
                
                <button 
                  type="submit" 
                  className="pay-button"
                  disabled={isProcessing}
                >
                  <img src="https://razorpay.com/favicon.png" alt="Razorpay" className="razorpay-logo" />
                  {isProcessing ? 'Processing...' : 'Pay with Razorpay'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
