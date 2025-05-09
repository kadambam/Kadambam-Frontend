import React from "react";

const HowItWorks = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-[#ff4a2a] mb-6">
        How It Works – Shop Digital Products Instantly!
      </h1>

      <p className="mb-4">
        At Kadamban Group, we make buying digital products fast, easy, and hassle-free. Follow these simple steps to get started:
      </p>

      <ol className="list-decimal pl-6 space-y-4 text-base md:text-lg mb-8">
        <li>
          <strong>Browse & Choose:</strong> Explore our wide range of high-quality digital products and select the one that fits your needs. Check the product details, specifications, and previews before making a purchase.
        </li>
        <li>
          <strong>Add to Cart & Checkout:</strong> Once you’ve found the perfect product, add it to your cart and proceed to checkout. Our secure payment system ensures a smooth and safe transaction.
        </li>
        <li>
          <strong>Instant Download:</strong> After successful payment, you’ll receive instant access to your digital product. A download link will be available on the confirmation page and sent to your registered email.
        </li>
        <li>
          <strong>Enjoy & Use:</strong> Your purchased digital product is now ready to use! No waiting, no shipping delays—just instant access!
        </li>
        <li>
          <strong>Customization (Available on Select Products):</strong> Some of our digital products allow customization to meet your specific needs. If available, customization details will be mentioned on the product page.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#ff4a2a] mb-4">Why Shop With Us?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>✔ Instant Delivery – No waiting, get your product immediately after payment.</li>
        <li>✔ Secure Payments – 100% safe and encrypted transactions.</li>
        <li>✔ High-Quality Digital Products – Designed for efficiency and performance.</li>
        <li>✔ Dedicated Support – Need help? Our team is here to assist you!</li>
      </ul>
    </div>
  );
};

export default HowItWorks;
