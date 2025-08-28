import React, { useState } from 'react';
import './BookingForm.css';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can implement the actual booking logic
    console.log('Booking form submitted:', formData);
    // You can redirect to payment gateway or show success message
    alert('Booking form submitted successfully! Redirecting to payment...');
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <div className="booking-header">
          <h2>Book a Call Consultation</h2>
          <p>Complete your booking details and proceed to payment</p>
        </div>
        
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
                <div className="terms-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      required
                    />
                    I agree to the <a href="#" className="terms-link">Terms and Conditions</a>
                  </label>
                </div>
                
                <div className="final-amount">
                  <span>Final Amount:</span>
                  <span className="amount">₹{selectedPackage?.price?.toLocaleString() || '1,48,000'}</span>
                </div>
                
                <button type="submit" className="pay-button">
                  <img src="https://razorpay.com/favicon.png" alt="Razorpay" className="razorpay-logo" />
                  Pay with Razorpay
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
