'use client';
import Image from 'next/image';

export default function AntiAgeingPage() {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-10 py-10 gap-8 max-w-7xl mx-auto">
      {/* Left Sidebar */}
      <aside className="w-full md:w-1/3 space-y-6 sticky top-24 self-start h-fit">
        {/* Treatment Menu */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-green-800 font-bold text-lg mb-4">Ayurveda Treatment</h3>
          <ul className="space-y-2 text-green-900 font-medium text-sm">
            <li className="bg-green-800 text-white px-3 py-2 rounded-md flex justify-between items-center">
              Anti Ageing Program <span className="text-white">›</span>
            </li>
            <li>Detox Rehabilitation Program</li>
            <li>Beauty Skin Care Program</li>
            <li>Digestive and Immunity Program</li>
            <li>Panchakarma and Rejuvenation Program</li>
            <li>Spinal and Brain Care Rejuvenation</li>
          </ul>
        </div>

        {/* Pricing Card */}
        <div className="bg-gradient-to-b from-green-600 to-yellow-400 p-6 rounded-xl shadow-md text-white">
          <Image src="/weblogo.png" width={100} height={50} alt="Rishikul" />
          <h4 className="font-bold mt-4 mb-2">Anti Ageing Program in Kerala</h4>
          <ul className="text-sm space-y-1">
            <li>7 Days Program</li>
            <li>Regular Consultation</li>
            <li>Flexible Dates</li>
            <li>In Varkala Kerala India</li>
            <li>Instructed in English</li>
            <li>All Medicines Included</li>
            <li>All Meals Included</li>
            <li>Vegan & Vegetarian Friendly</li>
            <li>Comfortable Accommodation</li>
            <li>Excludes Govt Taxes</li>
          </ul>

          <h5 className="mt-4 mb-2 font-semibold">Discounted Course Fees:</h5>
          <div className="bg-white text-green-900 rounded-md px-3 py-2 mb-2 font-semibold text-sm">
            USD 650 (Single)
          </div>
          <div className="bg-white text-green-900 rounded-md px-3 py-2 font-semibold text-sm">
            USD 1150 (Couple)
          </div>
        </div>
      </aside>

      {/* Right Main Content */}
      <main className="w-full md:w-2/3 space-y-10">
        {/* Treatment Overview */}
        <section>
          <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-700 w-fit mb-4">
            Anti-Ageing Treatment Overview
          </h2>
          <p className="text-gray-700 mb-4">
            Discover the benefits of our comprehensive anti-aging treatment designed to help you look, feel, and be your best...
          </p>
          <p className="text-gray-700">
            Experience improved skin texture, enhanced elasticity, and a radiant glow...
          </p>
          <p className="text-black font-semibold mt-4">
            Join us and start your journey to timeless beauty, inner harmony, and renewed confidence today.
          </p>
        </section>

        {/* Benefits */}
        <section className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-lg font-bold text-green-700 mb-4">Transforming Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Reduces wrinkles and fine lines.</li>
              <li>Improves skin firmness and elasticity.</li>
              <li>Enhances skin hydration and moisture.</li>
              <li>Evens out skin tone and texture.</li>
              <li>Boosts collagen production.</li>
              <li>Reduces stress and promotes relaxation.</li>
              <li>Encourages mindfulness and presence.</li>
              <li>Enhances confidence and self-esteem.</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/benefit1.jpg" alt="Benefit 1" width={250} height={180} className="rounded-md" />
            <Image src="/benefit2.jpg" alt="Benefit 2" width={250} height={180} className="rounded-md" />
          </div>
        </section>

        {/* Highly Recommended */}
        <section>
          <h3 className="text-lg font-bold text-green-700 mb-4">
            Highly Recommended For Anti-Ageing Treatment
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Fine lines and wrinkles</li>
            <li>Age spots and hyperpigmentation</li>
            <li>Loss of skin elasticity and firmness</li>
            <li>Dull skin tone and texture</li>
            <li>Enlarged pores</li>
          </ol>
        </section>

        {/* Nutrition Plan */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-bold text-green-700 mb-4">Nutrition Plan</h3>

          <h4 className="font-semibold text-green-600 mb-2">Before Treatment:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Focus on soups, porridges, and cooked vegetables.</li>
            <li>Avoid fried and rich foods.</li>
            <li>Drink plenty of warm water.</li>
          </ul>

          <h4 className="font-semibold text-green-600 mt-4 mb-2">During Treatment:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Follow a mono-diet like kichari.</li>
            <li>Use Ayurvedic herbs like turmeric and cumin.</li>
            <li>Stay hydrated with warm water.</li>
            <li>Avoid cold/raw foods and caffeine.</li>
          </ul>

          <h4 className="font-semibold text-green-600 mt-4 mb-2">After Treatment:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Reintroduce easy-to-digest foods gradually.</li>
            <li>Maintain healthy habits and hydration.</li>
            <li>Adjust based on how your body responds.</li>
          </ul>
        </section>

        {/* Goal of Treatment */}
        <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-green-700 font-medium">✨ Results to expect</p>
            <h3 className="text-2xl font-bold text-green-800">The Goal of Treatment</h3>
          </div>
          <p className="text-gray-600 max-w-xl text-sm">
            The goal of anti-aging treatment is to help you look and feel younger...
          </p>
        </section>
      </main>
    </div>
  );
}
