'use client';

import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const BlogCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const blogData = [
    {
      title: 'Why Ayurveda Recommends Warm Water Over Cold Water',
      date: 'April 1, 2025',
      image: '/blog1.jpg',
    },
    {
      title: 'Ayurveda and Mental Health: Herbs and Practices for a Calm Mind',
      date: 'March 28, 2025',
      image: '/blog2.jpg',
    },
    {
      title: 'The Connection Between Ayurveda and Energy Healing',
      date: 'March 25, 2025',
      image: '/blog3.jpg',
    },
    {
      title: '5 Benefits of Panchakarma for Body & Mind',
      date: 'March 20, 2025',
      image: '/blog4.jpg',
    },
    {
      title: 'Herbal Remedies for Stress Relief',
      date: 'March 18, 2025',
      image: '/blog5.jpg',
    },
    {
      title: 'Daily Ayurvedic Routines for a Healthy Life',
      date: 'March 15, 2025',
      image: '/blog6.jpg',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 font-medium mb-1">Featured Blog</p>
            <h2 className="text-2xl font-bold text-green-700">
              Learn about our latest <br /> news from blog.
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md mt-4 md:mt-0">
            Follow our latest news and thoughts which focuses exclusively on design, art, vintage,
            and also work updates.
          </p>
        </div>

        {/* Arrows */}
        <div className="flex justify-end items-center gap-2 mb-4">
          <button
            onClick={() => scroll('left')}
            className="p-2 bg-white border rounded-full hover:bg-green-100"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 bg-white border rounded-full hover:bg-green-100"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Blog Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar"
        >
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-sm bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-xs text-gray-500 flex items-center gap-2 mb-2">
                  📅 {blog.date} | ✍️ Ayurvaidya Shala
                </div>
                <h3 className="text-md font-semibold text-gray-800">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
