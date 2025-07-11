"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Info } from "lucide-react";

const faqs = [
  {
    category: "Ayurveda Diagnosis and Treatment",
    items: [
      {
        q: "How are diseases diagnosed in Ayurveda?",
        a: "Diseases in Ayurveda are diagnosed through pulse diagnosis, observation, touch, and patient questioning."
      },
      {
        q: "Are Ayurvedic medicines without any side effects?",
        a: "Generally, Ayurvedic medicines are considered safe with minimal side effects when administered properly."
      },
      {
        q: "Why does the treatment take a long time",
        a: "Ayurvedic treatments aim to eliminate the root cause, which may require time depending on the individual condition."
      },
      {
        q: "I have a chronic disease, can Ayurveda help?",
        a: "Yes, Ayurveda often addresses chronic conditions by restoring internal balance."
      },
      {
        q: "Why choose Ayurvedic treatment instead of other medical treatments?",
        a: "Ayurveda offers a holistic, natural approach with fewer side effects and focuses on long-term wellness."
      },
      {
        q: "Does yoga form part of Ayurvedic treatments?",
        a: "Yes, yoga is integral to Ayurveda for physical and mental harmony."
      },
      {
        q: "Do you offer treatments for illnesses not mentioned on your website?",
        a: "Yes, we offer personalized consultations to address individual concerns."
      },
      {
        q: "How many days does the Panchakarma treatment last?",
        a: "It typically lasts from 7 to 21 days depending on individual needs."
      },
      {
        q: "What kind of diseases does Panchakarma cure?",
        a: "Panchakarma is effective for digestive, respiratory, neurological, and skin disorders, among others."
      },
      {
        q: "How successful are your proposed packages?",
        a: "Our packages are designed by experienced doctors and have high success rates for targeted treatments."
      }
    ]
  },
  {
    category: "Stay in Rishikul AyurvaidhiyaShala",
    items: [
      { q: "Do you also have single rooms?", a: "Yes, we have single rooms available." },
      { q: "Are our personal items and luggage safe on the property?", a: "Yes, we ensure the safety and security of your items and luggage." },
      { q: "Do I have the internet in the room?", a: "Yes, high-speed internet is available in all rooms." },
      { q: "Will I be able to go shopping?", a: "Yes, we arrange local shopping visits on request." },
      { q: "Are there mosquito nets?", a: "Yes, all rooms are equipped with mosquito nets." },
      { q: "We are two friends. Can we have rooms next to each other?", a: "Yes, we try to accommodate your preferences based on availability." },
      { q: "Do all rooms have private bathrooms?", a: "Yes, all rooms come with attached private bathrooms." },
      { q: "Are there laundry facilities?", a: "Yes, laundry services are available at an additional cost." },
      { q: "What type of clothing should I wear?", a: "Comfortable, loose-fitting, and natural fiber clothing is recommended." }
    ]
  },
  {
    category: "Food in Rishikul AyurvaidhiyaShala",
    items: [
      { q: "What diet should be taken during treatment?", a: "A balanced, sattvic diet tailored to your dosha is recommended during treatment." },
      { q: "What will the food be like?", a: "The food is primarily vegetarian, nutritious, and tailored to support your treatment." },
      { q: "Is the drinking water safe for Westerners?", a: "Yes, we provide filtered and boiled drinking water." },
      { q: "Do you provide gluten-free and lactose-free food during my stay?", a: "Yes, special diets can be arranged upon request." },
      { q: "I am vegan. Is the food you serve suitable for vegans?", a: "Yes, we can accommodate vegan dietary requirements." }
    ]
  },
  {
    category: "General Q&A about Rishikul",
    items: [
      { q: "How is health defined in Ayurveda?", a: "Health in Ayurveda is a balanced state of body, mind, and spirit." },
      { q: "Will Ayurveda treatments have side effects?", a: "Ayurveda treatments are gentle with minimal side effects when administered properly." },
      { q: "What will the weather be like?", a: "The climate is typically tropical. You’ll receive a packing guide post-booking." },
      { q: "During my retreat days, can I explore Kerala?", a: "Yes, local sightseeing is possible depending on your treatment plan." },
      { q: "Are alcohol and meat allowed during the Ayurveda program?", a: "No, we recommend avoiding alcohol and meat during treatment." },
      { q: "What type of visa do I need to come to India?", a: "A tourist visa is suitable for attending Ayurvedic retreats." },
      { q: "What is your cancellation policy?", a: "Cancellations made before 7 days of arrival will receive a full refund." },
      { q: "Which are the best months to visit for Ayurveda?", a: "October to March is ideal due to the pleasant weather." },
      { q: "I'm nervous about doing this by myself. Will I be alone frequently?", a: "No, our staff and guests create a friendly, supportive environment." },
      { q: "Can I take photos or videos during the practical sessions?", a: "Yes, with permission. Some private sessions may not be recorded." }
    ]
  },
  {
    category: "Retreats in Rishikul AyurvaidhiyaShala",
    items: [
      { q: "Is there an option for shorter retreats, like 2 or 3 days?", a: "Yes, we offer shorter retreats." },
      { q: "What is the difference between Ayurveda retreats and treatments?", a: "Retreats are holistic wellness programs, while treatments are specific medical interventions." },
      { q: "What items should I carry to the retreat?", a: "Comfortable clothes, personal toiletries, and light footwear." },
      { q: "Can I book specific additional treatments by myself?", a: "Yes, based on consultation, extra therapies can be added." },
      { q: "Is there a retreat/program for families?", a: "Yes, we offer special family retreats." },
      { q: "Are there spiritual activities?", a: "Yes, we conduct meditation, chanting, and spiritual discussions." },
      { q: "Are there places to go for walks and be in nature?", a: "Yes, our center is surrounded by beautiful nature trails." }
    ]
  },
  {
    category: "Courses in Rishikul AyurvaidhiyaShala",
    items: [
      { q: "Which are the basic guiding texts in Ayurveda?", a: "The basic guiding texts are the Charaka Samhita, Sushruta Samhita, and Ashtanga Hridaya." },
      { q: "Does the Ayurvedic Beauty Course teach us about cosmetic product preparation?", a: "Yes, the Ayurvedic Beauty Course includes cosmetic product preparation." },
      { q: "In which language are the classes taught?", a: "English. Translators are available for other languages if needed." },
      { q: "How do I enroll in the course?", a: "You can enroll through our website or by contacting us directly." },
      { q: "Do we get certificates?", a: "Yes, a certificate will be provided upon course completion." },
      { q: "Who can attend these courses?", a: "Anyone interested in Ayurveda, no medical background needed." },
      { q: "What is a typical practical session routine?", a: "Practical sessions include demonstrations, hands-on activities, and Q&A." },
      { q: "What is the dress code during the course?", a: "Comfortable, respectful clothing is expected." }
    ]
  },
  {
    category: "Bookings & Transportation",
    items: [
      { q: "How do I know my reservation is booked?", a: "You will receive a confirmation email once your reservation is booked." },
      { q: "Is any advance deposit fee required to confirm my reservation?", a: "Yes, an advance deposit is required to confirm your reservation." },
      { q: "What payment methods are accepted?", a: "We accept credit cards, bank transfers, and digital wallets." },
      { q: "How do I cancel my booking?", a: "Contact us via email or phone with your booking reference." },
      { q: "Do you offer any airport assistance to guests? What is the cost?", a: "Yes, airport pickup is available at additional cost." },
      { q: "What is the nearest airport to your location?", a: "Cochin International Airport is the closest major airport." },
      { q: "Do you provide medicines abroad?", a: "We can ship certain medicines internationally with prescription." },
      { q: "Where can I exchange money?", a: "Currency exchange is available at the airport and nearby authorized centers." },
      { q: "When am I expected to arrive?", a: "You are expected to arrive one day before your treatment begins." },
      { q: "Can I pay in any currency?", a: "We accept payment in INR and most major international currencies." }
    ]
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {faqs.map((group, i) => (
        <div key={i} className="mb-16">
          {/* Category Header */}
          <div className="mb-6 flex items-center gap-2 text-green-700 font-semibold text-sm">
            <Info className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">
            {group.category}
          </h2>

          {/* Grid of FAQs */}
          <div className="grid md:grid-cols-2 gap-6">
            {group.items.map((faq, j) => {
              const isOpen = openIndex === `${i}-${j}`;
              return (
                <div
                  key={j}
                  className="border border-gray-200 rounded-md overflow-hidden shadow-sm bg-white"
                >
                  <button
                    className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-900 hover:bg-green-50 font-medium text-sm"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : `${i}-${j}`)
                    }
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-green-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-green-600" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-sm text-gray-700">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Divider with icon */}
          {i !== faqs.length - 1 && (
            <div className="flex justify-center mt-12">
              <div className="w-32 h-1 bg-green-200 rounded-full relative">
                <div className="absolute inset-x-1/2 -translate-x-1/2 -top-3 text-green-600 text-xl">
                  🪷
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
