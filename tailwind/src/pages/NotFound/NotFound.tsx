export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-white">
      <div className="text-center">
        <h2 className="text-2xl mb-4">Página não encontrada</h2>
        <p className="mb-4">Oops — a rota que você tentou não existe.</p>
        <a href="/" className="underline text-[#0CE899]">Voltar à home</a>
      </div>
    </div>
  );
}
