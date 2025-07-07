export interface TherapyItemProps {
  title: string;
  description: string;
}

export const TherapyItem = ({ title, description }: TherapyItemProps) => (
  <div>
    <h3 className="text-lg font-semibold text-green-700 mb-2">{title}</h3>
    <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
  </div>
);
