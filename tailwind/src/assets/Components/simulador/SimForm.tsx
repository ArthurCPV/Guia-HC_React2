// src/components/Simulador/SimForm.tsx

import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../../lib/mockApi";
import SuccessToast from "./SuccessToast";

export type SimUser = {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  genero: string;
  dataNascimento: string;
  senha: string;
  confirmarSenha: string;
};



export default function SimForm({ onSuccess }: { onSuccess: (user: SimUser) => void }) {
  const inputClass =
    "w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none";
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SimUser>();
  const [showSuccess, setShowSuccess] = useState(false);

  const watchSenha = watch("senha");

  const validarCPF = (cpf: string) => {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length !== 11) return false;
    return true;
  };

  const onSubmit = async (data: SimUser) => {
    const response = await registerUser(data);

    if (response.ok) {
      setShowSuccess(true);
      onSuccess(data);
      setTimeout(() => setShowSuccess(false), 1400); // esconde depois da animação
    } else {
      alert(response.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-xl flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold text-center mb-3">Cadastro - Guia HC</h2>

        {/* Nome */}
        <label>
          <span>Nome completo:</span>
          <input
            id="input_nome"
            {...register("nome", { required: "Digite seu nome" })}
            className={inputClass}
          />
          {errors.nome && <p className="error">{errors.nome.message}</p>}
        </label>

        {/* Email */}
        <label>
          <span>Email:</span>
          <input
            id="input_email"
            {...register("email", {
              required: "Email obrigatório",
              pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
            })}
            className={inputClass}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </label>

        {/* CPF */}
        <label>
          <span>CPF:</span>
          <input
            id="input_cpf"
            {...register("cpf", {
              required: "Digite seu CPF",
              validate: validarCPF,
            })}
            className={inputClass}
          />
          {errors.cpf && <p className="error">{errors.cpf.message}</p>}
        </label>

        {/* Data de nascimento */}
        <label>
          <span>Data de nascimento:</span>
          <input
            id="input_data"
            type="date"
            {...register("dataNascimento", { required: "Informe a data" })}
            className={inputClass}
          />
          {errors.dataNascimento && <p className="error">{errors.dataNascimento.message}</p>}
        </label>

        {/* Telefone */}
        <label>
          <span>Telefone:</span>
          <input
            id="input_telefone"
            {...register("telefone")}
            className={inputClass}
            placeholder="(XX) XXXXX-XXXX"
          />
        </label>


        {/* Senha */}
        <label>
          <span>Senha:</span>
          <input
            id="input_senha"
            type="password"
            {...register("senha", {
              required: "Insira sua senha",
              minLength: { value: 6, message: "Senha mínima de 6 caracteres" },
            })}
            placeholder="Digite sua senha"
            className={inputClass}
          />
          {errors.senha && <p className="error">{errors.senha.message}</p>}
        </label>

        {/* Confirmar senha */}
        <label>
          <span>Confirmar senha:</span>
          <input
            id="input_confirmarSenha"
            type="password"
            {...register("confirmarSenha", {
              required: "Confirme sua senha",
              validate: (v) => v === watch("senha") || "As senhas não coincidem",
            })}
            placeholder="Confirme sua senha"
            className={inputClass}
          />
        </label>

        <button disabled={isSubmitting} type="submit" className="btn-primary">
          Avançar →
        </button>
      </form>
      <SuccessToast open={showSuccess} />
    </>
  );
}
