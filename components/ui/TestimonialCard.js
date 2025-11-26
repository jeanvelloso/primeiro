import { FiStar } from 'react-icons/fi';

export default function TestimonialCard({ name, role, avatar, rating, text }) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center text-brand font-bold text-lg mr-4">
          {initials}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
        "{text}"
      </p>
    </div>
  );
}

