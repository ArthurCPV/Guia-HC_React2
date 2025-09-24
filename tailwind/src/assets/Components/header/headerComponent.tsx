import LogoComponent from "./logo/logoComponent";
import MenuCoresComponent from "./menuCores/menuCoresComponent";
import MenuToggleComponent from "./menuToggle/menuToggleComponent";
import TituloComponent from "./titulo/tituloComponent";


function HeaderComponent() {
    return (
        <header className="flex justify-between items-center flex-nowrap bg-[#0164b5] h-[85px] w-full min-h-[85px] p-0">
            <LogoComponent />
            <TituloComponent />
            <MenuCoresComponent />
            <MenuToggleComponent />
        </header>
    );
}

export default HeaderComponent;