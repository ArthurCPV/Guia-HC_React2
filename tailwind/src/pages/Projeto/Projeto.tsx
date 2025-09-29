import React from "react";
import ProjetoForm from "../../assets/Components/projeto/ProjetoForm";

export default function ProjetoPage() {
  return (
    <main className="flex flex-col items-center min-h-screen py-12 px-4">
      <h1 className="text-3xl md:text-4xl text-white underline decoration-[#0011ff]/80 mb-2">Cadastro de Projeto</h1>
      <ProjetoForm />
    </main>
  );
}
