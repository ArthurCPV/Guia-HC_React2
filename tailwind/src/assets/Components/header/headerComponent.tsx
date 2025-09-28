import LogoComponent from "./logo/logoComponent";
import MenuCoresComponent from "./menuCores/menuCoresComponent";
import MenuToggleComponent from "./menuToggle/menuToggleComponent";
import TituloComponent from "./titulo/tituloComponent";

function HeaderComponent() {
  return (
    <header className="flex items-center bg-[#0164b5] h-[79px] w-full px-10 pb-2">
      <LogoComponent />
      <div className="flex-1 flex justify-center">
        <TituloComponent />
      </div>
      <div className="flex items-center gap-4 pt-3">
        <MenuCoresComponent />
        <MenuToggleComponent />
      </div>
    </header>
  );
}

export default HeaderComponent;
