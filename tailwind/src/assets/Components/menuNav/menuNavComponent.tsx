import React from "react";
import { Link } from "react-router-dom";

type Props = {
  desktopMode?: boolean; // quando true renderiza horizont. (md+)
  mobileMode?: boolean;  // quando true renderiza vertical para overlay
  onClickLink?: () => void; // opcional: fechar menu ao clicar no link (mobile)
};

export default function MenuNavComponent({ desktopMode, mobileMode, onClickLink }: Props) {
  const baseLinkClass = "text-white no-underline px-3 py-2 hover:underline";

  if (desktopMode) {
    // horizontais para header desktop
    return (
      <ul className="flex gap-6 items-center text-sm">
        <li><Link to="/" className={baseLinkClass}>MENU</Link></li>
        <li><Link to="/integrantes" className={baseLinkClass}>INTEGRANTES</Link></li>
        <li><Link to="/projeto" className={baseLinkClass}>PROJETO</Link></li>
        <li><Link to="/simulador" className={baseLinkClass}>SIMULADOR</Link></li>
        <li><Link to="/faq" className={baseLinkClass}>FAQ</Link></li>
        <li><Link to="/contato" className={baseLinkClass}>CONTATO</Link></li>
      </ul>
    );
  }

  // vertical para mobile overlay (ou fallback)
  return (
    <ul className={`flex flex-col ${mobileMode ? "gap-6" : "gap-4"} mt-4`}>
      <li><Link to="/" onClick={onClickLink} className="text-white text-lg">MENU</Link></li>
      <li><Link to="/integrantes" onClick={onClickLink} className="text-white text-lg">INTEGRANTES</Link></li>
      <li><Link to="/simulador" onClick={onClickLink} className="text-white text-lg">SIMULADOR</Link></li>
      <li><Link to="/projeto" onClick={onClickLink} className="text-white text-lg">PROJETO</Link></li>
      <li><Link to="/faq" onClick={onClickLink} className="text-white text-lg">FAQ</Link></li>
      <li><Link to="/contato" onClick={onClickLink} className="text-white text-lg">CONTATO</Link></li>
    </ul>
  );
}
