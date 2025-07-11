'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactFormSection = () => {
  const [service, setService] = useState('');

  return (
    <section className="bg-[#f6fbff] py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left: Contact Info */}
        <div>
          <h4 className="text-sm text-green-700 font-semibold mb-2">🌿 Get in touch</h4>
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            We want to share our <span className="text-gray-700">location</span> to find us easily.
          </h2>

          <div className="space-y-4">
            {/* Address 1 */}
            <div className="bg-white border p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-green-700 flex items-center gap-2">
                <FaMapMarkerAlt /> Kerala Ayurvedic School
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Rishikul AyurVaidya Shala, The Kerala Retreat, Kalakode, Pattamthil, Paravur, Kollam(Dt), Kerala, India – 691302
              </p>
            </div>

            {/* Address 2 */}
            <div className="bg-white border p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-green-700 flex items-center gap-2">
                <FaMapMarkerAlt /> Rishikul AyurVaidya Shala
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                South Cliff Beach Resort, Temple Rd, Varkala, Kerala 695141
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white border p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-green-700 flex items-center gap-2">
                <FaPhone /> Telephone number
              </h3>
              <p className="text-sm text-gray-600 mt-1">+91 80899 98454</p>
            </div>

            {/* Email */}
            <div className="bg-white border p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-green-700 flex items-center gap-2">
                <FaEnvelope /> Mail address
              </h3>
              <p className="text-sm text-gray-600 mt-1">ayurvaidyashalakerala@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <form className="space-y-6 bg-white p-6 rounded-2xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Name (required)</label>
              <input
                type="text"
                placeholder="Your name*"
                className="mt-1 w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email address (required)</label>
              <input
                type="email"
                placeholder="Email*"
                className="mt-1 w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Phone (optional)</label>
              <input
                type="text"
                placeholder="Phone"
                className="mt-1 w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Services (required)</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-1 w-full border rounded-lg px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              >
                <option value="">Choose services</option>
                <option>Ayurveda Treatment</option>
                <option>Ayurveda Retreat</option>
                <option>Ayurveda Course</option>
                <option>Ayurveda Panchakarma</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Your message*</label>
            <textarea
              rows={5}
              placeholder="Type message*"
              className="mt-1 w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-blue-700 transition"
          >
            📩 Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
