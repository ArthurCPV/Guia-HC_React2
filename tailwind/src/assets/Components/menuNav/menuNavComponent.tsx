import { Link } from "react-router-dom";

function MenuNavComponent() {
  return (
    <nav className="flex bg-[#007694] justify-center h-[30px] w-full max-w-full z-10">
      <ul className="flex list-none self-center max-w-full">
        <li tabIndex={1} className="text-[17px]">
          <Link to="/" className="no-underline text-[#e4e4e4] ml-[10px] transition-colors duration-500 hover:text-[#0CE899]">
            MENU
          </Link>
        </li>
        <li tabIndex={2} className="text-[17px]">
          <Link to="/integrantes" className="no-underline text-[#e4e4e4] ml-[10px] transition-colors duration-500 hover:text-[#0CE899]">
            INTEGRANTES
          </Link>
        </li>
        <li tabIndex={3} className="text-[17px]">
          <Link to="/projeto" className="no-underline text-[#e4e4e4] ml-[10px] transition-colors duration-500 hover:text-[#0CE899]">
            PROJETO
          </Link>
        </li>
        <li tabIndex={4} className="text-[17px]">
          <Link to="/faq" className="no-underline text-[#e4e4e4] ml-[10px] transition-colors duration-500 hover:text-[#0CE899]">
            FAQ
          </Link>
        </li>
        <li tabIndex={5} className="text-[17px]">
          <Link to="/contato" className="no-underline text-[#e4e4e4] ml-[10px] transition-colors duration-500 hover:text-[#0CE899]">
            CONTATO
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuNavComponent;
