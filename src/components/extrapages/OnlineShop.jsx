import React from "react";

const ReturnsPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-[#ff4a2a] mb-6">Returns Policy</h1>

      <p className="mb-4">
        At Kadamban Group, we are committed to providing high-quality digital products. As all products are delivered instantly via digital download, we follow a strict no-returns policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#ff4a2a]">1. No Returns on Digital Products</h2>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>All sales are final. Once a digital product is purchased and delivered, it cannot be returned or exchanged.</li>
        <li>Please review product details carefully to ensure compatibility before purchasing.</li>
        <li>We strongly advise checking the product description, specifications, and preview images before checkout.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#ff4a2a]">2. Exceptions & Support</h2>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Duplicate Purchase:</strong> If the same product is purchased more than once accidentally, contact us with transaction details for review.</li>
        <li><strong>Technical Issues:</strong> Facing trouble accessing or downloading your files? Our support team is here to help.</li>
        <li><strong>Customization Requests:</strong> If customization is available for a product, reach out with your requirements (additional charges may apply).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#ff4a2a]">3. Unauthorized Returns & Usage</h2>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>Disputes raised on successful digital deliveries will be treated as violations of our terms.</li>
        <li>Unauthorized sharing, redistribution, or resale of digital products is strictly prohibited and may lead to legal action.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#ff4a2a]">4. Contact Us</h2>
      <p className="mb-2">For help with purchases, technical issues, or customization queries, contact our support team:</p>
      <ul className="pl-5">
        <li>📧 Email: <a href="mailto:kadambangroup@gmail.com" className="text-[#ff4a2a] hover:underline">kadambangroup@gmail.com</a></li>
        <li>📞 Phone: <a href="tel:+919043672462" className="text-[#ff4a2a] hover:underline">+91-9043672462</a></li>
      </ul>

      <p className="mt-6">
        By purchasing digital products from Kadamban Group, you acknowledge and agree to the terms outlined in this Returns Policy.
      </p>
    </div>
  );
};

export default ReturnsPolicy;
