import { Dna, ShieldCheck, TrendingUp, Handshake } from 'lucide-react';

export function Benefits() {
  return <section className="benefits" aria-label="Nuestro compromiso"><div className="benefits-inner"><div><Dna /><span><strong>Genética comprobada</strong><small>Un buen origen marca la diferencia</small></span></div><div><ShieldCheck /><span><strong>Calidad y sanidad</strong><small>Cuidado en cada etapa</small></span></div><div><TrendingUp /><span><strong>Mayor productividad</strong><small>Potencial para crecer contigo</small></span></div><div><Handshake /><span><strong>Acompañamiento técnico</strong><small>Conocimiento al servicio de tu granja</small></span></div></div></section>;
}
