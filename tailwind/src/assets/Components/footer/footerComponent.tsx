import RodapeComponent from "./rodape/rodapeComponent";

function FooterComponent() {
  return (
    <footer className="w-full bg-[#0076b5] text-black mt-auto">
      <div className="container mx-auto py-2 text-center">
        <RodapeComponent />
      </div>
    </footer>
  );
}
export default FooterComponent;
