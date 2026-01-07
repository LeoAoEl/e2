import { FiShield, FiPieChart, FiActivity, FiBriefcase } from "react-icons/fi";
import type { ItemData } from "../../data/queHacemos";
import NatureCard from "../shared/NatureCard";

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
    <NatureCard className="text-left items-start">
      {IconComponent && (
        <div className="text-4xl mb-4 text-primary-700 dark:text-primary-500 group-hover:text-secondary transition-all ease-in relative z-10">
          <IconComponent />
        </div>
      )}
      <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-all ease-in text-primary-700 dark:text-primary-500 relative z-10">
        {data.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 relative z-10">
        {data.subtitle}
      </p>
    </NatureCard>
  );
}
