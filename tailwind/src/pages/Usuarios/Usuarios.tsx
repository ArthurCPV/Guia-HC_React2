import React, { useEffect, useState, useRef } from "react";

interface Usuario {
  idUsuario: number;
  nomeCompleto: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  genero: string;
  telefone: string;
}

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingUser, setEditingUser] = useState<Usuario | null>(null);
  const [updating, setUpdating] = useState(false);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [editError, setEditError] = useState<string | null>(null);
  const [lastRequest, setLastRequest] = useState<string | null>(null);

  // Buscar todos os usuários
  const listarUsuarios = async () => {
    try {
      const response = await fetch("https://sprint4-java-6u07.onrender.com/usuarios");
      if (!response.ok) throw new Error("Erro ao buscar usuários");
      const data = await response.json();
      setUsuarios(data);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Erro ao carregar usuários. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Deletar usuário
  const deletarUsuario = async (idUsuario: number) => {
    if (!confirm("Tem certeza que deseja excluir este usuário?")) return;

    try {
      const response = await fetch(`https://sprint4-java-6u07.onrender.com/usuarios/${idUsuario}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Erro ao deletar usuário");

      // Atualiza lista local
      setUsuarios(usuarios.filter(u => u.idUsuario !== idUsuario));
      alert("Usuário excluído com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao excluir usuário. Tente novamente.");
    }
  };

  // Abrir modal de edição
  const abrirEdicao = async (usuario: Usuario) => {
    try {
      setEditError(null);
      setLastRequest(`GET /usuarios/${usuario.idUsuario}`);
      // busca versão completa do usuário no backend antes de editar
      const resp = await fetch(`https://sprint4-java-6u07.onrender.com/usuarios/${usuario.idUsuario}`);
      if (!resp.ok) throw new Error('Erro ao buscar usuário');
      const full = await resp.json();
      setEditingUser(full);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('Erro ao abrir edição', msg);
      setEditError(`Falha ao buscar usuário (${lastRequest}): ${msg}. Verifique se o servidor está no ar e se há CORS.`);
      // fallback: abre com dados já carregados
      setEditingUser(usuario);
    }
  };

  // quando modal abre, foca o primeiro campo
  useEffect(() => {
    if (editingUser) {
      // pequeno delay para o input estar disponível
      setTimeout(() => nameInputRef.current?.focus(), 50);
    }
  }, [editingUser]);

  // quando modal abre, prevenir scroll do fundo
  useEffect(() => {
    if (!editingUser) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [editingUser]);

  // fechar modal com ESC
  useEffect(() => {
    if (!editingUser) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setEditingUser(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [editingUser]);

  // Atualizar usuário
  const atualizarUsuario = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;
    setUpdating(true);
    setEditError(null);
    try {
      // construir payload compatível com POST/PUT usado no projeto
      const cpfClean = editingUser.cpf ? editingUser.cpf.replace(/\D/g, '') : '';
      const payload: any = {
        idUsuario: editingUser.idUsuario,
        nomeCompleto: editingUser.nomeCompleto,
        email: editingUser.email,
        cpf: cpfClean,
        dataNascimento: editingUser.dataNascimento ?? "",
        genero: editingUser.genero ?? "",
        telefone: editingUser.telefone ?? "",
      };
      // incluir senha apenas se existir (não sobrescrever com undefined)
      if ((editingUser as any).senha) payload.senha = (editingUser as any).senha;

      // tentativa: POST /usuarios (muitos backends aceitam POST para criar/atualizar quando id existe)
      setLastRequest(`POST /usuarios payload=${JSON.stringify(payload).slice(0,200)}`);
      console.debug('Enviando payload para atualizar usuário via POST:', payload);
      let response = await fetch(`https://sprint4-java-6u07.onrender.com/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });

      // se POST não for permitido, tenta PUT no recurso específico
      if (response.status === 405 || response.status === 404) {
        setLastRequest(`PUT /usuarios/${editingUser.idUsuario} payload=${JSON.stringify(payload).slice(0,200)}`);
        console.debug('POST falhou, tentando PUT:', payload);
        response = await fetch(
          `https://sprint4-java-6u07.onrender.com/usuarios/${editingUser.idUsuario}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify(payload),
          }
        );
      }

      if (!response.ok) {
        // tenta parsear JSON de erro, senão pega texto
        let bodyText = '';
        try {
          const json = await response.json();
          if (json && (json.message || json.error)) bodyText = json.message || json.error;
          else bodyText = JSON.stringify(json);
        } catch (parseErr) {
          bodyText = await response.text().catch(() => '');
        }
        throw new Error(`HTTP ${response.status} ${response.statusText} - ${bodyText}`);
      }

  // Atualiza lista local substituindo o usuário editado (mantendo outras propriedades)
  setUsuarios((prev) => prev.map(u => u.idUsuario === editingUser.idUsuario ? { ...u, ...editingUser } : u));
      setEditingUser(null);
      alert("Usuário atualizado com sucesso!");
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('Falha ao atualizar usuário:', msg);
      // Gera uma mensagem mais amigável em caso de erro de rede
      if (/failed to fetch/i.test(msg) || /networkerror/i.test(msg) || msg === 'NetworkError when attempting to fetch resource.') {
        const friendly = `Falha de rede ao enviar ${lastRequest ?? 'requisição'}: verifique se o servidor está rodando, se o endereço está correto ou se há bloqueio CORS.`;
        setEditError(friendly);
        alert(friendly);
      } else {
        setEditError(msg);
        alert("Erro ao atualizar usuário: " + msg);
      }
    } finally {
      setUpdating(false);
    }
  };

  // Carregar usuários ao montar
  useEffect(() => {
    listarUsuarios();
  }, []);

  if (loading) return <div className="text-center py-8">Carregando...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Gerenciamento de Usuários</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {usuarios.length === 0 ? (
          <div className="p-6 text-center text-gray-600">Nenhum usuário cadastrado.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 table-fixed" role="table" aria-label="Tabela de usuários">
              <caption className="sr-only">Lista de usuários cadastrados</caption>
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPF</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {usuarios.map((usuario, idx) => (
                  <tr key={usuario.idUsuario} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 align-top break-words">{usuario.nomeCompleto}</td>
                    <td className="px-6 py-4 align-top break-words">{usuario.email}</td>
                    <td className="px-6 py-4 align-top break-words">{usuario.cpf}</td>
                    <td className="px-6 py-4 align-top break-words">{usuario.telefone || '-'}</td>
                    <td className="px-6 py-4 align-top">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => abrirEdicao(usuario)}
                          className="px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
                          aria-label={`Editar ${usuario.nomeCompleto}`}
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => deletarUsuario(usuario.idUsuario)}
                          className="px-3 py-1 text-sm text-red-600 bg-red-50 rounded hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200"
                        >
                          Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {/* Modal de edição */}
      {editingUser && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-user-title"
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setEditingUser(null)}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={atualizarUsuario}
            className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6"
          >
            <h2 id="edit-user-title" className="text-xl font-semibold mb-4">Editar usuário</h2>
            {editError && (
              <div className="mb-3 p-2 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
                <strong>Erro:</strong> {editError}
              </div>
            )}
            {lastRequest && (
              <div className="mb-3 text-xs text-gray-500">Última requisição: {lastRequest}</div>
            )}
            <label className="block mb-2">
              <span className="text-sm font-medium">Nome</span>
              <input
                className="mt-1 block w-full rounded border-gray-300 p-2"
                ref={nameInputRef}
                value={editingUser.nomeCompleto}
                onChange={(e) => setEditingUser({ ...editingUser, nomeCompleto: e.target.value })}
                required
              />
            </label>
            <label className="block mb-2">
              <span className="text-sm font-medium">Email</span>
              <input
                className="mt-1 block w-full rounded border-gray-300 p-2"
                type="email"
                value={editingUser.email}
                onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                required
              />
            </label>
            <label className="block mb-2">
              <span className="text-sm font-medium">CPF</span>
              <input
                className="mt-1 block w-full rounded border-gray-300 p-2"
                value={editingUser.cpf}
                onChange={(e) => setEditingUser({ ...editingUser, cpf: e.target.value })}
              />
            </label>
            <label className="block mb-4">
              <span className="text-sm font-medium">Telefone</span>
              <input
                className="mt-1 block w-full rounded border-gray-300 p-2"
                value={editingUser.telefone}
                onChange={(e) => setEditingUser({ ...editingUser, telefone: e.target.value })}
              />
            </label>

            <div className="flex justify-end gap-2">
              <button type="button" onClick={() => setEditingUser(null)} className="px-4 py-2 bg-gray-200 rounded">Cancelar</button>
              <button type="submit" disabled={updating} className="px-4 py-2 bg-blue-600 text-white rounded">{updating ? 'Salvando...' : 'Salvar'}</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}