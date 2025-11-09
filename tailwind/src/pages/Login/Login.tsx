import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../lib/mockApi';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await loginUser(email, senha);

    if (!response.ok) {
      alert(response.message);
      return;
    }

    alert("Login realizado com sucesso!");
    navigate("/"); // Você pode alterar para a rota desejada após o login
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen py-6 px-4 bg-[#1E1F2E]">
      <form onSubmit={handleLogin} className="w-full max-w-md">
        <div className="bg-[#353751]/50 border-4 border-[#0011ff]/90 rounded-2xl p-6 flex flex-col gap-4">
          <h2 className="text-white text-2xl text-center md:text-3xl font-medium mb-4">
            Login
          </h2>

          <div>
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 rounded bg-[#1E1F2E] text-white border border-[#0011ff]/60 focus:outline-none focus:border-[#0011ff]"
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-white mb-2">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="w-full p-2 rounded bg-[#1E1F2E] text-white border border-[#0011ff]/60 focus:outline-none focus:border-[#0011ff]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0011ff] text-white py-2 rounded mt-4 hover:bg-[#0011ff]/80 transition-colors"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}