import React from "react";
import InputCampo from "./InputCampo";

export default function ContatoForm() {
  return (
    <div className="flex justify-center py-6">
      <form id="formulario" method="GET" className="w-[500px] bg-black/60 border-4 border-yellow-400/100 rounded-2xl p-6 flex flex-col gap-4">
        <fieldset className="flex flex-col gap-4" aria-labelledby="form-titulo">
          <legend className="text-white text-2xl mb-4 text-center">Preencha os dados</legend>

          <InputCampo id="nome" label="Nome Completo:" placeholder="Digite seu nome" tabIndex={1} />
          <InputCampo id="email" label="Email:" type="email" placeholder="Digite seu Email" tabIndex={2} />
          <InputCampo id="assunto" label="Assunto:" placeholder="Qual o assunto?" tabIndex={3} />

          {/* Mensagem */}
          <div className="flex flex-col">
            <label htmlFor="mensagem" className="pl-2 text-lg text-white">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={6}
              placeholder="Deixe sua mensagem"
              tabIndex={4}
              className="mt-2 w-[440px] mx-auto bg-gray-100/80 placeholder-black border-2 border-yellow-400/100 rounded resize-none text-black focus:outline-[5px] focus:outline-yellow-400"
            />
          </div>

          {/* Botão */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              tabIndex={5}
              aria-label="Enviar mensagem de contato"
              className="w-[120px] h-[40px] bg-gray-300 text-black text-lg border-2 border-black rounded hover:bg-gray-400 hover:text-black transition"
            >
              Enviar
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
