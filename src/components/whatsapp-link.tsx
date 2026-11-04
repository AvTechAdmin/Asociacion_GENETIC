import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { generalMessage, whatsapp } from '@/data/site';

export function WhatsappLink({ children = 'Hablemos por WhatsApp', message = generalMessage, className = '', arrow = true }: { children?: React.ReactNode; message?: string; className?: string; arrow?: boolean }) {
  return <a className={`button whatsapp-link ${className}`} href={whatsapp(message)} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} strokeWidth={1.8} aria-hidden="true" /><span>{children}</span>{arrow && <ArrowUpRight size={18} aria-hidden="true" />}<span className="sr-only"> (abre WhatsApp en una nueva pestaña)</span></a>;
}
