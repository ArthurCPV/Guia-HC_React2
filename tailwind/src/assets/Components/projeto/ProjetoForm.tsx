import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  nome: string;
  email: string;
  emailConfirmacao: string;
  telefone?: string;
  escolhasexo?: "masculino" | "feminino" | "outros";
  senha: string;
  senhaConfirmacao: string;
  dataNascimento: string;
  cpf: string;
};

export default function ProjetoForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const watchEmail = watch("email");
  const watchSenha = watch("senha");

  const hasSurname = (v: string) => v.trim().split(/\s+/).length >= 2;

  const onSubmit = (data: FormValues) => {
    alert("Inscrição enviada com sucesso!");
    console.log("Projeto submission:", data);
    reset();
  };

  return (
    <div
      id="container-projeto"
      className="w-full flex justify-center items-center py-6 pb-8 px-4"
    >
      <form
        id="formularioProjeto"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl flex justify-center"
      >
        <fieldset className="w-[500px] bg-[#353751]/50 border-4 border-[#0011ff]/90 rounded-2xl p-6 flex flex-col gap-4">
          <legend className="sr-only">Cadastro</legend>

          <h2 className="text-white text-2xl text-center md:text-3xl font-medium mb-2">
            Cadastro
          </h2>

          {/* Nome */}
          <div id="nome-form-projeto" className="formrow">
            <label htmlFor="nome-projeto" className="text-white block mb-1">
              Nome Completo:
            </label>
            <input
              id="nome-projeto"
              {...register("nome", {
                required: "Insira seu nome",
                validate: (v) => hasSurname(v) || "Adicione um sobrenome",
              })}
              placeholder="Digite seu nome"
              tabIndex={1}
              className="w-full md:w-[90%] bg-white placeholder-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
            {errors.nome && (
              <p className="text-red-400 text-sm mt-1">
                {String(errors.nome.message)}
              </p>
            )}
          </div>

          {/* Data de Nascimento */}
          <div id="data-nascimento-form-projeto" className="formrow">
            <label htmlFor="data-nascimento" className="text-white block mb-1">
              Data de Nascimento:
            </label>
            <input
              id="data-nascimento"
              type="date"
              {...register("dataNascimento", {
                required: "Informe sua data de nascimento",
              })}
              tabIndex={2}
              className="w-full md:w-[90%] bg-white text-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
            {errors.dataNascimento && (
              <p className="text-red-400 text-sm mt-1">
                {String(errors.dataNascimento.message)}
              </p>
            )}
          </div>

          {/* CPF */}
          <div id="cpf-form-projeto" className="formrow">
            <label htmlFor="cpf-projeto" className="text-white block mb-1">
              CPF:
            </label>
            <input
              id="cpf-projeto"
              type="text"
              placeholder="000.000.000-00"
              {...register("cpf", {
                required: "Insira seu CPF",
                pattern: {
                  value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                  message: "Formato de CPF inválido (use 000.000.000-00)",
                },
              })}
              tabIndex={3}
              className="w-full md:w-[90%] bg-white placeholder-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
            {errors.cpf && (
              <p className="text-red-400 text-sm mt-1">
                {String(errors.cpf.message)}
              </p>
            )}
          </div>

          {/* Email */}
          <div id="email-form-projeto" className="formrow">
            <label htmlFor="email-projeto" className="text-white block mb-1">
              Email:
            </label>
            <input
              id="email-projeto"
              type="email"
              {...register("email", {
                required: "Insira seu email",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Email inválido",
                },
              })}
              placeholder="Digite seu Email"
              tabIndex={4}
              className="w-full md:w-[90%] bg-white placeholder-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {String(errors.email.message)}
              </p>
            )}
          </div>

          {/* Email confirmação */}
          <div id="email-confirmacao-form-projeto" className="formrow">
            <label
              htmlFor="email-confirmacao-projeto"
              className="text-white block mb-1"
            >
              Confirme seu Email:
            </label>
            <input
              id="email-confirmacao-projeto"
              type="email"
              {...register("emailConfirmacao", {
                required: "Confirme seu email",
                validate: (v) =>
                  v === (watchEmail ?? "") || "Os emails não estão iguais",
              })}
              placeholder="Confirme seu Email"
              tabIndex={5}
              className="w-full md:w-[90%] bg-white placeholder-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
            {errors.emailConfirmacao && (
              <p className="text-red-400 text-sm mt-1">
                {String(errors.emailConfirmacao.message)}
              </p>
            )}
          </div>

          {/* Telefone */}
          <div id="telefone-form-projeto" className="formrow">
            <label htmlFor="telefone-projeto" className="text-white block mb-1">
              Telefone:
            </label>
            <input
              id="telefone-projeto"
              type="tel"
              {...register("telefone")}
              placeholder="(12) 12345-6789"
              tabIndex={6}
              className="w-full md:w-[90%] bg-white placeholder-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
          </div>

          {/* gênero */}
          <div
            id="sexo-form-projeto"
            className="formrow flex flex-col md:flex-row md:items-center gap-4"
          >
            <label className="text-white pr-2">Escolha o seu Gênero:</label>
            <div className="flex items-center gap-2">
              <label className="inline-flex items-center gap-2 text-white">
                <input
                  {...register("escolhasexo", {
                    required: "Selecione seu gênero",
                  })}
                  type="radio"
                  value="masculino"
                  className="genRadio accent-[#0011ff]"
                  tabIndex={7}
                />
                Masculino
              </label>

              <label className="inline-flex items-center gap-2 text-white">
                <input
                  {...register("escolhasexo", {
                    required: "Selecione seu gênero",
                  })}
                  type="radio"
                  value="feminino"
                  className="genRadio accent-[#0011ff]"
                />
                Feminino
              </label>

              <label className="inline-flex items-center gap-2 text-white">
                <input
                  {...register("escolhasexo", {
                    required: "Selecione seu gênero",
                  })}
                  type="radio"
                  value="outros"
                  className="genRadio accent-[#0011ff]"
                />
                Outros
              </label>
            </div>
          </div>
          {errors.escolhasexo && (
            <p className="text-red-400 text-sm mt-1 px-1">
              {String(errors.escolhasexo.message)}
            </p>
          )}

          {/* Senha */}
          <div id="senha-form-projeto" className="formrow">
            <label htmlFor="senha-projeto" className="text-white block mb-1">
              Senha:
            </label>
            <input
              id="senha-projeto"
              type="password"
              {...register("senha", {
                required: "Insira sua senha",
                minLength: { value: 6, message: "Senha mínima 6 caracteres" },
              })}
              placeholder="Digite sua senha"
              tabIndex={8}
              className="w-full md:w-[90%] bg-white placeholder-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
            {errors.senha && (
              <p className="text-red-400 text-sm mt-1">
                {String(errors.senha.message)}
              </p>
            )}
          </div>

          {/* Senha confirmação */}
          <div id="senha-confirmacao-form-projeto" className="formrow">
            <label
              htmlFor="senha-confirmacao-projeto"
              className="text-white block mb-1"
            >
              Confirme a Senha:
            </label>
            <input
              id="senha-confirmacao-projeto"
              type="password"
              {...register("senhaConfirmacao", {
                required: "Confirme sua senha",
                validate: (v) =>
                  v === (watchSenha ?? "") || "As senhas não estão iguais",
              })}
              placeholder="Confirme sua senha"
              tabIndex={9}
              className="w-full md:w-[90%] bg-white placeholder-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
            {errors.senhaConfirmacao && (
              <p className="text-red-400 text-sm mt-1">
                {String(errors.senhaConfirmacao.message)}
              </p>
            )}
          </div>

          <div className="flex justify-end pt-4">
            <button
              className="button-projeto w-[120px] h-[40px] bg-gray-300 text-black border-2 border-black rounded hover:bg-[#00cbf4] transition"
              type="submit"
              aria-label="Enviar inscrição do projeto"
              tabIndex={10}
              disabled={isSubmitting}
            >
              Enviar
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
