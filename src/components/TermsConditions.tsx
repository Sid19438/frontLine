import React from 'react';
import './LegalPages.css';
import Header from './Header';
import Footer from './Footer';

const TermsConditions = () => {
  return (
    <div className="legal-page">
      <Header />
      <div className="legal-content">
        <div className="legal-container">
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Innovana Astro Services Ltd website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>
              Innovana Astro Services Ltd provides astrology consultation services, including but not limited to:
            </p>
            <ul>
              <li>Personal astrology consultations</li>
              <li>Birth chart analysis</li>
              <li>Marriage compatibility assessments</li>
              <li>Career and business guidance</li>
              <li>Remedial measures and solutions</li>
              <li>Live puja and ritual services</li>
              <li>Astrological product sales</li>
            </ul>
          </section>

          <section>
            <h2>3. User Responsibilities</h2>
            <h3>3.1 Accurate Information</h3>
            <p>
              You are responsible for providing accurate and complete information, including your date of birth, 
              time of birth, and place of birth for astrological services.
            </p>

            <h3>3.2 Age Requirement</h3>
            <p>
              You must be at least 18 years old to use our services. If you are under 18, you may only use 
              our services with the involvement of a parent or guardian.
            </p>

            <h3>3.3 Prohibited Uses</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use our services for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper working of our services</li>
              <li>Use our services to harass or harm others</li>
              <li>Share your account credentials with others</li>
            </ul>
          </section>

          <section>
            <h2>4. Payment Terms</h2>
            <h3>4.1 Payment Processing</h3>
            <p>
              All payments are processed securely through Razorpay. We accept various payment methods including 
              credit/debit cards, net banking, UPI, and digital wallets.
            </p>

            <h3>4.2 Pricing</h3>
            <p>
              Service prices are displayed on our website and are subject to change without notice. 
              All prices are in Indian Rupees (INR) unless otherwise stated.
            </p>

            <h3>4.3 Refunds</h3>
            <p>
              Refund policies are outlined in our separate Refund Policy. Please refer to that document 
              for detailed information about refund eligibility and procedures.
            </p>
          </section>

          <section>
            <h2>5. Service Delivery</h2>
            <h3>5.1 Consultation Services</h3>
            <p>
              Astrology consultations are typically conducted via video call, phone, or chat. 
              We will provide you with the necessary details and instructions for your consultation.
            </p>

            <h3>5.2 Puja Services</h3>
            <p>
              Live puja services are streamed online. You will receive a link to join the live session 
              at the scheduled time.
            </p>

            <h3>5.3 Product Delivery</h3>
            <p>
              Physical products are shipped to your provided address. Delivery times may vary based on 
              location and product availability.
            </p>
          </section>

          <section>
            <h2>6. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, images, and software, 
              is the property of Innovana Astro Services Ltd and is protected by copyright laws. 
              You may not reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section>
            <h2>7. Disclaimers</h2>
            <h3>7.1 Astrological Services</h3>
            <p>
              Our astrological services are provided for entertainment and guidance purposes only. 
              We do not guarantee specific outcomes or results. Astrology is not a substitute for 
              professional medical, legal, or financial advice.
            </p>

            <h3>7.2 Service Availability</h3>
            <p>
              We strive to provide reliable services but cannot guarantee uninterrupted availability. 
              We reserve the right to modify, suspend, or discontinue services at any time.
            </p>
          </section>

          <section>
            <h2>8. Limitation of Liability</h2>
            <p>
              Innovana Astro Services Ltd shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages arising from your use of our services. Our total liability 
              shall not exceed the amount you paid for the specific service.
            </p>
          </section>

          <section>
            <h2>9. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy to understand how we 
              collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2>10. Termination</h2>
            <p>
              We may terminate or suspend your access to our services at any time, without prior notice, 
              for conduct that we believe violates these Terms and Conditions or is harmful to other users, 
              us, or third parties.
            </p>
          </section>

          <section>
            <h2>11. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws 
              of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </section>

          <section>
            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be 
              effective immediately upon posting on our website. Your continued use of our services 
              constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2>13. Contact Information</h2>
            <p>
              If you have questions about these Terms and Conditions, please contact us at:
            </p>
            {/* <div className="contact-info">
              <p><strong>Email:</strong> legal@innovanaastro.com</p>
              <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
              <p><strong>Address:</strong> Innovana Astro Services Ltd, [Your Address]</p>
            </div> */}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
