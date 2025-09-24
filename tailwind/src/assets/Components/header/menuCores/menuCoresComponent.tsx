function MenuCoresComponent() {
    return (
        <div
        id="menuCores"
        className="relative z-20 flex flex-none gap-[10px] justify-center items-center flex-nowrap bg-[#0164b5] h-[50px] w-full min-h-[50px] p-0"
        >
            <button tabIndex={5} className="w-8 h-8 bg-[#1f1d1d] transition duration-300"></button>
            <button tabIndex={6} className="w-8 h-8 bg-[#33343e] transition duration-300"></button>
            <button tabIndex={7} className="w-8 h-8 bg-[#515151] transition duration-300"></button>
            <button tabIndex={8} className="w-8 h-8 bg-[#06092c] transition duration-300"></button>
            <button tabIndex={9} className="w-8 h-8 bg-[#1b598c] transition duration-300"></button>
        </div>
    );
}

export default MenuCoresComponent;