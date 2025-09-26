import MenuComponent from "./menu/menuComponent";

export default function InicioComponent() {
  return (
    <div id="inicio" className="w-full flex-1 flex flex-col md:flex-row box-border">
      <div
        id="info"
        className="
          relative group w-full md:w-1/2 flex items-center justify-center
          bg-center bg-cover min-h-[50vh] md:min-h-0
          transition-all duration-300
        "
        style={{ backgroundImage: "url('/info.avif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 group-hover:opacity-100 transition-opacity duration-200" />

        <h1
          className="
            relative z-10 w-[90%] max-w-[900px] text-[6vw] md:text-[3.2vw] lg:text-[2.6vw]
            text-[#f0f0f0] text-center
            py-12 md:py-0
            transition-all duration-200 ease-in-out group-hover:scale-105
          "
        >
          Bem-vindo ao Guia HC, onde você aprenderá como usar o aplicativo hospital das clínicas
        </h1>
      </div>

      <div className="w-full md:w-1/2 h-auto md:h-full flex items-center justify-center">
        <MenuComponent />
      </div>
    </div>
  );
}
