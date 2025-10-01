// src/components/header/tituloComponent.tsx
import React from "react";
import { Link } from "react-router-dom"; // se usar react-router

function TituloComponent() {
  return (
    // truncate + whitespace-nowrap evita quebra indesejada; text sizes responsivos
    <h1 id="titulo" className="text-white font-light text-center leading-tight truncate whitespace-nowrap text-2xl md:text-4xl lg:text-5xl">
      <Link to="/" className="no-underline hover:contrast-[2.5] transition duration-300" aria-label="Ir para a página inicial">
        Guia HC
      </Link>
    </h1>
  );
}
export default TituloComponent;
