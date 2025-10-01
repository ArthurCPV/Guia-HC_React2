// src/components/header/logo/logoComponent.tsx
import React from "react";
import { Link } from "react-router-dom"; // se usar react-router

function LogoComponent() {
  return (
    <div id="logo" className="flex-none">
      <Link to="/" aria-label="Ir para a página inicial">
        <img src="/img/LogoGuiaHC.png" alt="Logo do Guia HC" className="w-[75px] transition duration-800 hover:contrast-200" />
      </Link>
    </div>
  );
}
export default LogoComponent;
