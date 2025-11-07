// web.jsx (Plantilla Simplificada)

// ## 🔴 1. INGREDIENTES Y HERRAMIENTAS (Importaciones)
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importamos un solo icono para el ejemplo
import { Star } from 'lucide-react'; 
import './styles.css';

// ## 🔴 2. PANEL DE CONTROL (Configuración Global)
// ¡IMPORTANTE! Aquí pondrás la URL a tu carpeta de imágenes en GitHub.
// Más abajo te explico cómo obtener esta URL.
const GITHUB_MULTIMEDIA_URL = 'https://raw.githubusercontent.com/Andresfelipe2025/aprenderwweb/main/multimedia/';

const MEDIA_URLS = {
  // Asegúrate de tener una imagen llamada 'mi-foto-de-ejemplo.jpg' en tu carpeta 'multimedia' de GitHub.
  miImagenIA: `${GITHUB_MULTIMEDIA_URL}IA1.png`, //  <-- ¡AQUÍ ESTÁ LA MAGIA!
};

// ## 🔴 3. CONTENIDO (Datos Estáticos)
// (Hemos quitado la Lógica y Control para simplificar)
const PAGINA_INFO = {
  titulo: 'Mi Nueva Página Web',
  descripcion: 'Esta es una plantilla simple para empezar a construir.',
  autor: 'Andrés Felipe',
};

// ## 🔴 4. BLOQUES DE CONSTRUCCIÓN (Componentes de Presentación)

// Un bloque para la cabecera
const Header = ({ titulo }) => {
  return (
    <header className="bg-slate-900 text-white p-6 text-center">
      <h1 className="text-4xl font-bold">{titulo}</h1>
    </header>
  );
};

// Un bloque para el contenido principal
const Content = ({ descripcion, imagen, autor }) => {
  return (
    <main className="p-8 text-center">
      <p className="text-lg mb-6">{descripcion}</p>
      <img src={imagen} alt="Imagen de ejemplo" className="mx-auto rounded-lg shadow-md w-1/2" />
      <div className="mt-6 flex justify-center items-center">
        <Star className="text-yellow-400 mr-2" />
        <p className="text-slate-600">Creado por: {autor}</p>
      </div>
    </main>
  );
};

// Un bloque para el pie de página
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white p-4 text-center text-sm">
      <p>© {new Date().getFullYear()} - Todos los derechos reservados.</p>
    </footer>
  );
};


// ## 🔴 5. EL ARQUITECTO (Componente Orquestador)
const App = () => {
  // El arquitecto simplemente ordena los bloques.
  return (
    <div>
      <Header titulo={PAGINA_INFO.titulo} />
      <Content 
        descripcion={PAGINA_INFO.descripcion}
        imagen={MEDIA_URLS.fotoEjemplo}
        autor={PAGINA_INFO.autor}
      />
      <Footer />
    </div>
  );
};

// ## 🔴 6. SERVIR EL PLATO (Punto de Entrada)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
