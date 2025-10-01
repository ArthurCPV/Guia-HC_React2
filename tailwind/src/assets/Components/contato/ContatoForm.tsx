// src/components/Contato/ContatoForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormValues = {
  nome: string;
  email: string;
  assunto?: string;
  mensagem: string;
};

export default function ContatoForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const hasSurname = (v: string) => v.trim().split(/\s+/).length >= 2;

  const onSubmit = async (data: FormValues) => {
    console.log("Contato enviado:", data);
    alert("Mensagem enviada com sucesso!");
    reset();
    // Se quiser redirecionar para a home depois do envio:
    navigate("/");
  };

  return (
    <div className="flex justify-center py-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[500px] bg-black/60 border-4 border-yellow-400/100 rounded-2xl p-6 flex flex-col gap-4"
      >
        <fieldset className="flex flex-col gap-4" aria-labelledby="form-titulo">
          <legend id="form-titulo" className="text-white text-2xl mb-4 text-center">Preencha os dados</legend>

          {/* Nome */}
          <div className="flex flex-col">
            <label htmlFor="nome" className="pl-2 text-lg text-white">Nome Completo:</label>
            <input
              id="nome"
              {...register("nome", {
                required: "Nome é obrigatório",
                validate: (v) => (v.trim().length > 0 ? (hasSurname(v) ? true : "Adicione um sobrenome") : "Nome é obrigatório"),
              })}
              placeholder="Digite seu nome"
              className="mt-2 w-[440px] mx-auto bg-gray-100/80 placeholder-black border-2 border-yellow-400/100 rounded px-3 py-2"
            />
            {errors.nome && <p className="text-red-400 text-sm mt-1 px-2">{String(errors.nome.message)}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="pl-2 text-lg text-white">Email:</label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email é obrigatório", pattern: { value: /^\S+@\S+\.\S+$/, message: "Email inválido" } })}
              placeholder="Digite seu Email"
              className="mt-2 w-[440px] mx-auto bg-gray-100/80 placeholder-black border-2 border-yellow-400/100 rounded px-3 py-2"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1 px-2">{String(errors.email.message)}</p>}
          </div>

          {/* Assunto */}
          <div className="flex flex-col">
            <label htmlFor="assunto" className="pl-2 text-lg text-white">Assunto:</label>
            <input
              id="assunto"
              {...register("assunto")}
              placeholder="Qual o assunto?"
              className="mt-2 w-[440px] mx-auto bg-gray-100/80 placeholder-black border-2 border-yellow-400/100 rounded px-3 py-2"
            />
          </div>

          {/* Mensagem */}
          <div className="flex flex-col">
            <label htmlFor="mensagem" className="pl-2 text-lg text-white">Mensagem:</label>
            <textarea
              id="mensagem"
              {...register("mensagem", { required: "Mensagem obrigatória", minLength: { value: 10, message: "Escreva ao menos 10 caracteres" } })}
              rows={6}
              placeholder="Deixe sua mensagem"
              className="mt-2 w-[440px] mx-auto bg-gray-100/80 placeholder-black border-2 border-yellow-400/100 rounded resize-none text-black px-3 py-2 focus:outline-[5px] focus:outline-yellow-400"
            />
            {errors.mensagem && <p className="text-red-400 text-sm mt-1 px-2">{String(errors.mensagem.message)}</p>}
          </div>

          {/* Botão */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              aria-label="Enviar mensagem de contato"
              className="w-[120px] h-[40px] bg-gray-300 text-black text-lg border-2 border-black rounded hover:bg-gray-400 hover:text-black transition disabled:opacity-60"
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
