import React from 'react';
import './LegalPages.css';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <Header />
      <div className="legal-content">
        <div className="legal-container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2>1. Introduction</h2>
            <p>
              Innovana Astro Services Ltd ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you visit our website or use our astrology consultation services.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>Date of birth, time of birth, and place of birth for astrological services</li>
              <li>Payment information (processed securely through Razorpay)</li>
              <li>Consultation preferences and history</li>
              <li>Communication records with our astrologers</li>
            </ul>

            <h3>2.2 Technical Information</h3>
            <p>We automatically collect:</p>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide astrology consultation services</li>
              <li>Process payments and bookings</li>
              <li>Communicate with you about appointments</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
              <li>Send relevant updates and offers (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2>4. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information. We may share information with:</p>
            <ul>
              <li>Our astrologers and staff for service delivery</li>
              <li>Payment processors (Razorpay) for secure transactions</li>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information, including:
            </p>
            <ul>
              <li>Encryption of sensitive data</li>
              <li>Secure payment processing</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information</li>
            </ul>
          </section>

          <section>
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2>7. Cookies and Tracking</h2>
            <p>
              We use cookies to enhance your browsing experience, analyze website traffic, and personalize content. 
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2>8. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party services. We are not responsible for their privacy practices. 
              Please review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 18. We do not knowingly collect personal information 
              from children under 18. If you believe we have collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2>11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> privacy@innovanaastro.com</p>
              <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
              <p><strong>Address:</strong> Innovana Astro Services Ltd, [Your Address]</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
