import { FiCheck } from 'react-icons/fi';
import CtaButton from './CtaButton';

export default function PricingCard({ name, price, period, features, cta, featured }) {
  return (
    <div
      className={`relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border-2 transition-all duration-200 hover:shadow-xl ${
        featured
          ? 'border-brand scale-105 dark:border-brand'
          : 'border-gray-200 dark:border-gray-700'
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-brand text-white px-4 py-1 rounded-full text-sm font-semibold">
            Mais Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">{price}</span>
          {period && (
            <span className="text-gray-600 dark:text-gray-400 ml-2">{period}</span>
          )}
        </div>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FiCheck className="w-5 h-5 text-brand mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <CtaButton
        variant={featured ? 'primary' : 'outline'}
        href="#cta"
        className="w-full"
      >
        {cta}
      </CtaButton>
    </div>
  );
}

