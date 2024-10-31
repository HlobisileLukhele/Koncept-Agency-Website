import { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index, e) => {
    e.preventDefault(); // Prevent default behavior on mobile
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What services does Koncept agency offer?',
      answer:
        'Our agency specializes in branding, graphic design, digital marketing, social media management, and website design to help elevate your brand and connect with your audience effectively.',
    },
    {
      question: 'How does Koncept agency process work?',
      answer:
        'We start with a discovery phase to understand your brand, followed by brainstorming, design drafts, and revisions. Our goal is to ensure your vision is brought to life while maintaining clear communication at every stage.',
    },
    {
      question: 'What types of clients doe Koncept Agency work with?',
      answer:
        'We work with a diverse range of clients including small businesses, startups, and established brands in various industries like fashion, tech, hospitality, and retail.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on the scope and complexity. Typically, branding projects take 2-4 weeks, while comprehensive marketing campaigns or websites may take 6-12 weeks. We prioritize quality and clear milestones for every project.',
    },
  ];

  return (
    <div className="w-full p-8">
      <h2 className="text-2xl font-bold text-center text-black mb-6">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="overflow-hidden">
            <button
              onClick={(e) => toggleFAQ(index, e)}
              className="w-full text-left px-6 py-4 font-semibold text-gray-600 rounded-lg bg-gray-100 hover:bg-gray-300"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="p-6 text-gray-700 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
