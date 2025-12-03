import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is there a subscription required?",
      answer: "Yes, GentleDental.ai operates on a subscription model which includes the smart toothbrush, replacement heads, and full access to the AI platform and app features."
    },
    {
      question: "What devices are supported?",
      answer: "The GentleDental.ai app is available for modern smartphones on both iOS (version 14 and above) and Android (version 8 and above)."
    },
    {
      question: "Can children use GentleDental.ai?",
      answer: "Absolutely! We have a special 'Kids Mode' in the app with fun, interactive guides to help children build healthy, lifelong brushing habits."
    },
    {
      question: "How does Doctor Connect work?",
      answer: "You can securely connect your account with a participating dental professional. This gives them access to your brushing reports, allowing for more informed and personalized care during your visits."
    },
    {
      question: "How is my data secured?",
      answer: "We use end-to-end encryption and store data on secure, compliant servers. You have full control over your data and who you share it with. Your privacy is our top priority."
    },
    {
      question: "What does 'Get started free' include?",
      answer: "The free start includes a 30-day trial of our full platform. You'll receive the smart toothbrush, and if you're not completely satisfied, you can return it at no cost."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 lg:py-28 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          Questions about GentleDental.ai
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200">
              <button
                className="w-full flex justify-between items-center text-left p-5"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className={`text-blue-500 text-2xl transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}