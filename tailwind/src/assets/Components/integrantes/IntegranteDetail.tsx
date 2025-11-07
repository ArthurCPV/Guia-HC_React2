// src/pages/Integrantes/IntegranteDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export type Member = {
  id: string;
  name: string;
  turma?: string;
  rm?: string;
  linkedin?: string;
  github?: string;
  avatar?: string;
};

const FALLBACK: Member[] = [
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
    {
    id: "m-gabriel",
    name: "Gabriel Cedraz",
    turma: "1TDSA",
    rm: "565911",
    linkedin: "https://www.linkedin.com/in/gabriel-cedraz-9b971a354",
    github: "https://github.com/austrolopithecus",
    avatar: "/img/Gabriel.jpg",
  },
];

export default function IntegranteDetail() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [member, setMember] = useState<Member | null>(null);

  useEffect(() => {
    // tenta localStorage
    const key = "guiahc_members_v1";
    const raw = localStorage.getItem(key);
    if (raw) {
      try {
        const arr = JSON.parse(raw) as Member[];
        const found = arr.find((m) => m.id === id);
        if (found) {
          setMember(found);
          return;
        }
      } catch { /* ignore */ }
    }

    // fallback: buscar entre defaults
    const foundFallback = FALLBACK.find((m) => m.id === id) ?? null;
    setMember(foundFallback);
  }, [id]);

  if (!id) return <p className="text-white">ID inválido.</p>;
  if (!member) {
    return (
      <section className="py-12">
        <p className="text-white text-center">Integrante não encontrado.</p>
        <div className="text-center mt-4">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => navigate(-1)}>Voltar</button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto py-12 text-white">
      <button className="mb-4 text-sm text-blue-200 underline" onClick={() => navigate(-1)}>← Voltar</button>
      <div className="bg-[#3f0684] rounded-lg p-6 border-4 border-black flex flex-col md:flex-row gap-6 items-center">
        <div className="w-48 h-48 rounded-lg overflow-hidden border-4 border-black bg-gray-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-light mb-2">{member.name}</h1>
          {member.turma && <p>Turma: {member.turma}</p>}
          {member.rm && <p>RM: {member.rm}</p>}
          <div className="mt-4 flex gap-3">
            {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>}
            {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>}
          </div>
        </div>
      </div>
    </section>
  );
}
