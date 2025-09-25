// src/components/InicioComponent.jsx
import MenuComponent from "./menu/menuComponent";

function InicioComponent() {
  return (
    <div id="inicio" className="w-full h-screen flex box-border">
      {/* INFO (metade esquerda) */}
      <div
        id="info"
        className="relative group w-1/2 h-full bg-center bg-cover flex items-center justify-center transition-all duration-300"
        style={{
          backgroundImage: "url('/img/info.avif')",
        }}
      >
        {/* overlay gradient que muda de opacidade no hover */}
        <div
          className="
            absolute inset-0 
            bg-gradient-to-b from-transparent to-black 
            opacity-70 group-hover:opacity-100 
            transition-opacity duration-200
          "
        />

        {/* conteúdo do texto — posicionado por margin-top e responsivo */}
        <h1
          className="
            relative z-10 w-[85%] text-[3vw] text-[#f0f0f0] 
            mt-[60vh] ml-[8%] text-center 
            transition-all duration-200 ease-in-out
            group-hover:mt-[50vh] group-hover:scale-110
          "
        >
          Bem-vindo ao Guia HC, onde você aprenderá como usar o aplicativo hospital das clínicas
        </h1>
      </div>

      {/* MenuComponent (metade direita) */}
      <div className="w-1/2 h-full">
        <MenuComponent />
      </div>
    </div>
  );
}

export default InicioComponent;