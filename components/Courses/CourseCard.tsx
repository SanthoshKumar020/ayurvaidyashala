interface CourseCardProps {
  image: string;
  title: string;
  duration: string;
  color: string;
}

export const CourseCard = ({ image, title, duration, color }: CourseCardProps) => {
  return (
    <div className="relative rounded-md overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-64 object-cover" />

      <div className={`absolute bottom-0 left-0 w-full clip-brush text-white p-4 ${color}`}>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm">{duration}</p>
        <div className="absolute bottom-4 right-4 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-lg font-bold">
          +
        </div>
      </div>
    </div>
  );
};
