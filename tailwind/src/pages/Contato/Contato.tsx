import React from "react";
import ContatoForm from "../../assets/Components/contato/ContatoForm";

export default function ContatoPage() {
  return (
    <main className="flex flex-col items-center min-h-screen py-12">
      <h1 className="text-4xl md:text-5xl text-white underline decoration-yellow-400/100 mb-8">
        Entre em contato conosco
      </h1>
      <ContatoForm />
    </main>
  );
}
