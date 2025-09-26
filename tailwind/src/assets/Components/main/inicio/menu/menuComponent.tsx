import ContainerBotoesComponent from "./containerBotoes/containeirBotoesComponent";

function MenuComponent() {
  return (
    <div id="menu" className="w-full md:w-[80%] max-w-[560px] flex flex-col items-center py-8">
      <div id="tituloMenu" className="w-full h-[100px] flex items-center justify-center text-center">
        <h1 className="text-[8vw] md:text-[4.2vw] lg:text-[3.6vw] font-light">SPRINT 1 <br/> CHALLENGE</h1>
      </div>
      <ContainerBotoesComponent />
    </div>
  );
}
export default MenuComponent;
