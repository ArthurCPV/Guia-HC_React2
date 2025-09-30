// src/pages/Faq/FaqList.tsx
import React, { useEffect, useState } from "react";
import FaqItem from "./FaqItem";

type Faq = {
  id: string;
  pergunta: string;
  resposta: React.ReactNode;
  link?: { url: string; text: string };
  alinhamento?: "left" | "right";
};

const STORAGE_KEY = "guiahc_faq_v1";
const FALLBACK: Faq[] = [
  { id: "q1", pergunta: "O que é ...?", resposta: "..." }
];

export default function FaqList() {
  const [data, setData] = useState<Faq[]>([]);
  // Para comportamento accordion / múltiplos abertos (opcional)
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());
  const [openId, setOpenId] = useState<string | null>(null);
  const allowMultiple = true;

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setData(JSON.parse(raw));
        return;
      } catch {}
    }

    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/data/faq.json");
        if (!res.ok) throw new Error("fetch fail");
        const json = (await res.json()) as any[]; // arquivo JSON bruto
        // transforma `resposta` string + optional link em ReactNode
        const items: Faq[] = json.map((it) => {
          const base: Faq = {
            id: it.id,
            pergunta: it.pergunta,
            alinhamento: it.alinhamento,
            resposta: it.resposta ?? "",
            link: it.link,
          };
          if (it.link) {
            base.resposta = (
              <>
                <span>{it.resposta}</span>
                <div className="mt-2">
                  <a href={it.link.url} target="_blank" rel="noopener noreferrer" className="text-[#00f7ff] underline">
                    {it.link.text}
                  </a>
                </div>
              </>
            );
          }
          return base;
        });
        if (mounted) setData(items);
      } catch {
        if (mounted) setData(FALLBACK);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
  }, [data]);

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
    <section id="corpo_pagina_faq" className="w-full min-h-screen flex flex-col items-center py-12 px-4">
      <div className="titulo_faq w-full max-w-6xl text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-medium text-white">Perguntas frequentes</h1>
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
