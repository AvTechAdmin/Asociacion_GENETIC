import { ArrowRight, ArrowDown, Dna } from 'lucide-react';
import { images, imageSrcSet } from '@/data/site';

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <img 
        className="hero-image" 
        src={images.hero} 
        srcSet={imageSrcSet(images.hero, 1344)} 
        sizes="100vw" 
        width={1344} 
        height={768} 
        alt="Cerda y lechones en un ambiente de granja porcina" 
        fetchPriority="high" 
      />
      <div className="hero-overlay" />
      <div className="hero-curve" aria-hidden="true" />
      
      <div className="hero-content">
        <span className="eyebrow hero-eyebrow">
          <span /> PRODUCCIÓN PORCINA DE ALTA CALIDAD
        </span>
        
        <h1>
          Llevamos tu<br />
          producción al<br />
          <em>siguiente nivel.</em>
        </h1>
        
        <p>
          Buena genética. Mejores decisiones.<br />
          El respaldo que tu producción porcina necesita para crecer.
        </p>
        
        <a href="#lechones" className="button button-primary">
          Conoce nuestros servicios <ArrowRight size={19} />
        </a>

        {/* Sección de Respaldo e Integración con el SENA */}
        <div className="hero-proof flex items-center gap-3">
          <div className="bg-white/90 p-1.5 rounded-lg shrink-0 flex items-center justify-center">
            <img 
              src="public/imagen_sena.jpeg" 
              alt="Logo SENA" 
              className="h-12 w-auto object-contain" 
            />
          </div>
          <div>
            <strong>Respaldo Institucional SENA</strong>
            <span className="block text-xs opacity-90">Formación técnica y desarrollo porcino</span>
          </div>
        </div>
      </div>

      <div className="hero-caption">
        <span>EL FUTURO EMPIEZA CON UN BUEN ORIGEN</span>
        <span>GENÉTICA · SANIDAD · PRODUCTIVIDAD</span>
      </div>
      
      <a href="#lechones" className="hero-scroll" aria-label="Descubre nuestros servicios">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}