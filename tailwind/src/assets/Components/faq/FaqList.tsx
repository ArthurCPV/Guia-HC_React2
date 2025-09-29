import React, { useState } from "react";
import FaqItem from "./FaqItem";

type Faq = { id: string; pergunta: string; resposta: React.ReactNode; alinhamento?: "left" | "right" };

const DEFAULT_FAQ: Faq[] = [
  {
    id: "q1",
    pergunta: "O que é o Guia HC?",
    resposta:
      "O Guia HC é uma ferramenta criada com o intuito de ajudar os pacientes do Hospital das Clínicas no acesso das funções fornecidas pelo hospital.",
    alinhamento: "left",
  },
  {
  id: "q2",
  pergunta: "Onde posso acessar o Hospital das Clínicas?",
  resposta: (
    <>
      Você pode acessar o portal do paciente do Hospital das Clínicas clicando{" "}
      <a
        href="https://portaldopaciente.hc.fm.usp.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00f7ff] underline hover:text-[#42ff5b]"
      >
        aqui
      </a>.
    </>
  ),
  alinhamento: "right",
},
  {
    id: "q3",
    pergunta: "Como o Guia HC ajuda?",
    resposta:
      "O Guia HC ajuda no apoio de criação de cadastros de usuários para o aplicativo do paciente do Hospital das Clínicas, mostrando dados pendentes e orientando o usuário.",
    alinhamento: "left",
  },
  {
    id: "q4",
    pergunta: "Quem são os responsáveis do Guia HC?",
    resposta:
      "Somos estudantes da FIAP — Faculdade de Informática e Administração Paulista. Para saber mais, acesse a aba Integrantes.",
    alinhamento: "right",
  },
  {
    id: "q5",
    pergunta: "Como posso ver o projeto de vocês?",
    resposta: "Você pode acessar o projeto pela aba 'PROJETO'.",
    alinhamento: "left",
  },
    {
    id: "q6",
    pergunta: "Como posso entrar em contato com vocês?",
    resposta: "Você pode entrar em contato conosco pela aba 'CONTATO'.",
    alinhamento: "right",
  },
];

type Props = {
  data?: Faq[];
  allowMultiple?: boolean; // opcional: controlar se permite vários abertos
};

export default function FaqList({ data = DEFAULT_FAQ, allowMultiple = true }: Props) {
  // quando allowMultiple = true usamos Set; se false usamos string|null para comportamento accordion
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenSet((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    } else {
      setOpenId((prev) => (prev === id ? null : id));
    }
  };

  return (
  <section id="corpo_pagina_faq" className="w-full flex flex-col items-center py-8 px-4">
    <div className="titulo_faq w-full max-w-6xl text-center mb-6">
      <h1 className="text-3xl md:text-4xl font-medium text-white">Perguntas frequentes</h1>
    </div>

      <div id="perguntasFaq" className="w-full max-w-6xl flex flex-col items-center">
        {data.map((item) => {
          const isOpen = allowMultiple ? openSet.has(item.id) : openId === item.id;
          return (
            <FaqItem
              key={item.id}
              id={item.id}
              pergunta={item.pergunta}
              resposta={item.resposta}
              isOpen={isOpen}
              onToggle={() => toggle(item.id)}
              alinhamento={item.alinhamento}
            />
          );
        })}
      </div>
    </section>
  );
}
