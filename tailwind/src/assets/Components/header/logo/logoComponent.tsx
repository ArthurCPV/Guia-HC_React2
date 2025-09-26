function LogoComponent() {
  return (
    <div id="logo" className="ml-[6%] mr-[2%] flex-none">
      <a href="#">
        <img
          src="/LogoGuiaHC.png"    // use caminho absoluto para public/
          alt="Logo do Guia HC"
          className="w-[75px] transition duration-800 hover:contrast-200"
        />
      </a>
    </div>
  );
}
export default LogoComponent;
