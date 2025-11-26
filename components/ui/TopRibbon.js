import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

export default function TopRibbon({ message, closeable = true }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (closeable) {
      const closed = localStorage.getItem('topRibbonClosed');
      if (closed === 'true') {
        setIsVisible(false);
      }
    }
  }, [closeable]);

  const handleClose = () => {
    setIsVisible(false);
    if (closeable) {
      localStorage.setItem('topRibbonClosed', 'true');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-brand text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-sm md:text-base text-center font-medium">{message}</p>
        {closeable && (
          <button
            onClick={handleClose}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-opacity"
            aria-label="Fechar"
          >
            <FiX className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

