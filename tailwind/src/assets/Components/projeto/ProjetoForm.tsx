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
  // Estado para controlar feedback de sucesso
  const [sucessoCadastro, setSucessoCadastro] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const watchEmail = watch("email");
  
  // Monitora o valor da senha em tempo real
  const senha = watch("senha");

  // Estado para armazenar resposta da API
  const [senhaInfo, setSenhaInfo] = React.useState<{
    nivel: string;
    relatorio: string[];
    pontuacao: number;
  } | null>(null);


  // Consulta API Python quando senha muda
  React.useEffect(() => {
    if (!senha) {
      setSenhaInfo(null);
      return;
    }

    const fetchAPI = async () => {
      try {
        const response = await fetch(
          `https://verificador-senha-api.onrender.com/senha/${encodeURIComponent(senha)}`
        );

        const data = await response.json();

        setSenhaInfo({
          nivel: data.nivel,
          relatorio: Array.isArray(data.relatorio) ? data.relatorio : [],
          pontuacao: Number(data.pontuacao) || 0,
        });
      } catch (error) {
        console.error("Erro ao consultar API de senha:", error);
      }
    };

    fetchAPI();
  }, [senha]);

  // Fecha popup de sucesso com ESC
  React.useEffect(() => {
    if (!sucessoCadastro) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSucessoCadastro(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [sucessoCadastro]);

  const hasSurname = (v: string) => v.trim().split(/\s+/).length >= 2;

  // SUBMIT DO FORMULÁRIO -> envia para Java
  const onSubmit = async (data: FormValues) => {
    try {
      const idUsuario = Math.floor(Math.random() * 99999) + 1;

      // CPF vindo do front tem máscara, removemos antes de enviar
      const cpfLimpo = data.cpf.replace(/\D/g, "");

      const payload = {
        idUsuario,
        nomeCompleto: data.nome,
        email: data.email,
        senha: data.senha,
        cpf: cpfLimpo, // ✅ envia APENAS números para o Java
        dataNascimento: data.dataNascimento,
        genero: data.escolhasexo,
        telefone: data.telefone ?? "",
      };

      const response = await fetch(
        "https://sprint4-java-6u07.onrender.com/usuarios",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        alert("Erro ao cadastrar usuário: " + errorText);
        return;
      }

      setSucessoCadastro(true);
      reset();
      setSenhaInfo(null);

    } catch (error) {
      alert("❌ Erro ao conectar com o servidor");
      console.error(error);
    }
  };

  return (
    <div
      id="container-projeto"
      className="w-full flex justify-center items-center py-6 pb-8 px-4"
    >
       {/* Link para gerenciamento de usuários */}
       <div className="fixed top-4 right-4">
         <a
           href="/guia/usuarios"
           className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-lg"
         >
           Gerenciar Usuários
         </a>
       </div>

      {/* Pop-up de sucesso com ações (posicionado no canto inferior direito para não sobrepor o link Gerenciar Usuários) */}
      {sucessoCadastro && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Ações após cadastro"
          className="fixed bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg border border-green-200 z-50 w-72"
        >
          <h3 className="text-lg font-semibold mb-3">Ações disponíveis</h3>
          <div className="space-y-2">
            <a
              href="/guia/usuarios"
              className="block w-full bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600 transition"
            >
              Ver todos os usuários
            </a>
            <button
              onClick={() => setSucessoCadastro(false)}
              className="w-full bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            >
              Cadastrar novo usuário
            </button>
          </div>
        </div>
      )}

      {/* popup keyboard close handled in effect above */}
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
              className="w-full md:w-[90%] bg-white placeholder-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
            {errors.nome && (
              <p className="text-red-400 text-sm mt-1">{errors.nome.message}</p>
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
              className="w-full md:w-[90%] bg-white border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
            {errors.dataNascimento && (
              <p className="text-red-400 text-sm mt-1">
                {errors.dataNascimento.message}
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
                  message: "Formato inválido (use 000.000.000-00)",
                },
              })}
              className="w-full md:w-[90%] bg-white placeholder-black border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
            {errors.cpf && (
              <p className="text-red-400 text-sm mt-1">{errors.cpf.message}</p>
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
              className="w-full md:w-[90%] bg-white border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Email confirmação */}
          <div id="email-confirmacao-form-projeto" className="formrow">
            <label className="text-white block mb-1">
              Confirme seu Email:
            </label>
            <input
              id="email-confirmacao-projeto"
               type="email"
               {...register("emailConfirmacao", {
                 required: "Confirme seu email",
                 validate: (v) => v === (watchEmail ?? "") || "Os emails não estão iguais",
               })}
              placeholder="Confirme seu Email"
              className="w-full md:w-[90%] bg-white border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
            {errors.emailConfirmacao && (
              <p className="text-red-400 text-sm mt-1">
                {errors.emailConfirmacao.message}
              </p>
            )}
          </div>

          {/* Telefone */}
          <div id="telefone-form-projeto" className="formrow">
            <label className="text-white block mb-1">Telefone:</label>
            <input
              id="telefone-projeto"
              type="tel"
              {...register("telefone")}
              placeholder="(12) 12345-6789"
              className="w-full md:w-[90%] bg-white border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
          </div>

          {/* gênero */}
          <div id="sexo-form-projeto" className="formrow">
            <label className="text-white block mb-1">Escolha seu gênero:</label>
            <div className="flex gap-2 text-white">
              <label><input {...register("escolhasexo", { required: "Selecione seu gênero" })} type="radio" value="masculino" /> Masculino</label>
              <label><input {...register("escolhasexo")} type="radio" value="feminino" /> Feminino</label>
              <label><input {...register("escolhasexo")} type="radio" value="outros" /> Outros</label>
            </div>
            {errors.escolhasexo && (
              <p className="text-red-400 text-sm mt-1">{errors.escolhasexo.message}</p>
            )}
          </div>

          {/* Senha */}
          <div id="senha-form-projeto" className="formrow">
            <label className="text-white block mb-1">Senha:</label>
            <input
              id="senha-projeto"
              type="password"
              {...register("senha", {
                required: "Insira sua senha",
                minLength: { value: 6, message: "Senha mínima 6 caracteres" },
              })}
              placeholder="Digite sua senha"
              className="w-full md:w-[90%] bg-white border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
            {errors.senha && (
              <p className="text-red-400 text-sm mt-1">{errors.senha.message}</p>
            )}

            {/* Resultado da API Python */}
            {senhaInfo && (
              <div className="mt-3 p-3 rounded-lg border border-blue-300 bg-blue-50 text-blue-900">
                <strong>Segurança da senha: {senhaInfo.nivel} ({senhaInfo.pontuacao}/100)</strong>
                <ul className="list-disc ml-5 mt-2 text-sm">
                  {senhaInfo.relatorio.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Confirmação da senha */}
          <div id="senha-confirmacao-form-projeto" className="formrow">
            <label className="text-white block mb-1">Confirme a Senha:</label>
            <input
              id="senha-confirmacao-projeto"
              type="password"
              {...register("senhaConfirmacao", {
                required: "Confirme sua senha",
                validate: (v) => v === (senha ?? "") || "As senhas não estão iguais",
              })}
              placeholder="Confirme sua senha"
              className="w-full md:w-[90%] bg-white border-b-2 border-[#0011ff]/90 focus:outline-blue-800 mt-2 px-2 py-2"
            />
            {errors.senhaConfirmacao && (
              <p className="text-red-400 text-sm mt-1">
                {errors.senhaConfirmacao.message}
              </p>
            )}
          </div>

          <div className="flex justify-end pt-4">
            <button
              className="button-projeto w-[120px] h-[40px] bg-gray-300 text-black border-2 border-black rounded hover:bg-[#00cbf4] transition"
              type="submit"
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