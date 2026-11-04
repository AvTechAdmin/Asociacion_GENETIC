export const phone = '317 782 57 02';
export const whatsapp = (message: string) => `https://wa.me/573177825702?text=${encodeURIComponent(message)}`;
export const generalMessage = 'Hola, me gustaría recibir asesoría sobre los servicios de Asociación Genética Porcina.';
export const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Lechones', href: '#lechones' },
  { label: 'Pajillas', href: '#pajillas' },
  { label: 'Ecografías', href: '#ecografias' },
  { label: 'Nuestro criadero', href: '#criadero' },
  { label: 'Contacto', href: '#contacto' },
];
const base = 'https://images.hostinger.com/05bbaa4f-ce2a-44ea-bf9c-8264504dfd1f/';
export const images = {
  hero: `${base}be6c7150-8596-433a-940d-30b1087da9de.png`,
  piglets: `${base}a60f4b0a-ca50-42dc-8492-26b6b497c216.png`,
  detail: `${base}f1981087-3b69-42a1-ad19-3def62a345b2.png`,
  welfare: `${base}2170749f-a4ae-4fe5-a856-6087e424ac6d.png`,
  genetics: `${base}f3d8b544-50e5-4a80-a15d-d42a637d0159.png`,
  ultrasound: `${base}b6d659ea-f51f-4d6f-b149-500b60d40e26.png`,
  farm: `${base}60223a0e-88ef-411e-b34f-4f68966c91a8.png`,
};
export function imageSrcSet(url: string, width = 1216) {
  return `${url}?width=375 375w, ${url}?width=768 768w, ${url}?width=1024 1024w, ${width > 1440 ? `${url}?width=1440 1440w, ` : ''}${url} ${width}w`;
}
export const breeds = [
  { name: 'DUPIN', label: 'Equilibrio productivo', code: '01', description: 'Una alternativa para productores que buscan equilibrio entre calidad de carne y desempeño en su sistema productivo.', advantages: ['Calidad de carne', 'Rusticidad', 'Adaptación'], detail: 'Conoce con nuestro equipo las características de esta línea y cómo puede integrarse a tus objetivos de producción. Te orientamos en la selección según el tipo de hembras, el manejo y el destino de los animales.' },
  { name: 'TRIHÍBRIDO', label: 'Potencial en cada cruce', code: '02', description: 'Genética de cruzamiento orientada a combinar características complementarias para tu producción.', advantages: ['Vigor híbrido', 'Adaptación', 'Potencial productivo'], detail: 'Una opción para evaluar en programas de cruzamiento que buscan aprovechar características complementarias. Nuestro equipo te ayuda a revisar su pertinencia según la genética de tu plantel y tus metas productivas.' },
  { name: 'PIETRAIN MAXIMUS', label: 'Conformación y rendimiento', code: '03', description: 'Una línea enfocada en la conformación muscular y el potencial de rendimiento cárnico.', advantages: ['Conformación', 'Desarrollo muscular', 'Calidad de canal'], detail: 'Consulta las características de esta línea para programas orientados a conformación y rendimiento de canal. Te asesoramos sobre las condiciones de manejo y los cruces adecuados para tu sistema.' },
  { name: 'DUROC MATERNO', label: 'La fuerza del origen', code: '04', description: 'Una alternativa genética para programas que valoran rusticidad, calidad de carne y aptitud reproductiva.', advantages: ['Fertilidad', 'Rusticidad', 'Calidad de carne'], detail: 'Explora con nuestro equipo su uso dentro de tu programa reproductivo. Revisamos contigo la selección de la línea, los objetivos de fertilidad y las características de carne que deseas priorizar.' },
];
