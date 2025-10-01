import React, { useEffect, useState } from "react";
import IntegranteCard from "./IntegranteCard";

export type Member = {
  id: string;
  name: string;
  turma?: string;
  rm?: string;
  linkedin?: string;
  github?: string;
  avatar?: string;
};

const DEFAULT_MEMBERS: Member[] = [
  {
    id: "m-arthur",
    name: "Arthur Cabral",
    turma: "1TDSA",
    rm: "566515",
    linkedin: "https://www.linkedin.com/in/arthur-cabral2101/",
    github: "https://github.com/ArthurCPV",
    avatar: "/img/Arthur.png",
  },
  {
    id: "m-vitor",
    name: "Vitor Dalmagro",
    turma: "1TDSA",
    rm: "566052",
    linkedin: "https://www.linkedin.com/in/vitor-fria-dalmagro-474524379",
    github: "https://github.com/VitorDalmagro",
    avatar: "/img/Vitor.jpg",
  },
];

const STORAGE_KEY = "guiahc_members_v1";

export default function IntegrantesList() {
  const [members, setMembers] = useState<Member[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Member[]) : DEFAULT_MEMBERS;
    } catch {
      return DEFAULT_MEMBERS;
    }
  });

  // campos do formulário
  const [name, setName] = useState("");
  const [turma, setTurma] = useState("");
  const [rm, setRm] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(members));
    } catch {}
  }, [members]);

  const addMember = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    const id =
      typeof crypto !== "undefined" && (crypto as any).randomUUID
        ? (crypto as any).randomUUID()
        : `${Date.now()}`;
    const newM: Member = {
      id,
      name: trimmed,
      turma: turma.trim() || undefined,
      rm: rm.trim() || undefined,
      linkedin: linkedin.trim() || undefined,
      github: github.trim() || undefined,
      avatar: avatar.trim() || undefined,
    };
    setMembers((p) => [newM, ...p]);
    setName("");
    setTurma("");
    setRm("");
    setLinkedin("");
    setGithub("");
    setAvatar("");
  };

  const removeMember = (id: string) => {
    if (!confirm("Remover integrante?")) return;
    setMembers((p) => p.filter((m) => m.id !== id));
  };

  return (
    <section className="w-full flex flex-col items-center px-4">
      <div className="w-full max-w-[1200px]">
        <header className="flex justify-center mb-6">
          <h1 className="text-4xl md:text-5xl text-white underline decoration-[#3f0684] mb-8">Integrantes</h1>
        </header>

        {/* card container: responsive grid 1 / 2 / 3 */}
        <div className="mx-auto w-[95%] md:w-[90%] bg-white/8 border-[5px] border-white/80 rounded-[40px] p-6 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {members.map(m => (
              <div key={m.id} className="flex justify-center">
                <IntegranteCard
                  id={m.id}
                  name={m.name}
                  turma={m.turma}
                  rm={m.rm}
                  linkedin={m.linkedin}
                  github={m.github}
                  avatar={m.avatar}
                  onRemove={removeMember}
                />
              </div>
            ))}
          </div>
        </div>

        {/* formulário rápido para adicionar */}
        <form onSubmit={addMember} className="mx-auto w-[95%] md:w-[90%] max-w-3xl bg-black/30 p-4 rounded-lg border border-gray-700">
          <h3 className="text-white mb-2">Adicionar integrante</h3>
          <div className="flex flex-col md:flex-row gap-3">
            <input className="flex-1 px-3 py-2 rounded bg-gray-100" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="w-40 px-3 py-2 rounded bg-gray-100" placeholder="Turma" value={turma} onChange={(e) => setTurma(e.target.value)} />
            <input className="w-40 px-3 py-2 rounded bg-gray-100" placeholder="RM" value={rm} onChange={(e) => setRm(e.target.value)} />
          </div>
          <div className="flex flex-col md:flex-row gap-3 mt-3">
            <input className="flex-1 px-3 py-2 rounded bg-gray-100" placeholder="LinkedIn (url)" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
            <input className="flex-1 px-3 py-2 rounded bg-gray-100" placeholder="GitHub (url)" value={github} onChange={(e) => setGithub(e.target.value)} />
            <input className="flex-1 px-3 py-2 rounded bg-gray-100" placeholder="Avatar (url / /img/...)" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
          </div>
          <div className="flex justify-end mt-3">
            <button className="px-4 py-2 bg-emerald-500 text-white rounded" type="submit">Adicionar</button>
          </div>
        </form>
      </div>
    </section>
  );
}
