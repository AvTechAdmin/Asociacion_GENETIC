import { Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { WhatsappLink } from '@/components/whatsapp-link';

function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.901 2.884 2.892 2.892 0 0 1-2.892-2.892 2.893 2.893 0 0 1 2.892-2.892c.32 0 .633.056.928.164V9.45a6.327 6.327 0 0 0-.928-.068 6.337 6.337 0 0 0-6.337 6.337 6.337 6.337 0 0 0 6.337 6.337 6.337 6.337 0 0 0 6.337-6.337V8.817a8.21 8.21 0 0 0 4.789 1.517V6.889a4.814 4.814 0 0 1-1.01-.203z"/>
    </svg>
  );
}

export function Contact() {
  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@Genetic_0.1',
      url: 'https://instagram.com/Genetic_0.1',
      icon: <Instagram className="w-5 h-5 text-pink-500" />
    },
    {
      name: 'TikTok',
      handle: '@genetic711',
      url: 'https://tiktok.com/@genetic711',
      icon: <TikTokIcon className="w-5 h-5 text-zinc-100" />
    },
    {
      name: 'Facebook',
      handle: 'Asociación Genetic',
      url: 'https://www.facebook.com/share/1DSg3T7wdy/',
      icon: <Facebook className="w-5 h-5 text-blue-500" />
    }
  ];

  return (
    <section 
      id="contacto" 
      className="contact-section"
      style={{ 
        width: '100vw', 
        marginLeft: 'calc(50% - 50vw)', 
        marginRight: 'calc(50% - 50vw)',
        padding: '80px 5vw',
        boxSizing: 'border-box'
      }}
    >
      {/* Forzamos el texto a blanco con las propiedades en línea */}
      <div 
        className="section-rail" 
        style={{ maxWidth: '1400px', margin: '0 auto 30px auto', color: '#ffffff' }}
      >
        <span style={{ color: '#ffffff' }}>04 / CONTACTO Y REDES</span>
        <span style={{ color: '#ffffff' }}>ESTAMOS PARA ATENDERTE</span>
      </div>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '50px', 
          alignItems: 'center', 
          maxWidth: '1400px', 
          margin: '0 auto',
          width: '100%'
        }}
      >
        <div className="section-copy">
          <span className="eyebrow">HABLEMOS DE TU PROYECTO</span>
          <h2>¿Listo para mejorar<br /><span className="pink-text">tu producción?</span></h2>
          <p>Escríbenos directamente o visítanos en nuestras redes sociales para conocer más sobre nuestros procesos, resultados e instalaciones.</p>
          
          <WhatsappLink className="button-primary mb-6" message="Hola, quiero comunicarme con la Asociación Genética Porcina.">
            Contactar por WhatsApp
          </WhatsappLink>
        </div>

        {/* Tarjeta de Redes Sociales y Datos */}
        <div className="contact-cards flex flex-col gap-4 w-full">
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-between">
              <span>Síguenos en Redes</span>
              <span className="text-xs font-normal text-zinc-400">Contenido diario</span>
            </h3>

            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-800/40 hover:bg-zinc-800/80 border border-zinc-700/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-700/50">
                      {social.icon}
                    </div>
                    <div>
                      <strong className="block text-sm text-white group-hover:text-pink-400 transition-colors">
                        {social.name}
                      </strong>
                      <span className="text-xs text-zinc-400">{social.handle}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}