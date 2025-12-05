import { FiShield, FiPieChart, FiActivity, FiBriefcase } from "react-icons/fi";
import type { ItemData } from "../../data/queHacemos";

const iconMap = {
  FiShield: FiShield,
  FiPieChart: FiPieChart,
  FiActivity: FiActivity,
  FiBriefcase: FiBriefcase,
};

interface HacemosItemProps {
  data: ItemData;
}

export default function HacemosItem({ data }: HacemosItemProps) {
  const IconComponent = iconMap[data.icon as keyof typeof iconMap];

  return (
    <div className="bg-white dark:bg-gray-800 group hover:scale-105 transition-all ease-in duration-300 p-6 rounded-xl shadow-lg">
      {IconComponent && (
        <div className="text-4xl mb-4 text-primary-700 dark:text-primary-500 group-hover:text-secondary transition-all ease-in">
          <IconComponent />
        </div>
      )}
      <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-all ease-in text-primary-700 dark:text-primary-500">
        {data.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{data.subtitle}</p>
    </div>
  );
}
