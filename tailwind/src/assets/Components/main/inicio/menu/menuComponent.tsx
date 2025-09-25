import ContainerBotoesComponent from "./containerBotoes/containeirBotoesComponent";

function MenuComponent() {
    return (
        <div id="menu" className="w-1/2 h-screen flex flex-col">
            <div id="tituloMenu" className="w-full h-[100px] flex items-center justify-center text-center mt-[10%] text-[100%]">
                <h1 className="text-[4vw]">SPRINT 1 CHALLENGE </h1>
            </div>
            <ContainerBotoesComponent />
        </div>
    );
}

export default MenuComponent;
