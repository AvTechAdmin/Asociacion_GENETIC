import { Activity, Check, ArrowUpRight, Plus } from 'lucide-react';
import { WhatsappLink } from '@/components/whatsapp-link';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from '@/components/ui/dialog';

export function Ultrasound() {
  const ultrasoundPhotos = [
    { url: '/ecografia1.jpeg', caption: 'Diagnóstico oportuno', alt: 'Ecografía veterinaria porcina' },
    { url: '/ecografia2.jpeg', caption: 'Control de gestación', alt: 'Seguimiento reproductivo' },
    { url: '/ecografia3.jpeg', caption: 'Gestión eficiente', alt: 'Planificación en granja' }
  ];

  return (
    <section id="ecografias" className="section ultrasound-section">
      <div className="section-rail">
        <span>03 / TECNOLOGÍA REPRODUCTIVA</span>
        <span>INFORMACIÓN PARA DECIDIR MEJOR</span>
      </div>
      <div className="editorial-grid ultrasound-grid">
        <div className="ultrasound-media">
          {/* Contenedor del video con altura reducida y más equilibrada */}
          <div className="relative flex justify-center items-center bg-zinc-950 overflow-hidden rounded-2xl shadow-xl border border-zinc-800/50" style={{ minHeight: '380px' }}>
            <video 
              src="/videos/video_ecografia1.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="max-h-[420px] w-auto h-full object-contain mx-auto"
            />
            
            {/* Insignia minimalista flotante */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2.5 bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10 text-white shadow-lg">
              <div className="text-pink-500">
                <Activity size={18} />
              </div>
              <div className="text-xs leading-tight">
                <span className="block font-medium text-white/90">Diagnóstico</span>
                <strong className="font-semibold text-white">Preciso</strong>
              </div>
            </div>
          </div>

          {/* Galería inferior con formato más compacto (aspect-[4/3] en lugar de vertical alto) */}
          <div className="photo-gallery grid grid-cols-3 gap-3 mt-3">
            {ultrasoundPhotos.map((photo, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <button className="gallery-photo relative aspect-[4/3] overflow-hidden rounded-xl group block w-full shadow-md hover:shadow-xl transition-all border border-zinc-200/20" aria-label={`Ampliar fotografía: ${photo.caption}`}>
                    <img 
                      src={photo.url} 
                      alt={photo.alt} 
                      loading="lazy" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 text-[11px] text-white flex items-center justify-between font-medium">
                      <span className="truncate">{photo.caption}</span>
                      <Plus size={12} className="shrink-0 text-pink-400" />
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="photo-modal max-w-md">
                  <DialogTitle>{photo.caption}</DialogTitle>
                  <DialogDescription>Tecnología reproductiva y ecografía porcina.</DialogDescription>
                  <img src={photo.url} alt={photo.alt} className="w-full h-auto max-h-[70vh] object-contain rounded-lg mx-auto" />
                  <span className="photo-note">Asociación Genética Porcina.</span>
                  <DialogClose className="text-button">Cerrar fotografía</DialogClose>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <div className="media-caption mt-2 flex items-center justify-between px-1">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">TECNOLOGÍA CON PROPÓSITO</span>
            <ArrowUpRight size={18} className="text-zinc-400" />
          </div>
        </div>

        <div className="section-copy">
          <span className="eyebrow">MENOS INCERTIDUMBRE, MÁS CONTROL</span>
          <h2>Ecografías.<br /><span className="pink-text">Claridad para</span><br />tu producción.</h2>
          <p>Un diagnóstico reproductivo oportuno hace la diferencia. Nuestro servicio de ecografía veterinaria te ayuda a conocer el estado de tus hembras y tomar decisiones con mayor confianza.</p>
          <ul className="check-list ultrasound-benefits">
            <li>
              <Check />
              <span><strong>Mejor control reproductivo</strong><small>Seguimiento del estado de gestación.</small></span>
            </li>
            <li>
              <Check />
              <span><strong>Diagnósticos más oportunos</strong><small>Información para optimizar el manejo.</small></span>
            </li>
            <li>
              <Check />
              <span><strong>Planificación productiva</strong><small>Organiza tus ciclos con mayor claridad.</small></span>
            </li>
          </ul>
          <WhatsappLink className="button-primary" message="Hola, quiero consultar el servicio de ecografías reproductivas para mi granja porcina.">
            Consulta sobre ecografías
          </WhatsappLink>
        </div>
      </div>
    </section>
  );
}