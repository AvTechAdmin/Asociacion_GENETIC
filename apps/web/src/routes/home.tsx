import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { images } from '@/data/site';
import { Hero } from '@/components/home/hero';
import { Benefits } from '@/components/home/benefits';
import { Piglets } from '@/components/home/piglets';
import { Genetics } from '@/components/home/genetics';
import { Ultrasound } from '@/components/home/ultrasound';
import { Farm } from '@/components/home/farm';
import { Contact } from '@/components/home/contact';

export function meta({ matches, location }: Route.MetaArgs) {
  return seo({ matches, location }, {
    title: 'Asociación Genética Porcina | Genética de calidad',
    description: 'Lechones, pajillas de genética porcina y ecografías reproductivas. Recibe asesoría para tu granja y consulta nuestros servicios por WhatsApp.',
    image: images.hero,
    jsonLd: [
      { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Asociación Genética Porcina', inLanguage: 'es' },
      { '@context': 'https://schema.org', '@type': 'Organization', name: 'Asociación Genética Porcina', telephone: '+573177825702', description: 'Genética porcina, lechones, pajillas y ecografías reproductivas.', contactPoint: { '@type': 'ContactPoint', telephone: '+573177825702', contactType: 'consultas comerciales', availableLanguage: 'Spanish' } },
      { '@context': 'https://schema.org', '@type': 'Service', name: 'Lechones de genética porcina', serviceType: 'Lechones con potencial productivo', provider: { '@type': 'Organization', name: 'Asociación Genética Porcina' } },
      { '@context': 'https://schema.org', '@type': 'Service', name: 'Pajillas de genética porcina', serviceType: 'Asesoría en genética reproductiva porcina', provider: { '@type': 'Organization', name: 'Asociación Genética Porcina' } },
      { '@context': 'https://schema.org', '@type': 'Service', name: 'Ecografías reproductivas porcinas', serviceType: 'Diagnóstico reproductivo veterinario', provider: { '@type': 'Organization', name: 'Asociación Genética Porcina' } },
    ],
  });
}

export default function HomePage() {
  return <><Hero /><Benefits /><Piglets /><Genetics /><Ultrasound /><Farm /><Contact /></>;
}
