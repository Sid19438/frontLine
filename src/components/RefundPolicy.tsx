import React from 'react';
import './LegalPages.css';
import Header from './Header';
import Footer from './Footer';

const RefundPolicy = () => {
  return (
    <div className="legal-page">
      <Header />
      <div className="legal-content">
        <div className="legal-container">
          <h1>Refund Policy</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2>1. Overview</h2>
            <p>
              At Innovana Astro Services Ltd, we strive to provide the highest quality astrology consultation 
              services. We understand that sometimes our services may not meet your expectations, and we have 
              established this refund policy to ensure customer satisfaction while maintaining the integrity 
              of our services.
            </p>
          </section>

          <section>
            <h2>2. General Refund Principles</h2>
            <p>
              Our refund policy is designed to be fair and transparent. We will process refunds in accordance 
              with the following principles:
            </p>
            <ul>
              <li>Service quality issues</li>
              <li>Technical difficulties on our end</li>
              <li>Inability to provide the promised service</li>
              <li>Customer dissatisfaction with legitimate concerns</li>
            </ul>
          </section>

          <section>
            <h2>3. Refund Eligibility by Service Type</h2>
            
            <h3>3.1 Astrology Consultations</h3>
            <p><strong>Eligible for refund if:</strong></p>
            <ul>
              <li>Consultation is cancelled at least 24 hours before the scheduled time</li>
              <li>Technical issues prevent the consultation from proceeding</li>
              <li>Astrologer is unable to attend due to our fault</li>
              <li>Service quality is significantly below our standards</li>
            </ul>
            <p><strong>Not eligible for refund if:</strong></p>
            <ul>
              <li>Consultation has already been completed</li>
              <li>Cancellation is made less than 24 hours before the appointment</li>
              <li>Customer fails to attend without prior notice</li>
              <li>Customer is dissatisfied with astrological predictions or advice</li>
            </ul>

            <h3>3.2 Live Puja Services</h3>
            <p><strong>Eligible for refund if:</strong></p>
            <ul>
              <li>Puja is cancelled at least 48 hours before the scheduled time</li>
              <li>Technical issues prevent live streaming</li>
              <li>Priest is unable to perform due to our fault</li>
              <li>Service is significantly delayed or interrupted</li>
            </ul>
            <p><strong>Not eligible for refund if:</strong></p>
            <ul>
              <li>Puja has already been performed</li>
              <li>Cancellation is made less than 48 hours before the scheduled time</li>
              <li>Customer is dissatisfied with the spiritual outcome</li>
            </ul>

            <h3>3.3 Physical Products (Gemstones, Yantras, etc.)</h3>
            <p><strong>Eligible for refund if:</strong></p>
            <ul>
              <li>Product arrives damaged or defective</li>
              <li>Wrong product is shipped</li>
              <li>Product quality is significantly below advertised standards</li>
              <li>Return is initiated within 7 days of delivery</li>
            </ul>
            <p><strong>Not eligible for refund if:</strong></p>
            <ul>
              <li>Product has been used or modified</li>
              <li>Return is initiated after 7 days of delivery</li>
              <li>Customer changes their mind about the purchase</li>
              <li>Product is returned without original packaging</li>
            </ul>
          </section>

          <section>
            <h2>4. Refund Process</h2>
            <h3>4.1 How to Request a Refund</h3>
            <p>To request a refund, please follow these steps:</p>
            <ol>
              <li>Contact our customer support team within the specified time frame</li>
              <li>Provide your order/booking reference number</li>
              <li>Explain the reason for the refund request</li>
              <li>Provide any relevant evidence or documentation</li>
            </ol>

            <h3>4.2 Refund Review Process</h3>
            <p>Our team will review your refund request within 2-3 business days. We may:</p>
            <ul>
              <li>Request additional information</li>
              <li>Investigate the issue with our service providers</li>
              <li>Offer alternative solutions before processing a refund</li>
            </ul>

            <h3>4.3 Refund Processing Time</h3>
            <p>
              Once approved, refunds are typically processed within 5-7 business days. The time to appear 
              in your account depends on your bank or payment method:
            </p>
            <ul>
              <li>Credit/Debit Cards: 5-10 business days</li>
              <li>Net Banking: 3-5 business days</li>
              <li>UPI: 1-3 business days</li>
              <li>Digital Wallets: 2-5 business days</li>
            </ul>
          </section>

          <section>
            <h2>5. Partial Refunds</h2>
            <p>
              In some cases, we may offer partial refunds based on the circumstances:
            </p>
            <ul>
              <li>Service partially completed but not to satisfaction</li>
              <li>Technical issues that affected service quality</li>
              <li>Delays that significantly impacted the experience</li>
              <li>Partial cancellation of multi-session packages</li>
            </ul>
          </section>

          <section>
            <h2>6. Non-Refundable Services</h2>
            <p>The following services are generally non-refundable:</p>
            <ul>
              <li>Completed consultations and readings</li>
              <li>Performed pujas and rituals</li>
              <li>Digital content and reports</li>
              <li>Gift cards and vouchers</li>
              <li>Services used or consumed</li>
            </ul>
          </section>

          <section>
            <h2>7. Cancellation Policy</h2>
            <h3>7.1 Consultation Cancellations</h3>
            <p>
              <strong>Free cancellation:</strong> Up to 24 hours before the scheduled consultation<br/>
              <strong>50% refund:</strong> 12-24 hours before the scheduled consultation<br/>
              <strong>No refund:</strong> Less than 12 hours before the scheduled consultation
            </p>

            <h3>7.2 Puja Cancellations</h3>
            <p>
              <strong>Free cancellation:</strong> Up to 48 hours before the scheduled puja<br/>
              <strong>50% refund:</strong> 24-48 hours before the scheduled puja<br/>
              <strong>No refund:</strong> Less than 24 hours before the scheduled puja
            </p>
          </section>

          <section>
            <h2>8. Force Majeure</h2>
            <p>
              In cases of force majeure (natural disasters, government actions, technical failures beyond 
              our control), we will work with customers to reschedule services or provide appropriate 
              compensation. Full refunds may be offered when rescheduling is not possible.
            </p>
          </section>

          <section>
            <h2>9. Dispute Resolution</h2>
            <p>
              If you disagree with our refund decision, you may:
            </p>
            <ol>
              <li>Request a review by our senior management team</li>
              <li>Provide additional evidence or documentation</li>
              <li>Seek mediation through our customer service team</li>
              <li>Contact relevant consumer protection authorities if necessary</li>
            </ol>
          </section>

          <section>
            <h2>10. Contact Information</h2>
            <p>
              For refund requests or questions about this policy, please contact us:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> refunds@innovanaastro.com</p>
              <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
              <p><strong>Customer Support Hours:</strong> Monday to Sunday, 9:00 AM - 9:00 PM IST</p>
              <p><strong>Address:</strong> Innovana Astro Services Ltd, [Your Address]</p>
            </div>
          </section>

          <section>
            <h2>11. Policy Updates</h2>
            <p>
              We reserve the right to modify this refund policy at any time. Changes will be effective 
              immediately upon posting on our website. For existing bookings, the policy in effect at the 
              time of booking will apply.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
