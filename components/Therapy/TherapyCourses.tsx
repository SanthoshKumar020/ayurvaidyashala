export const TherapyCourses = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
        Classical Ayurvedic Treatment Therapies
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-800 text-[15px] leading-relaxed">
        <li>Foundational and Dosha Balancing Course</li>
        <li>Lifestyle Diet and Cooking Course</li>
        <li>Holistic and Massage Therapy Course</li>
        <li>Beauty – Skin Care Course</li>
        <li>Pregnancy Care & Baby Massage Course</li>
        <li>Acupuncture Marma Massage Course</li>
      </ul>
      <button className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium transition">
        View Courses +
      </button>
    </div>
  );
};
