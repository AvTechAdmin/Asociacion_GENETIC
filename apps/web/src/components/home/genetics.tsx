import { ArrowUpRight, Check, Dna, FlaskConical } from 'lucide-react';
import { breeds, images, imageSrcSet } from '@/data/site';
import { WhatsappLink } from '@/components/whatsapp-link';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from '@/components/ui/dialog';

export function Genetics() {
  return (
    <section id="pajillas" className="genetics-section">
      <div className="section genetics-inner">
        <div className="section-rail">
          <span>02 / GENÉTICA DE ALTO VALOR</span>
          <span>PRECISIÓN EN CADA DOSIS</span>
        </div>
        <div className="genetics-intro">
          <div>
            <span className="eyebrow">ELIGE EL ORIGEN DE TUS RESULTADOS</span>
            <h2>Pajillas de<br /><span className="pink-text">Genética Porcina.</span></h2>
            <p>Calidad, genética y resultados en cada dosis. Te acompañamos a elegir la línea adecuada para los objetivos de tu granja.</p>
            <WhatsappLink className="button-outline" message="Hola, me interesa recibir asesoría sobre pajillas de genética porcina y sus líneas disponibles.">
              Consulta nuestras líneas
            </WhatsappLink>
          </div>
          
          {/* Imagen cambiada a la foto de la clienta */}
          <div className="genetics-media">
            <img 
              src="public/imagen_pajillas1.jpeg" 
              width={1216} 
              height={912} 
              alt="Pajillas y material de laboratorio para reproducción porcina" 
              loading="lazy" 
              className="w-full h-full object-cover"
            />
            <div className="lab-label">
              <FlaskConical size={22} />
              <span>CIENCIA AL SERVICIO<br /><strong>DE TU PRODUCCIÓN</strong></span>
            </div>
          </div>
        </div>

        <div className="breeds-heading">
          <h3>Una línea para cada objetivo.</h3>
          <span>CONOCE NUESTRAS OPCIONES <ArrowUpRight size={16} /></span>
        </div>

        <div className="breeds-grid">
          {breeds.map(breed => (
            <Dialog key={breed.name}>
              <article className="breed-card">
                <div className="breed-top">
                  <Dna size={29} strokeWidth={1.3} />
                  <span>{breed.code}</span>
                </div>
                <span className="breed-label">{breed.label}</span>
                <h4>{breed.name}</h4>
                <p>{breed.description}</p>
                <div className="breed-tags">
                  {breed.advantages.map(advantage => (
                    <span key={advantage}>{advantage}</span>
                  ))}
                </div>
                <DialogTrigger asChild>
                  <button className="breed-button">
                    Explorar genética <ArrowUpRight size={19} />
                    <span className="sr-only"> {breed.name}</span>
                  </button>
                </DialogTrigger>
              </article>
              
              <DialogContent className="breed-modal">
                <span className="eyebrow">GENÉTICA PORCINA / {breed.code}</span>
                <DialogTitle className="breed-modal-title">{breed.name}</DialogTitle>
                <DialogDescription className="breed-modal-description">{breed.description}</DialogDescription>
                <p>{breed.detail}</p>
                <ul className="check-list">
                  {breed.advantages.map(advantage => (
                    <li key={advantage}><Check />{advantage}</li>
                  ))}
                </ul>
                <p className="technical-note">
                  La elección genética y los resultados dependen del cruce, la sanidad, la nutrición y el manejo. Consulta características y disponibilidad con nuestro equipo.
                </p>
                <WhatsappLink className="button-primary" message={`Hola, quiero información y disponibilidad de pajillas de la línea ${breed.name}.`}>
                  Consultar esta línea
                </WhatsappLink>
                <DialogClose className="text-button">Cerrar información</DialogClose>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <p className="genetics-note">Cada granja es diferente. Seleccionemos juntos la genética que mejor se adapta a la tuya.</p>
      </div>
    </section>
  );
}