'use client';

import { FaPlane, FaTrain, FaBus, FaCar } from 'react-icons/fa';

const travelOptions = [
  {
    icon: <FaPlane size={28} />,
    title: 'By Air',
    short: 'The nearest airport is Trivandrum...',
    full: 'The nearest airport is Trivandrum International Airport, located about 40 km from Varkala. Taxis and buses are available from the airport.',
  },
  {
    icon: <FaTrain size={28} />,
    title: 'By Train',
    short: 'Varkala Sivagiri railway station...',
    full: 'Varkala Sivagiri railway station (VAK) is the closest station, with good connectivity to major cities like Kochi, Trivandrum, and Chennai.',
  },
  {
    icon: <FaBus size={28} />,
    title: 'By Bus',
    short: 'Varkala is well connected by bus...',
    full: 'Varkala is well connected by bus to major towns and cities across Kerala and South India. KSRTC and private operators provide frequent services.',
  },
  {
    icon: <FaCar size={28} />,
    title: 'By Car',
    short: 'If driving from Trivandrum...',
    full: 'If driving from Trivandrum, take NH 66 northwards for around 1 hour (approx. 40 km). The road is scenic and smooth.',
  },
];

const ReachVarkala = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-sm text-green-700 font-medium mb-2">🌿 Rishikul AyurVaidya Shala</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12">How To Reach Varkala ?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {travelOptions.map((option, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col items-center text-center p-6 space-y-4">
                <div className="bg-lime-500 text-white rounded-full p-4">
                  {option.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{option.title}</h3>
                <p className="text-gray-500 text-sm transition-all duration-300 group-hover:opacity-0 group-hover:invisible">
                  {option.short}
                </p>
                <p className="absolute inset-0 bg-white text-sm text-gray-600 px-6 py-8 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10">
                  {option.full}
                </p>
              </div>
              <div className="absolute top-3 right-4 text-gray-200 text-4xl font-bold z-0">
                {`0${index + 1}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReachVarkala;
