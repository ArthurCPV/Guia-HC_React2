function MenuNavComponent() {
    return (
        <nav className="flex bg-[#007694] justify-center h-[30px] w-full max-w-full">
            <ul className="flex list-none self-center max-w-full">
                <li tabIndex={1} className="text-[17px]">
                    <a 
                        href="#" 
                        className="no-underline text-[#e4e4e4] ml-[10px] transition-colors duration-500 hover:text-[#0CE899]"
                    >
                        MENU
                    </a>
                </li>
                <li tabIndex={2} className="text-[17px]">
                    <a 
                        href="integrantes.html" 
                        className="no-underline text-[#e4e4e4] ml-[10px] transition-colors duration-500 hover:text-[#0CE899]"
                    >
                        INTEGRANTES
                    </a>
                </li>
                <li tabIndex={3} className="text-[17px]">
                    <a 
                        href="projeto.html" 
                        className="no-underline text-[#e4e4e4] ml-[10px] transition-colors duration-500 hover:text-[#0CE899]"
                    >
                        PROJETO
                    </a>
                </li>
                <li tabIndex={4} className="text-[17px]">
                    <a 
                        href="faq.html" 
                        className="no-underline text-[#e4e4e4] ml-[10px] transition-colors duration-500 hover:text-[#0CE899]"
                    >
                        FAQ
                    </a>
                </li>
                <li tabIndex={5} className="text-[17px]">
                    <a 
                        href="contato.html" 
                        className="no-underline text-[#e4e4e4] ml-[10px] transition-colors duration-500 hover:text-[#0CE899]"
                    >
                        CONTATO
                    </a>
                </li>
            </ul>    
        </nav>
    )
}

export default MenuNavComponent
