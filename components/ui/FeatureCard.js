import { FiZap, FiShield, FiStar, FiDollarSign, FiTool, FiCheckCircle } from 'react-icons/fi';

const iconMap = {
  FiZap: FiZap,
  FiShield: FiShield,
  FiStar: FiStar,
  FiDollarSign: FiDollarSign,
  FiTool: FiTool,
  FiCheckCircle: FiCheckCircle,
};

export default function FeatureCard({ icon, title, description }) {
  const IconComponent = iconMap[icon] || FiStar;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 text-brand mb-4">
        <IconComponent className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

