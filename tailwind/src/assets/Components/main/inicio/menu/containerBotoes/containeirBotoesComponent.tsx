function ContainerBotoesComponent() {
  const baseBtn = `
    mt-[2%] w-[68%] md:w-[60%] rounded-[15px] bg-[#1F3BDB] 
    flex items-center justify-center text-center border-2 border-black text-white no-underline
    text-[3.8vh] md:text-[4vh] m-[1%] p-[12px] transition duration-300
    hover:bg-[#051a94] hover:text-[#42ff5b] hover:scale-105
    active:bg-[#0026ff] active:text-[#66ef78] active:scale-95
  `;
  return (
    <section id="container-botoes" className="flex flex-col items-center mt-[3%] w-full">
      <a href="integrantes.html" className={baseBtn} tabIndex={1}>INTEGRANTES</a>
      <a href="projeto.html" className={baseBtn} tabIndex={2}>PROJETO</a>
      <a href="faq.html" className={baseBtn} tabIndex={3}>FAQ</a>
      <a href="contato.html" className={baseBtn} tabIndex={4}>CONTATO</a>
    </section>
  );
}

export default ContainerBotoesComponent;
