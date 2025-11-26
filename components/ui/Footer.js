import { FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer({ settings }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {settings.business.brandName}
            </h3>
            <p className="text-gray-400 mb-4">{settings.business.brandTagline}</p>
            {settings.theme.footer.showSocial && (
              <div className="flex space-x-4">
                {settings.business.social.instagram && (
                  <a
                    href={settings.business.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand transition-colors"
                    aria-label="Instagram"
                  >
                    <FiInstagram className="w-5 h-5" />
                  </a>
                )}
                {settings.business.social.linkedin && (
                  <a
                    href={settings.business.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                )}
                {settings.business.social.whatsapp && (
                  <a
                    href={settings.business.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand transition-colors"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${settings.business.brandEmail}`}
                  className="hover:text-brand transition-colors"
                >
                  {settings.business.brandEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${settings.business.brandPhone}`}
                  className="hover:text-brand transition-colors"
                >
                  {settings.business.brandPhone}
                </a>
              </li>
              <li>
                <a
                  href={settings.business.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-brand transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-brand transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-brand transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-brand transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            {settings.theme.footer.copyright.replace(
              '2025',
              currentYear.toString()
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}

