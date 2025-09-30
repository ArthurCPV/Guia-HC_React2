import React from "react";
import InputCampo from "../contato/InputCampo"

export default function ProjetoForm() {
  return (
    <div id="container-projeto" className="w-full flex justify-center items-center py-6 pb-8 px-4">
      <form id="formularioProjeto" method="GET" className="w-full max-w-3xl flex justify-center">
        <fieldset className="w-[500px] bg-[#353751]/50 border-4 border-[#0011ff]/90 rounded-2xl p-6 flex flex-col gap-4">
          {/* legend posicionado */}
          <legend className="sr-only">Cadastro</legend>

          <h2 className="text-white text-2xl text-center md:text-3xl font-medium mb-2">Cadastro</h2>

          <div id="nome-form-projeto" className="formrow">
            <InputCampo
              id="nome-projeto"
              label="Nome Completo:"
              placeholder="Digite seu nome"
              tabIndex={1}
              inputClassName="w-full md:w-[90%] bg-white placeholder-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800"
            />
          </div>

          <div id="email-form-projeto" className="formrow">
            <InputCampo
              id="email-projeto"
              label="Email:"
              type="email"
              placeholder="Digite seu Email"
              tabIndex={2}
              inputClassName="w-full md:w-[90%] bg-white placeholder-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800"
            />
          </div>

          <div id="email-confirmacao-form-projeto" className="formrow">
            <InputCampo
              id="email-confirmacao-projeto"
              label="Confirme seu Email:"
              type="email"
              placeholder="Confirme seu Email"
              tabIndex={3}
              inputClassName="w-full md:w-[90%] bg-white placeholder-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800"
            />
          </div>

          <div id="telefone-form-projeto" className="formrow">
            <InputCampo
              id="telefone-projeto"
              label="Telefone:"
              type="tel"
              placeholder="(12) 12345-6789"
              tabIndex={4}
              inputClassName="w-full md:w-[90%] bg-white placeholder-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800"
            />
          </div>

          {/* gênero (radio group) */}
          <div id="sexo-form-projeto" className="formrow flex flex-col md:flex-row md:items-center gap-4">
            <label className="text-white pr-2">Escolha o seu Gênero:</label>

            <div className="flex items-center gap-2">
              <label className="inline-flex items-center gap-2 text-white">
                <input type="radio" name="escolhasexo" value="masculino" className="genRadio accent-[#0011ff]" tabIndex={5} />
                Masculino
              </label>

              <label className="inline-flex items-center gap-2 text-white">
                <input type="radio" name="escolhasexo" value="feminino" className="genRadio accent-[#0011ff]" />
                Feminino
              </label>

              <label className="inline-flex items-center gap-2 text-white">
                <input type="radio" name="escolhasexo" value="outros" className="genRadio accent-[#0011ff]" />
                Outros
              </label>
            </div>
          </div>

          <div id="senha-form-projeto" className="formrow">
            <InputCampo
              id="senha-projeto"
              label="Senha:"
              type="password"
              placeholder="Digite sua senha"
              tabIndex={6}
              inputClassName="w-full md:w-[90%] bg-white placeholder-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800"
            />
          </div>

          <div id="senha-confirmacao-form-projeto" className="formrow">
            <InputCampo
              id="senha-confirmacao-projeto"
              label="Confirme a Senha:"
              type="password"
              placeholder="Confirme sua senha"
              tabIndex={7}
              inputClassName="w-full md:w-[90%] bg-white placeholder-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800"
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              className="button-projeto w-[120px] h-[40px] bg-gray-300 text-black border-2 border-black rounded hover:bg-[#00cbf4] transition"
              type="submit"
              aria-label="Enviar inscrição do projeto"
              tabIndex={8}
            >
              Enviar
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
