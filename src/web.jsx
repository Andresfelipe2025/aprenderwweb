// ## 🔴🔴🔴🔴🔴*************** IMPORTACIONES ******************
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ChevronRight, Star, Phone, Mail, MapPin, Clock, Shield, Award, TrendingUp, CheckCircle, ArrowRight, Send, User, Briefcase, MessageSquare, X, Menu, Home, BookOpen, Users, Info } from 'lucide-react';
import './styles.css';
// ##🟢🟢🟢🟢🟢*****Código de MCP equivalente a la API de la sección*******
// La API de esta sección son las dependencias importadas que se usarán en todo el archivo.

// ## 🔴🔴🔴🔴🔴*************** SECCIÓN DE CONFIGURACIÓN GLOBAL ******************
// ¡IMPORTANTE! Reemplaza 'TU_USUARIO' y 'TU_REPOSITORIO' con los tuyos.
const GITHUB_MULTIMEDIA_URL = 'https://raw.githubusercontent.com/TU_USUARIO/TU_REPOSITORIO/main/multimedia/';

// Panel de control para recursos multimedia.
const MEDIA_URLS = {
  hero: `${GITHUB_MULTIMEDIA_URL}hero-background.webp`,
  services: {
    basic: `${GITHUB_MULTIMEDIA_URL}service-essential.webp`,
    professional: `${GITHUB_MULTIMEDIA_URL}service-professional.webp`,
    enterprise: `${GITHUB_MULTIMEDIA_URL}service-enterprise.webp`,
    custom: `${GITHUB_MULTIMEDIA_URL}service-custom.webp`
  },
  testimonials: {
    // Reemplaza estos placeholders con las URLs de las imágenes reales en tu carpeta 'multimedia'
    author1: `https://i.pravatar.cc/150?u=1`, // <-- CAMBIO: Placeholder para imagen de autor
    author2: `https://i.pravatar.cc/150?u=2`,
    author3: `https://i.pravatar.cc/150?u=3`,
    author4: `https://i.pravatar.cc/150?u=4`,
    author5: `https://i.pravatar.cc/150?u=5`,
    author6: `https://i.pravatar.cc/150?u=6`,
    author7: `https://i.pravatar.cc/150?u=7`,
    author8: `https://i.pravatar.cc/150?u=8`,
    author9: `https://i.pravatar.cc/150?u=9`,
    author10: `https://i.pravatar.cc/150?u=10`,
    author11: `https://i.pravatar.cc/150?u=11`,
    author12: `https://i.pravatar.cc/150?u=12`,
    author13: `https://i.pravatar.cc/150?u=13`,
  }
};

// Panel de control para enlaces internos del sitio.
const INTERNAL_LINKS = {
  home: '#inicio',
  services: '#servicios',
  testimonials: '#testimonios',
  contact: '#contacto',
  blog: '#blog',
  faq: '#preguntas-frecuentes',
  privacy: '#politicas-de-privacidad',
  terms: '#terminos-condiciones',
  support: '#atencion-cliente',
  docs: '#documentacion',
};

// ##🟢🟢🟢🟢🟢*****Código de MCP equivalente a la API de la sección*******
// export { MEDIA_URLS, INTERNAL_LINKS };

// ## 🔴🔴🔴🔴🔴*************** LÓGICA Y CONTROL (CUSTOM HOOKS) ******************
const useTypewriter = (texts, speed = 120, pause = 2500) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[index];
      const updatedText = isDeleting
        ? currentText.substring(0, text.length - 1)
        : currentText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    };
    
    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, texts, speed, pause]);
  
  return text;
};
// ##🟢🟢🟢🟢🟢*****Código de MCP equivalente a la API de la sección*******
// La API de esta sección es el hook: useTypewriter.

// ## 🔴🔴🔴🔴🔴*************** DATOS ESTÁTICOS ******************
const HERO_MESSAGES = ["ideas en experiencias digitales", "negocios con soluciones web", "visión en realidad digital"];

const SERVICES = [
  { id: 'basic', title: 'Web Esencial', price: 499000, discountedPrice: 399000, description: 'Presencia digital profesional para startups.', features: ['Diseño responsive', 'Hasta 5 páginas', 'Formulario de contacto', 'SEO básico', 'SSL incluido'], popular: false, badge: 'Ideal para iniciar', color: 'bg-blue-600' },
  { id: 'professional', title: 'Web Profesional', price: 899000, discountedPrice: 699000, description: 'Solución integral para empresas en crecimiento.', features: ['Diseño personalizado', 'Hasta 10 páginas', 'Blog integrado', 'SEO avanzado', 'Soporte 6 meses'], popular: true, badge: 'Más valor', color: 'bg-cyan-600' },
  { id: 'enterprise', title: 'Web Empresarial', price: 1499000, discountedPrice: 1199000, description: 'Plataforma robusta para corporaciones.', features: ['Diseño corporativo', 'Páginas ilimitadas', 'Gestor de contenido', 'Soporte 24/7 (1 año)'], popular: false, badge: 'Grandes empresas', color: 'bg-indigo-600' },
  { id: 'custom', title: 'Solución a Medida', custom: true, description: 'Desarrollo a medida para tus objetivos.', features: ['Análisis estratégico', 'Diseño UX/UI exclusivo', 'Funcionalidades avanzadas'], badge: 'Hecho para ti', color: 'bg-gray-600' }
];

const TESTIMONIALS = [ // <-- CAMBIO: Añadido campo 'image' y más testimonios.
  { id: 1, name: 'Instituto Global', role: 'Directora', content: 'Nova transformó nuestra institución. La conversión aumentó un 65% en tres meses.', image: MEDIA_URLS.testimonials.author1 },
  { id: 2, name: 'Clínica Salud Integral', role: 'Gerente', content: 'Nuestra nueva plataforma optimizó el agendamiento y mejoró la experiencia del paciente.', image: MEDIA_URLS.testimonials.author2 },
  { id: 3, name: 'Odontología Premium', role: 'Directora', content: 'La web refleja la calidad de nuestros servicios. Genera confianza desde el primer clic.', image: MEDIA_URLS.testimonials.author3 },
  { id: 4, name: 'Constructora Futuro', role: 'CEO', content: 'Nova entregó una plataforma que revolucionó nuestra presentación de proyectos a clientes.', image: MEDIA_URLS.testimonials.author4 },
  { id: 5, name: 'Inmobiliaria Elite', role: 'Gerente Comercial', content: 'Nuestras propiedades ahora tienen la presentación digital que merecen. Redujimos ventas en un 40%.', image: MEDIA_URLS.testimonials.author5 },
  { id: 6, name: 'Bufete Legal Estrategia', role: 'Socio Fundador', content: 'Una web que transmite autoridad y confianza. Perfecta para atraer clientes corporativos.', image: MEDIA_URLS.testimonials.author6 },
  { id: 7, name: 'Consultora Pro', role: 'Directora', content: 'La integración con nuestros sistemas internos optimizó la generación de leads.', image: MEDIA_URLS.testimonials.author7 },
  { id: 8, name: 'Academia de Liderazgo', role: 'Fundadora', content: 'Nuestros programas tienen ahora una plataforma digital que refleja nuestra excelencia.', image: MEDIA_URLS.testimonials.author8 },
  { id: 9, name: 'Restaurante Sabor Local', role: 'Chef Ejecutivo', content: 'El sistema de reservas online es impecable. Aumentamos las reservas en un 50%.', image: MEDIA_URLS.testimonials.author9 },
  { id: 10, name: 'Agencia de Viajes Mundo', role: 'CEO', content: 'La experiencia de usuario es fantástica. Los clientes pueden planificar sus viajes fácilmente.', image: MEDIA_URLS.testimonials.author10 },
  { id: 11, name: 'Tienda de Moda Urbana', role: 'Propietaria', content: 'El e-commerce es rápido y seguro. Nuestras ventas online se han duplicado desde el lanzamiento.', image: MEDIA_URLS.testimonials.author11 },
  { id: 12, name: 'Estudio de Arquitectura', role: 'Arquitecto Principal', content: 'El portafolio visual es impactante. Hemos conseguido proyectos más grandes gracias a la web.', image: MEDIA_URLS.testimonials.author12 },
  { id: 13, name: 'Abogados Ramirez', role: 'Director del Centro Jurídico', content: 'Gran trabajo. La página web creada por Nova ha permitido que nuestros clientes accedan mejor a nuestros servicios.', image: MEDIA_URLS.testimonials.author12 },
];

const BLOG_POSTS = [
  {
    id: 1,
    title: '5 claves para la trasformación digital exitosa en 2025',
    author: 'Andrés Felipe Herrera García',
    date: '15 de octubre de 2025',
    excerpt: 'La transformación digital ya no es una opción, es una necesidad. Descubre los pilares fundamentales que aseguran que tu inversión tecnológica se traduzca en un crecimiento real y sostenible...',
    image: 'https://placehold.co/800x400/0f172a/64748b?text=Transformacion+Digital',
  },
  {
    id: 2,
    title: 'El Impacto del Diseño UX/UI en la Retención de Clientes',
    author: 'Carlos Mendoza, Diseñador UX Senior',
    date: '02 de Julio, 2024',
    excerpt: 'Un buen producto no es suficiente. La experiencia del usuario (UX) y la interfaz de usuario (UI) son cruciales para que los clientes no solo lleguen, sino que se queden. Analizamos casos de éxito...',
    image: 'https://placehold.co/800x400/1e293b/f1f5f9?text=Diseno+UX/UI',
  },
  {
    id: 3,
    title: 'SEO Técnico: Optimizando tu Web Más Allá de las Palabras Clave',
    author: 'Sofía Reyes, Especialista SEO',
    date: '28 de Junio, 2024',
    excerpt: 'El contenido es el rey, pero la estructura técnica es el castillo. Exploramos los aspectos técnicos del SEO que a menudo se pasan por alto pero que tienen un impacto masivo en tu posicionamiento...',
    image: 'https://placehold.co/800x400/0f172a/e2e8f0?text=SEO+Tecnico',
  },
];


const FOOTER_LINKS = {
  services: [ 
    { name: 'Web Esencial', href: INTERNAL_LINKS.services }, 
    { name: 'Web Profesional', href: INTERNAL_LINKS.services },
    { name: 'Web Empresarial', href: INTERNAL_LINKS.services },
    { name: 'Solución Personalizada', href: INTERNAL_LINKS.services }
  ],
  support: [ 
    { name: 'Atención al Cliente', href: INTERNAL_LINKS.support },
    { name: 'Documentación', href: INTERNAL_LINKS.docs },
    { name: 'Preguntas Frecuentes', href: INTERNAL_LINKS.faq },
    { name: 'Políticas de Privacidad', href: INTERNAL_LINKS.privacy }
  ],

  company: [
    { name: 'Términos y Condiciones', href: INTERNAL_LINKS.terms }, 
    { name: 'Contacto', href: INTERNAL_LINKS.contact }
  ]
};



// ##🟢🟢🟢🟢🟢*****Código de MCP equivalente a la API de la sección*******
// La API son los objetos de datos: HERO_MESSAGES, SERVICES, TESTIMONIALS, FOOTER_LINKS.

// ## 🔴🔴🔴🔴🔴*************** COMPONENTES DE LA PRESENTACIÓN ******************
const HeroSection = ({ onServiceClick, onContactClick }) => {
  const typedText = useTypewriter(HERO_MESSAGES);
  return (
    <section id="inicio" className="relative bg-slate-900 text-white min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${MEDIA_URLS.hero})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Nova</h1>
          <p className="text-lg text-blue-300 font-medium mt-2">Centro de Desarrollo Tecnológico y Empresarial</p>
          <h2 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
            <span className="font-bold block">Transformamos</span>
            <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent block min-h-[60px] md:min-h-[80px]">{typedText}</span>
          </h2>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
            Soluciones web estratégicas para empresas que buscan destacar, crecer y liderar.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={onServiceClick} className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
              Explorar Servicios <ArrowRight className="inline ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={onContactClick} className="group bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
              Contáctanos <MessageSquare className="inline ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, onPlanSelect }) => (
  <div className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border ${service.popular ? 'border-blue-500 ring-2 ring-blue-500/30 transform lg:scale-105' : 'border-slate-200'}`}>
    {service.popular && <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg font-bold text-xs">MÁS POPULAR</div>}
    <div className="p-8">
      <span className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full mb-4">{service.badge}</span>
      <h3 className="text-2xl font-semibold text-slate-900 mb-2">{service.title}</h3>
      <p className="text-slate-600 mb-6 h-12">{service.description}</p>
      
      {service.custom ? (
        <div className="mb-6 h-16 flex items-center"><span className="text-2xl font-bold text-slate-900">Personalizado</span></div>
      ) : (
        <div className="mb-6 h-16">
          <span className="text-4xl font-bold text-slate-900">${service.discountedPrice.toLocaleString('es-CO')}</span>
          <span className="text-lg text-slate-500 line-through ml-2">${service.price.toLocaleString('es-CO')}</span>
        </div>
      )}
      
      <ul className="space-y-3 mb-8 h-40">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start text-slate-700">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => onPlanSelect(service)} className={`w-full font-semibold py-3 px-4 rounded-xl transition-all duration-300 ${service.popular ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' : 'bg-slate-900 text-white'}`}>
        Seleccionar Plan
      </button>
    </div>
  </div>
);

const ServicesSection = ({ onPlanSelect }) => (
  <section id="servicios" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">Soluciones Web Estratégicas</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Diseñadas para satisfacer tus necesidades, garantizando resultados medibles y un retorno de inversión excepcional.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map(service => <ServiceCard key={service.id} service={service} onPlanSelect={onPlanSelect} />)}
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ testimonial }) => ( // <-- CAMBIO: Componente actualizado para mostrar imagen.
  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 flex flex-col h-full hover:bg-slate-800 transition-all duration-300 border border-slate-700/50">
    <div className="flex items-center mb-4">
      <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-slate-600"/>
      <div>
        <h4 className="font-semibold text-white">{testimonial.name}</h4>
        <p className="text-slate-400 text-sm">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-slate-300 italic flex-grow">"{testimonial.content}"</p>
  </div>
);

const TestimonialsSection = () => { // <-- CAMBIO: Lógica de paginación añadida.
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedTestimonials = TESTIMONIALS.slice(startIndex, endIndex);

  return (
    <section id="testimonios" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Empresas líderes confían en Nova para su transformación digital.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[300px]">
          {displayedTestimonials.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)}
        </div>
        
        {/* Paginación */}
        <div className="flex justify-center items-center mt-12 space-x-3">
          {[...Array(totalPages).keys()].map(index => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentPage === index ? 'bg-blue-500' : 'bg-slate-600 hover:bg-slate-500'}`}
              aria-label={`Ir a la página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => { // Simulación de envío
      setFormState('success');
      setTimeout(() => setFormState('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">¿Listo para transformar tu negocio?</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Contáctanos y uno de nuestros expertos te atenderá para programar una consulta estratégica gratuita.
          </p>
        </div>

        {/* --- ESTRUCTURA PRINCIPAL DE 2 COLUMNAS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* COLUMNA 1: Información de Contacto (NUEVO BLOQUE) */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full">
            <h3 className="text-2xl font-semibold mb-8 text-white">Información de Contacto</h3>
            <div className="space-y-8">
              {/* Item Teléfono */}
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Teléfono</h4>
                  <p className="text-blue-200">+57 300 123 4567</p>
                  <p className="text-slate-400 text-sm">Lunes a Viernes • 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              {/* Item Email */}
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-blue-200">contacto@nova.com.co</p>
                  <p className="text-slate-400 text-sm">Respuesta en menos de 24 horas</p>
                </div>
              </div>
              {/* Item Ubicación */}
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Ubicación</h4>
                  <p className="text-blue-200">Bogotá, Colombia</p>
                  <p className="text-slate-400 text-sm">Zona empresarial premium</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA 2: Formulario (CÓDIGO EXISTENTE) */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Envíanos un Mensaje</h3>
            {formState === 'success' ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                ¡Mensaje enviado! Nos contactaremos pronto.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Tu nombre completo" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="tu@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                  <textarea id="message" rows={4} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                </div>
                <button type="submit" disabled={formState === 'submitting'} className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-70">
                  {formState === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onLinkClick }) => {
  // Esta función decide si un enlace debe cambiar de vista o hacer scroll.
  // Es más robusta porque no depende del texto del href.
  const isPageViewLink = (href) => {
    return href !== INTERNAL_LINKS.services && href !== INTERNAL_LINKS.contact;
  };

  const handleLinkClick = (e, link) => {
    // Si es un enlace para cambiar de página...
    if (isPageViewLink(link.href)) {
      e.preventDefault(); // Evita que el navegador intente seguir el ancla '#'
      onLinkClick(link.href.substring(1)); // Llama a la función del App
    }
    // Si no lo es (es decir, es 'services' o 'contact'), no hacemos nada y dejamos que el href haga el scroll.
  };

  return (
    <footer className="bg-slate-950 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SECCIÓN SUPERIOR CON LAS 4 COLUMNAS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Información de Nova */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Nova
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Centro de Desarrollo Tecnológico y Empresarial especializado en soluciones web profesionales de alto impacto.
            </p>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm text-slate-400">Certificado SSL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-slate-400">Calidad Garantizada</span>
              </div>
            </div>
          </div>
          
          {/* Columnas 2, 3 y 4: Enlaces (Ahora usan la lógica unificada) */}
          {[ 'services', 'support', 'company' ].map(category => (
            <div key={category}>
              {/* Capitaliza el nombre de la categoría para el título */}
              <h4 className="text-lg font-semibold text-white mb-6">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS[category].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* --- LÍNEA DIVISORIA Y PARTE INFERIOR --- */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span className="text-slate-400">Bogotá, Colombia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-slate-500" />
                <span className="text-slate-400">Lunes - Viernes: 8AM - 6PM</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400">
                © {new Date().getFullYear()} Nova - Centro de Desarrollo Tecnológico y Empresarial
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Empresa registrada en Colombia • Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


const BlogPage = ({ posts, onShowHome }) => {
  // MCP de entrada: 'posts' (array de objetos), 'onShowHome' (función)
  // Lógica interna: Renderizar el layout del blog.
  // Salida: Llama a onShowHome() al hacer clic en el botón de .
    return (
    <div className="bg-slate-50 min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Blog de Nova
            </h1>
            <p className="text-slate-600">Ideas y estrategias para el crecimiento digital</p>
          </div>
          <button
            onClick={onShowHome} // API de salida
            className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors"
          >
            Volver al Inicio
          </button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => ( // Recibe 'posts' de la API de entrada
            <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                <p className="text-sm text-slate-500 mb-4">{post.author} • {post.date}</p>
                <p className="text-slate-700 leading-relaxed mb-6">{post.excerpt}</p>
                <a href="#" className="font-semibold text-blue-600 hover:text-blue-800">
                  Leer más <ArrowRight className="inline w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};


const PrivacyPolicyPage = ({ onShowHome }) => (
  <div className="bg-slate-50 min-h-screen p-8">
    <div className="max-w-4xl mx-auto bg-white p-12 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">Políticas de Privacidad</h1>
      <div className="prose prose-lg text-slate-700 space-y-4">
        <p>En Nova, nos comprometemos a proteger tu privacidad. Esta política detalla cómo recopilamos, usamos y protegemos tu información personal...</p>
        <p><strong>Recopilación de Información:</strong> Recopilamos información cuando te registras, realizas un pedido o te pones en contacto con nosotros a través de nuestro formulario...</p>
      </div>
      <button onClick={onShowHome} className="mt-8 bg-slate-800 text-white font-semibold py-2 px-5 rounded-lg">Volver al Inicio</button>
    </div>
  </div>
);


const FAQPage = ({ onShowHome }) => (
  <div className="bg-slate-50 min-h-screen p-8">
    <div className="max-w-4xl mx-auto bg-white p-12 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">Preguntas Frecuentes</h1>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">¿Cuál es el tiempo de entrega de un sitio web?</h3>
          <p className="text-slate-700 mt-2">El tiempo varía según el plan. El plan Esencial toma entre 10-15 días hábiles, mientras que soluciones personalizadas dependen de la complejidad del proyecto.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">¿Ofrecen soporte después del lanzamiento?</h3>
          <p className="text-slate-700 mt-2">Sí, todos nuestros planes incluyen un período de soporte post-lanzamiento. También ofrecemos planes de mantenimiento continuo para garantizar que tu sitio esté siempre actualizado y seguro.</p>
        </div>
      </div>
      <button onClick={onShowHome} className="mt-8 bg-slate-800 text-white font-semibold py-2 px-5 rounded-lg">Volver al Inicio</button>
    </div>
  </div>
);

const TermsPage = ({ onShowHome }) => (
  <div className="bg-slate-50 min-h-screen p-8">
    <div className="max-w-4xl mx-auto bg-white p-12 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">Preguntas Frecuentes</h1>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">¿Cuál es el tiempo de entrega de un sitio web?</h3>
          <p className="text-slate-700 mt-2">El tiempo varía según el plan. El plan Esencial toma entre 10-15 días hábiles, mientras que soluciones personalizadas dependen de la complejidad del proyecto.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">¿Ofrecen soporte después del lanzamiento?</h3>
          <p className="text-slate-700 mt-2">Sí, todos nuestros planes incluyen un período de soporte post-lanzamiento. También ofrecemos planes de mantenimiento continuo para garantizar que tu sitio esté siempre actualizado y seguro.</p>
        </div>
      </div>
      <button onClick={onShowHome} className="mt-8 bg-slate-800 text-white font-semibold py-2 px-5 rounded-lg">Volver al Inicio</button>
    </div>
  </div>
);

const SupportPage = ({ onShowHome }) => (
  <div className="bg-slate-50 min-h-screen p-8">
    <div className="max-w-4xl mx-auto bg-white p-12 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">Preguntas Frecuentes</h1>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">¿Cuál es el tiempo de entrega de un sitio web?</h3>
          <p className="text-slate-700 mt-2">El tiempo varía según el plan. El plan Esencial toma entre 10-15 días hábiles, mientras que soluciones personalizadas dependen de la complejidad del proyecto.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">¿Ofrecen soporte después del lanzamiento?</h3>
          <p className="text-slate-700 mt-2">Sí, todos nuestros planes incluyen un período de soporte post-lanzamiento. También ofrecemos planes de mantenimiento continuo para garantizar que tu sitio esté siempre actualizado y seguro.</p>
        </div>
      </div>
      <button onClick={onShowHome} className="mt-8 bg-slate-800 text-white font-semibold py-2 px-5 rounded-lg">Volver al Inicio</button>
    </div>
  </div>
);

const DocsPage = ({ onShowHome }) => (
  <div className="bg-slate-50 min-h-screen p-8">
    <div className="max-w-4xl mx-auto bg-white p-12 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">Preguntas Frecuentes</h1>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">¿Cuál es el tiempo de entrega de un sitio web?</h3>
          <p className="text-slate-700 mt-2">El tiempo varía según el plan. El plan Esencial toma entre 10-15 días hábiles, mientras que soluciones personalizadas dependen de la complejidad del proyecto.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">¿Ofrecen soporte después del lanzamiento?</h3>
          <p className="text-slate-700 mt-2">Sí, todos nuestros planes incluyen un período de soporte post-lanzamiento. También ofrecemos planes de mantenimiento continuo para garantizar que tu sitio esté siempre actualizado y seguro.</p>
        </div>
      </div>
      <button onClick={onShowHome} className="mt-8 bg-slate-800 text-white font-semibold py-2 px-5 rounded-lg">Volver al Inicio</button>
    </div>
  </div>
);



// ##🟢🟢🟢🟢🟢*****Código de MCP equivalente a la API de la sección*******
// La API de esta sección son los componentes y sus props.

// ## 🔴🔴🔴🔴🔴*************** COMPONENTE ORQUESTADOR ******************
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [activeSection, setActiveSection] = useState('inicio');
  
  const scrollToSection = (sectionId) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const handlePlanSelect = (plan) => {
    alert(`¡Excelente elección! Has seleccionado el plan: ${plan.title}. Pronto te contactaremos.`);
    scrollToSection(INTERNAL_LINKS.contact);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'blog':
        return <BlogPage posts={BLOG_POSTS} onShowHome={() => setCurrentView('home')} />;
      case 'politicas-de-privacidad': // Nota: sin espacios
        return <PrivacyPolicyPage onShowHome={() => setCurrentView('home')} />;
      case 'preguntas-frecuentes':
        return <FAQPage onShowHome={() => setCurrentView('home')} />;
      case 'terminos-condiciones':
        return <TermsPage onShowHome={() => setCurrentView('home')} />;
      case 'atencion-cliente':
        return <SupportPage onShowHome={() => setCurrentView('home')} />;
      case 'documentacion':
        return <DocsPage onShowHome={() => setCurrentView('home')} />;
      default:
        // Por defecto, muestra la página principal completa
        return (
          <div className="min-h-screen bg-white">
            <button onClick={() => setIsMenuOpen(true)} className="fixed top-6 left-6 z-50 bg-slate-900 text-white p-3 rounded-full shadow-lg lg:hidden">
              <Menu className="w-6 h-6" />
            </button>

            {/* Menú para móvil */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}></div>
            <nav className={`fixed top-0 left-0 h-full w-64 bg-slate-900 text-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Nova</h2>
                <button onClick={() => setIsMenuOpen(false)}><X className="w-6 h-6" /></button>
              </div>
              <div className="p-4">
                <a onClick={() => scrollToSection(INTERNAL_LINKS.home)} className="block py-3 px-4 rounded hover:bg-slate-800 cursor-pointer">Inicio</a>
                <a onClick={() => scrollToSection(INTERNAL_LINKS.services)} className="block py-3 px-4 rounded hover:bg-slate-800 cursor-pointer">Servicios</a>
                <a onClick={() => scrollToSection(INTERNAL_LINKS.testimonials)} className="block py-3 px-4 rounded hover:bg-slate-800 cursor-pointer">Testimonios</a>
                <a onClick={() => setCurrentView('blog')} className="block py-3 px-4 rounded hover:bg-slate-800 cursor-pointer">Blog</a>
                <a onClick={() => scrollToSection(INTERNAL_LINKS.contact)} className="block py-3 px-4 rounded hover:bg-slate-800 cursor-pointer">Contacto</a>
              </div>
            </nav>

            {/* Menú para Escritorio */}
            <header className="hidden lg:flex fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
                <a href="#inicio" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex-shrink-0">Nova</a>
                <nav className="flex items-center space-x-8 ml-16">
                  <a onClick={() => scrollToSection(INTERNAL_LINKS.home)} className="text-slate-300 hover:text-white transition cursor-pointer">Inicio</a>
                  <a onClick={() => scrollToSection(INTERNAL_LINKS.services)} className="text-slate-300 hover:text-white transition cursor-pointer">Servicios</a>
                  <a onClick={() => scrollToSection(INTERNAL_LINKS.testimonials)} className="text-slate-300 hover:text-white transition cursor-pointer">Testimonios</a>
                  <a onClick={() => setCurrentView('blog')} className="text-slate-300 hover:text-white transition cursor-pointer">Blog</a>
                  <button onClick={() => scrollToSection(INTERNAL_LINKS.contact)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg">Contacto</button>
                </nav>
              </div>
            </header>
            
            <main>
              <HeroSection onServiceClick={() => scrollToSection(INTERNAL_LINKS.services)} onContactClick={() => scrollToSection(INTERNAL_LINKS.contact)} />
              <ServicesSection onPlanSelect={handlePlanSelect} />
              <TestimonialsSection />
              <ContactSection />
            </main>
            
            <Footer onLinkClick={(view) => setCurrentView(view)} />
          </div>
        );
    }
  };

  return renderCurrentView();
};
// ##🟢🟢🟢🟢🟢*****Código de MCP equivalente a la API de la sección*******
// La API de esta sección es el propio componente App, que une toda la aplicación.

// ## 🔴🔴🔴🔴🔴*************** PUNTO DE ENTRADA ******************
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ##🟢🟢🟢🟢🟢*****Código de MCP equivalente a la API de la sección*******
// La API de esta sección es la ejecución de la app en el DOM.
