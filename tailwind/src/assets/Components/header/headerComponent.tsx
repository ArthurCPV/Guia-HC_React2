import React, { useState } from "react";
import LogoComponent from "./logo/logoComponent";
import MenuNavComponent from "../menuNav/menuNavComponent";
import MenuToggleComponent from "./menuToggle/menuToggleComponent";
import TituloComponent from "./titulo/tituloComponent";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // fecha o menu ao redimensionar p/ desktop (opcional)
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="w-full bg-[#0164b5]">
      <div className="max-w-[1400px] mx-auto flex items-center px-4 md:px-10 h-[79px]">
        <LogoComponent />

        <div className="flex-1 flex justify-center">
          <TituloComponent />
        </div>

        {/* desktop menu (visível md+) */}
        <div className="hidden md:flex items-center">
          <MenuNavComponent desktopMode />
        </div>

        {/* botões à direita (hamburger mobile) */}
        <div className="md:hidden">
          <MenuToggleComponent isOpen={isMenuOpen} onToggle={() => setIsMenuOpen((v) => !v)} />
        </div>
      </div>

      {/* overlay mobile menu — usa o mesmo MenuNavComponent, apenas em modo vertical */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-y-full pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* fundo semi-opaco */}
        <div
          className={`absolute inset-0 bg-black/70 ${isMenuOpen ? "opacity-100" : "opacity-0"} transition-opacity`}
          onClick={() => setIsMenuOpen(false)}
        />
        {/* painel com os links */}
        <nav className="relative z-10 bg-[#073b43] w-full max-w-xs h-full p-6 text-white">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img src="/img/LogoGuiaHC.png" alt="logo" className="w-12" />
              <span className="text-xl font-light">Guia HC</span>
            </div>
            <button
              aria-label="Fechar menu"
              onClick={() => setIsMenuOpen(false)}
              className="p-2 border rounded border-white/40"
            >
              ✕
            </button>
          </div>

          {/* reutiliza o componente de links — passamos mobileMode para layout vertical */}
          <MenuNavComponent mobileMode onClickLink={() => setIsMenuOpen(false)} />
        </nav>
      </div>
    </header>
  );
}
