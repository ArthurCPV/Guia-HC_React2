// src/services/mockApi.ts

// Delay artificial para simular comunicação com servidor
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const STORAGE_KEY = "hc_users";       // lista de usuários cadastrados
const SESSION_KEY = "hc_session";     // usuário logado

interface User {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  telefone?: string;
  genero?: string;
  dataNascimento?: string;
}

// Função para obter todos os usuários cadastrados
function getUsers(): User[] {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

// Salva lista de usuários
function saveUsers(users: User[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

/* ==========================================================
   🔹 Cadastro de usuário
   ========================================================== */
export async function registerUser(newUser: User) {
  await delay(800); // simula 0.8s de resposta do servidor

  const users = getUsers();

  const userExists = users.some(
    (u) => u.email === newUser.email || u.cpf === newUser.cpf
  );

  if (userExists) {
    return { ok: false, message: "Usuário já cadastrado." };
  }

  users.push(newUser);
  saveUsers(users);

  // também já cria sessão
  localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));

  return { ok: true, message: "Cadastro realizado com sucesso!" };
}

/* ==========================================================
   🔹 Login
   ========================================================== */
export async function loginUser(email: string, senha: string) {
  await delay(700);

  const users = getUsers();
  const user = users.find((u) => u.email === email && u.senha === senha);

  if (!user) {
    return { ok: false, message: "Email ou senha incorretos." };
  }

  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return { ok: true, user };
}

/* ==========================================================
   🔹 Buscar usuário logado
   ========================================================== */
export function getLoggedUser(): User | null {
  return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
}

/* ==========================================================
   🔹 Logout
   ========================================================== */
export function logoutUser() {
  localStorage.removeItem(SESSION_KEY);
}
