import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import CtaButton from './CtaButton';

export default function Header({ settings }) {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#features' },
    { label: 'Preços', href: '#pricing' },
    { label: 'Depoimentos', href: '#testimonials' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`${
        settings.theme.header.sticky ? 'sticky top-0 z-50' : ''
      } bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm bg-opacity-95`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center h-36 md:h-48"
            >
              <Image
                src="/logo.png"
                alt={settings.business.brandName}
                width={600}
                height={192}
                className="h-full w-auto object-contain"
                priority
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-brand transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            {settings.theme.header.showThemeToggle && mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <FiSun className="w-5 h-5" />
                ) : (
                  <FiMoon className="w-5 h-5" />
                )}
              </button>
            )}

            {/* CTA Button */}
            <div className="hidden md:block">
              <CtaButton
                variant="primary"
                href={settings.business.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contato
              </CtaButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-brand transition-colors font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <CtaButton
                variant="primary"
                href={settings.business.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                Contato
              </CtaButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

