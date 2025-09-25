function ContainerBotoesComponent() {
    return (
        <section id="container-botoes" className="flex flex-col items-center mt-[5%] w-full">
            <a href="integrantes.html"  className="
                mt-[2%] 
                w-[60%] 
                rounded-[15px] 
                bg-[#1F3BDB] 
                flex flex-col items-center text-center 
                border-2 border-black 
                text-white no-underline 
                text-[4vh] 
                m-[1%] p-[1%] 
                transition duration-300
                hover:bg-[#051a94] hover:text-[#42ff5b] hover:scale-125 
                active:bg-[#0026ff] active:text-[#66ef78] active:scale-95
            "
            tabIndex={1}>INTEGRANTES</a>
            <a href="projeto.html" className="
                mt-[2%] 
                w-[60%] 
                rounded-[15px] 
                bg-[#1F3BDB] 
                flex flex-col items-center text-center 
                border-2 border-black 
                text-white no-underline 
                text-[4vh] 
                m-[1%] p-[1%] 
                transition duration-300
                hover:bg-[#051a94] hover:text-[#42ff5b] hover:scale-125 
                active:bg-[#0026ff] active:text-[#66ef78] active:scale-95
            "
            tabIndex={2}>PROJETO</a>
            <a href="faq.html" className="
                mt-[2%] 
                w-[60%] 
                rounded-[15px] 
                bg-[#1F3BDB] 
                flex flex-col items-center text-center 
                border-2 border-black 
                text-white no-underline 
                text-[4vh] 
                m-[1%] p-[1%] 
                transition duration-300
                hover:bg-[#051a94] hover:text-[#42ff5b] hover:scale-125 
                active:bg-[#0026ff] active:text-[#66ef78] active:scale-95
            "
            tabIndex={3}>FAQ</a>
            <a href="contato.html" className="
                mt-[2%] 
                w-[60%] 
                rounded-[15px] 
                bg-[#1F3BDB] 
                flex flex-col items-center text-center 
                border-2 border-black 
                text-white no-underline 
                text-[4vh] 
                m-[1%] p-[1%] 
                transition duration-300
                hover:bg-[#051a94] hover:text-[#42ff5b] hover:scale-125 
                active:bg-[#0026ff] active:text-[#66ef78] active:scale-95
            "
            tabIndex={4}>CONTATO</a>
        </section>
    );
}

export default ContainerBotoesComponent;
