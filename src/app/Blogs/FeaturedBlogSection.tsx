// components/FeaturedBlogSection.jsx

'use client';

import { CalendarDays } from 'lucide-react';

const blogs = [
  {
    title: 'Relieve Pain Naturally: Discover the Healing Power of Patra Potli Swedam in Ayurveda',
    date: 'April 11, 2025',
    image: '/blog1.jpg',
  },
  {
    title: 'Ayurveda Abhyanga Treatment: A Timeless Path to Healing and Rejuvenation',
    date: 'April 10, 2025',
    image: '/blog2.jpg',
  },
  {
    title: 'Why Ayurveda Recommends Warm Water Over Cold Water',
    date: 'April 1, 2025',
    image: '/blog3.jpg',
  },
  {
    title: 'The Connection Between Ayurveda and Energy Healing',
    date: 'March 25, 2025',
    image: '/blog4.jpg',
  },
  {
    title: 'Ayurveda for Eye Health: Remedies for Digital Strain',
    date: 'March 21, 2025',
    image: '/blog5.jpg',
  },
  {
    title: 'Ayurveda and Mental Health: Herbs and Practices for a Calm Mind',
    date: 'March 28, 2025',
    image: '/blog6.jpg',
  },
];

export default function FeaturedBlogSection() {
  return (
    <section className="px-4 py-10 lg:px-20 bg-white">
      <div className="text-center mb-8">
        <p className="text-sm text-green-700 font-medium mb-1 flex items-center justify-center gap-1">
          <span>✨</span> Featured Blog
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-green-900">
          Learn about our <span className="text-green-600">latest</span>
        </h2>
        <p className="text-gray-600 text-lg">news from blog.</p>
        <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <CalendarDays className="w-4 h-4 mr-1" />
                {blog.date}
              </div>
              <h3 className="text-md font-semibold text-gray-800 hover:text-green-600 transition-colors">
                {blog.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2">
        {[1, 2, '...', 4].map((page, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              page === 1
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-green-100'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </section>
  );
}
