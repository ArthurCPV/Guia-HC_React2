// headerComponent.jsx
import LogoComponent from "./logo/logoComponent";
import MenuCoresComponent from "./menuCores/menuCoresComponent";
import MenuToggleComponent from "./menuToggle/menuToggleComponent";
import TituloComponent from "./titulo/tituloComponent";

function HeaderComponent() {
  return (
    <header className="flex items-center bg-[#0164b5] h-[85px] w-full px-4">
      <LogoComponent />
      {/* título ocupa o centro */}
      <div className="flex-1 flex justify-center">
        <TituloComponent />
      </div>
      {/* menu de cores e toggle são elementos de ação (fixe tamanho) */}
      <div className="flex items-center gap-4">
        <MenuCoresComponent />
        <MenuToggleComponent />
      </div>
    </header>
  );
}

export default HeaderComponent;
