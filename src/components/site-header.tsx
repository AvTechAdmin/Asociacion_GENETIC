import { Menu, X } from 'lucide-react';
import { useDisclosure } from '@/hooks/use-disclosure';
import { navigation, phone } from '@/data/site';
import { WhatsappLink } from '@/components/whatsapp-link';

export function SiteHeader() {
  const menu = useDisclosure();
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#inicio" className="brand" aria-label="Inicio">
          <img 
            src="/logo_GENETIC.jpeg" 
            alt="Logo de la empresa" 
            className="h-24 w-auto object-contain" 
          />
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map(item => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        {/* Aquí cambiamos {phone} por el texto fijo "WhatsApp" */}
        <WhatsappLink className="header-whatsapp" arrow={false}>
          WhatsApp
        </WhatsappLink>

        <button 
          type="button" 
          className="menu-toggle" 
          {...menu.triggerProps} 
          aria-label={menu.isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menu.isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menu.isOpen && (
        <nav className="mobile-nav" {...menu.panelProps} aria-label="Navegación móvil">
          {navigation.map(item => (
            <a key={item.href} href={item.href} onClick={menu.close}>
              {item.label}
            </a>
          ))}
          {/* También puedes cambiarlo aquí abajo para el menú móvil si lo deseas */}
          <WhatsappLink arrow={false}>WhatsApp</WhatsappLink>
        </nav>
      )}
    </header>
  );
}