import { Link } from "react-router-dom";

function ContainerBotoesComponent() {
  const baseBtn = `
    mt-[2%] w-[65%] md:w-[60%] rounded-[15px]
    bg-[#1F3BDB]
    flex items-center justify-center text-center
    border-2 border-[#998013] text-white no-underline
    text-[3.6vh] md:text-[4vh] m-[1%] px-6 py-3
    transition transform duration-300
    hover:bg-[#051a94] hover:text-[#42ff5b] hover:scale-105
    active:bg-[#0026ff] active:text-[#66ef78] active:scale-95
    shadow-[0_6px_0_0_rgba(0,0,0,1)]
  `;

  return (
    <section id="container-botoes" className="flex flex-col items-center w-full">
      <Link to="/integrantes" className={baseBtn} tabIndex={1}>INTEGRANTES</Link>
      <Link to="/projeto" className={baseBtn} tabIndex={2}>PROJETO</Link>
      <Link to="/simulador" className={baseBtn} tabIndex={3}>SIMULADOR</Link>
      <Link to="/faq" className={baseBtn} tabIndex={4}>FAQ</Link>
      <Link to="/contato" className={baseBtn} tabIndex={5}>CONTATO</Link>
    </section>
  );
}

export default ContainerBotoesComponent;
