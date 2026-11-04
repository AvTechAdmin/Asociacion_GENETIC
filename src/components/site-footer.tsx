import { ArrowUpRight, Instagram, Facebook } from 'lucide-react';
import { navigation, generalMessage, whatsapp, phone } from '@/data/site';
import { openCookiePreferences } from '@/lib/cookie-consent';

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.901 2.884 2.892 2.892 0 0 1-2.892-2.892 2.893 2.893 0 0 1 2.892-2.892c.32 0 .633.056.928.164V9.45a6.327 6.327 0 0 0-.928-.068 6.337 6.337 0 0 0-6.337 6.337 6.337 6.337 0 0 0 6.337 6.337 6.337 6.337 0 0 0 6.337-6.337V8.817a8.21 8.21 0 0 0 4.789 1.517V6.889a4.814 4.814 0 0 1-1.01-.203z"/>
    </svg>
  );
}

export function SiteFooter() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/Genetic_0.1',
      icon: <Instagram size={18} className="text-pink-500" />
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@genetic711',
      icon: <TikTokIcon className="w-[18px] h-[18px] text-zinc-100" />
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1DSg3T7wdy/',
      icon: <Facebook size={18} className="text-blue-500" />
    }
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#inicio" className="flex items-center gap-3 group">
              {/* Logo con un tamaño considerable y sin textos al lado */}
              <img 
                src="public/logo_GENETIC.jpeg" 
                alt="Logo Asociación Genética" 
                className="w-26 h-20 object-contain"
              />
            </a>
            <p className="mt-4">Un buen origen.<br />Un mejor futuro para tu producción.</p>
          </div>

          <div className="footer-links">
            <h3>Explora</h3>
            <nav aria-label="Navegación del pie de página">
              {navigation.map(item => (
                <a key={item.href} href={item.href}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className="footer-contact">
            <h3>Hablemos</h3>
            <a href={whatsapp(generalMessage)} target="_blank" rel="noopener noreferrer">
              {phone}<ArrowUpRight size={16} />
            </a>
            <p>Consultas comerciales por WhatsApp</p>

            <div className="social-placeholders flex items-center gap-3 mt-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2 rounded-lg bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/50 transition-colors flex items-center justify-center"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <small className="block mt-2 text-zinc-400">Síguenos en nuestras redes</small>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Asociación Genética Porcina. Todos los derechos reservados.</span>
          <button onClick={openCookiePreferences}>Configurar cookies</button>
        </div>
      </div>
    </footer>
  );
}