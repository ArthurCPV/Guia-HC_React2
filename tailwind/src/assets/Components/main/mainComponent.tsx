import InicioComponent from "./inicio/inicioComponent";

function MainComponent() {
    return (
        <main className="flex flex-col text-white flex-1 w-full justify-center items-center">
            <InicioComponent />
        </main>
    );
}

export default MainComponent;