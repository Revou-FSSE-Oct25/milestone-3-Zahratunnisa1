export const metadata = {
  title: 'FAQ | RevoShop',
  description: 'Frequently Asked Questions about RevoShop',
};

const faqs = [
  {
    question: 'What is RevoShop?',
    answer:
      'RevoShop is a simple e-commerce demo application built using Next.js.',
  },
  {
    question: 'How do I see product details?',
    answer:
      'Click on any product card to see its detailed information.',
  },
  {
    question: 'Does RevoShop support cart checkout?',
    answer:
      'No. This project focuses on product listing, routing, and rendering strategies.',
  },
  {
    question: 'What technologies are used?',
    answer:
      'RevoShop is built with Next.js App Router, Tailwind CSS, and TypeScript.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white shadow-sm"
          >
            <h2 className="font-semibold text-lg">{faq.question}</h2>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
