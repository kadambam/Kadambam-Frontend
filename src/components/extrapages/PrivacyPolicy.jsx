import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-[#F8F8F8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-black text-center mb-6 font-[Orbitron]">
          Privacy <span className="text-[#FF4A2A]">Policy</span>
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg mb-10">
          At Kadamban Group, we prioritize the privacy and security of our customers. Whether
          you're engaging with our construction, real estate, interior services, or purchasing digital products from our online platform, we ensure that your personal data is handled with utmost confidentiality and protection.
        </p>

        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200 space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">1. Information We Collect</h3>
            <p className="text-gray-800 text-base leading-relaxed mb-4">
              <strong>General Information (For All Users):</strong>
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Personal Details: Name, email, phone number, and communication records when you contact us.</li>
              <li>Project & Business Data: Construction, real estate, or interior design details, including site locations, designs, and service preferences.</li>
              <li>Technical Data: IP addresses, browser types, and website usage analytics.</li>
            </ul>

            <p className="text-gray-800 text-base leading-relaxed mb-4">
              <strong>Online Shopping (Digital Products) Information:</strong>
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Account Information: When you create an account on our platform, we collect your username, email, and password.</li>
              <li>Order & Payment Details: Billing information and transaction details (we do not store credit/debit card details—payments are securely processed via third-party gateways).</li>
              <li>Purchase History: Details of digital products purchased for record-keeping and customer support.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">2. How We Use Your Information</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Order Processing & Delivery: Providing access to purchased digital files.</li>
              <li>Personalized Experience: Recommending relevant digital products and services.</li>
              <li>Secure Transactions: Ensuring safe payment processing and fraud prevention.</li>
              <li>Communication: Sending order confirmations, service updates, and responding to inquiries.</li>
              <li>Marketing & Promotions: Sharing exclusive deals and service updates (opt-out available anytime).</li>
              <li>Legal & Security Compliance: Preventing unauthorized access, fraud, or misuse of digital content.</li>
            </ul>
            <p className="text-gray-800 text-base leading-relaxed mt-4">
              We do not sell or misuse your data. Information is shared only with trusted service providers for secure payment processing and service execution.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Policy</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li><strong>Digital Products Policy:</strong> All products available on our online platform are digital downloads and delivered instantly after purchase. Customers are responsible for ensuring compatibility before purchasing digital files.</li>
              <li><strong>Payment & No Refund Policy:</strong> All sales of digital products are final. Once a product is purchased and downloaded, no refunds or cancellations are permitted. Exceptions may apply only in cases of duplicate transactions or technical issues preventing access to the purchased files.</li>
              <li><strong>Customization Policy:</strong> Customization is available for specific digital products based on customer requirements. If a product is eligible for customization, the details will be mentioned on the product page. Additional charges and processing time may apply for customizations.</li>
              <li><strong>Data Protection & Security:</strong> We use high-level security measures to safeguard your personal data. Customers have the right to request data deletion or modifications by contacting us.</li>
              <li><strong>Website & Online Store Usage:</strong> Our website uses cookies to improve user experience. By purchasing from our platform, you agree to our no refund policy and digital product terms. Third-party payment processors are used for transactions, and their terms apply to payments.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">6. Contact Information</h3>
            <p className="text-gray-700 text-base mb-4">
              For any concerns regarding our Privacy Policy, No Refund Policy, or Digital Product Terms, contact us:
            </p>
            <ul className="text-gray-700 list-none pl-0">
              <li>📧 Email: <a href="mailto:kadambangroup@gmail.com" className="text-[#FF4A2A]">kadambangroup@gmail.com</a></li>
              <li>📞 Phone: <a href="tel:+919043672462" className="text-[#FF4A2A]">+91-9043672462</a></li>
            </ul>
          </div>

          <p className="text-center text-gray-700 text-base mt-10 max-w-4xl mx-auto">
            By using our services and purchasing digital products from Kadamban Group, you acknowledge and agree to our No Refund Policy, Privacy Policy, and Digital Product Terms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
