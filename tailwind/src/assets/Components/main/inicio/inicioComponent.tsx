import MenuComponent from "./menu/menuComponent";

export default function InicioComponent() {
  return (
    <div id="inicio" className="w-full flex-1 flex flex-col md:flex-row box-border min-h-[calc(100vh-120px)]">
      <div
        id="info"
        className="relative group w-full md:w-1/2 flex items-center justify-center bg-center bg-cover min-h-[60vh] md:min-h-[80vh] transition-all duration-300"
        style={{ backgroundImage: "url('/img/info.avif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 group-hover:opacity-60 transition-opacity duration-200" />
        <h1
          className="
            absolute bottom-[15%] left-[8%] 
            z-10 w-[92%] md:w-[90%] max-w-[760px] 
            text-[7vw] md:text-[3.2vw] lg:text-[2.3vw] 
            text-[#f0f0f0] text-left 
            leading-[1.1] transition-transform duration-500 
            group-hover:scale-105
          "
          style={{ transformOrigin: "upper center" }}
        >
          Bem-vindo ao Guia HC, onde você aprenderá como usar o aplicativo hospital das clínicas
        </h1>

      </div>

      <MenuComponent />
    </div>
  );
}