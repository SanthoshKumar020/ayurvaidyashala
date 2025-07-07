export const TherapyCourses = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Classical Ayurvedic Treatment Therapies
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-800">
        <li>Foundational and Dosha Balancing Course</li>
        <li>Lifestyle Diet and Cooking Course</li>
        <li>Holistic and Massage Therapy Course</li>
        <li>Beauty – Skin Care Course</li>
        <li>Pregnancy Care & Baby Massage Course</li>
        <li>Acupuncture Marma Massage Course</li>
      </ul>
      <button className="mt-6 px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
        View Courses +
      </button>
    </div>
  );
};
