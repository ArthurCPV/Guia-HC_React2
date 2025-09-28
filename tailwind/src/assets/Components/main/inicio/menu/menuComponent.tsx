import ContainerBotoesComponent from "./containerBotoes/containeirBotoesComponent";

function MenuComponent() {
  return (
    <div id="menu" className="w-full md:w-[80%] max-w-[660px] flex flex-col items-center py-6 ml-auto mr-auto">
      <div className="p-4 text-center md:text-center">
        <h1 className="text-3xl md:text-5xl text-white mb-4">Guia HC</h1>
        <p className="text-gray-200 mb-6 max-w-lg mx-auto md:mx-0">
          Challenge - Sprint 3 - Hospital das Clínicas
        </p>
      </div>
        <ContainerBotoesComponent />
    </div>
  );
}
export default MenuComponent;
