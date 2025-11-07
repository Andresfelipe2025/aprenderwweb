// web.jsx (Código actualizado para mostrar tu imagen IA1.png)

// ## 🔴 1. INGREDIENTES Y HERRAMIENTAS (Importaciones)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

// ## 🔴 2. PANEL DE CONTROL (Configuración Global)
// ¡Esta URL ya está correcta para tu repositorio!
const GITHUB_MULTIMEDIA_URL = 'https://raw.githubusercontent.com/Andresfelipe2025/aprenderwweb/main/multimedia/';

const MEDIA_URLS = {
  // Añadimos la referencia a tu imagen subida.
  miImagenIA: `${GITHUB_MULTIMEDIA_URL}IA1.png`, 
};

// ## 🔴 3. CONTENIDO (Datos Estáticos)
const PAGINA_INFO = {
  titulo: 'Mi Imagen de GitHub',
  descripcion: '¡Logré mostrar una imagen desde mi repositorio!',
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

// Un bloque para el contenido principal (MODIFICADO)
const Content = ({ descripcion, autor }) => {
  return (
    <main className="p-8 text-center">
      <p className="text-lg mb-6">{descripcion}</p>
      
      {/* Aquí usamos la referencia del Panel de Control para mostrar tu imagen */}
      <img 
        src={MEDIA_URLS.miImagenIA} 
        alt="Una imagen subida a GitHub" 
        className="mx-auto rounded-lg shadow-lg border-4 border-white"
        style={{ maxWidth: '500px' }} // Un poco de estilo para que no sea tan grande
      />
      
      <div className="mt-6 flex justify-center items-center">
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
  return (
    <div className="bg-slate-100 min-h-screen">
      <Header titulo={PAGINA_INFO.titulo} />
      <Content 
        descripcion={PAGINA_INFO.descripcion}
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
