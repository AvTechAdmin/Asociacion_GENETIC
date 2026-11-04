import { ArrowUpRight, Check, Plus } from 'lucide-react';
import { images, imageSrcSet } from '@/data/site';
import { WhatsappLink } from '@/components/whatsapp-link';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from '@/components/ui/dialog';

export function Piglets() {
  const galleryItems = [
    { type: 'image', url: images.piglets, videoUrl: '/videos/videos_marranos2.mp4', caption: 'Un buen comienzo', alt: 'Grupo de lechones sanos en una granja' }, 
    { type: 'image', url: images.detail, videoUrl: '/videos/videos_marranos3.mp4', caption: 'Genética con potencial', alt: 'Dos lechones de genética porcina' }, 
    // Aquí puedes cambiar el último o agregarle su video correspondiente (por ejemplo, videos_marranos4.mp4 o videos_marranos5.mp4)
    { type: 'image', url: images.welfare, videoUrl: '/videos/videos_marranos4.mp4', caption: 'Cuidado y bienestar', alt: 'Lechones descansando en un entorno adecuado' }
  ];

  return (
    <section id="lechones" className="section piglets-section">
      <div className="section-rail">
        <span>01 / NUESTROS SERVICIOS</span>
        <span>UN BUEN ORIGEN LO CAMBIA TODO</span>
      </div>
      <div className="editorial-grid">
        <div className="section-copy">
          <span className="eyebrow">EL PRIMER PASO PARA CRECER</span>
          <h2>Pequeños hoy.<br /><span className="pink-text">Grandes resultados</span><br />mañana.</h2>
          <h3 className="service-name">Lechones</h3>
          <p>Tu próximo ciclo productivo empieza con una buena elección. Ofrecemos lechones sanos, con excelente genética y alto potencial productivo.</p>
          <p>Cuidamos su origen y desarrollo para que lleguen a tu granja con las bases que necesita una producción sólida.</p>
          <ul className="check-list">
            <li><Check /> Selección genética orientada a resultados</li>
            <li><Check /> Sanidad y manejo responsable</li>
            <li><Check /> Asesoría para tu proyecto productivo</li>
          </ul>
          <WhatsappLink message="Hola, quiero conocer la disponibilidad y las características de sus lechones." className="button-primary">
            Ver más sobre lechones
          </WhatsappLink>
        </div>

        <div className="piglet-media">
          {/* Video Principal (Silenciado) */}
          <div className="image-frame" style={{ overflow: 'hidden', background: '#000' }}>
            <video 
              src="/videos/videos_marranos1.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span className="image-stamp">
              <span>BUENA GENÉTICA</span>
              <strong>Desde el origen.</strong>
              <ArrowUpRight size={25} />
            </span>
          </div>

          {/* Galería inferior */}
          <div className="photo-gallery">
            {galleryItems.map((item, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <button className="gallery-photo" aria-label={`Ver contenido: ${item.caption}`}>
                    <img 
                      src={item.url} 
                      srcSet={imageSrcSet(item.url)} 
                      sizes="(min-width: 900px) 15vw, 30vw" 
                      width={1216} 
                      height={912} 
                      alt={item.alt} 
                      loading="lazy" 
                    />
                    <span>{item.caption}<Plus size={14} /></span>
                  </button>
                </DialogTrigger>
                <DialogContent className="photo-modal">
                  <DialogTitle>{item.caption}</DialogTitle>
                  <DialogDescription>Lechones, genética y bienestar animal.</DialogDescription>
                  
                  {/* Video en el modal configurado con autoPlay, controls y muted por defecto */}
                  {item.videoUrl ? (
                    <video 
                      src={item.videoUrl} 
                      controls 
                      autoPlay 
                      muted 
                      className="w-full h-auto rounded-lg bg-black" 
                    />
                  ) : (
                    <img src={item.url} width={1216} height={912} alt={item.alt} />
                  )}

                  <span className="photo-note">Asociación Genética Porcina.</span>
                  <DialogClose className="text-button">Cerrar</DialogClose>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <div className="media-caption">
            <span>GENÉTICA + CUIDADO + POTENCIAL</span>
            <span>Asociación Genética Porcina</span>
          </div>
        </div>
      </div>
    </section>
  );
}