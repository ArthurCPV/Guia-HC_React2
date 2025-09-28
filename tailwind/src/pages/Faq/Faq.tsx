import React, { useState, useEffect } from "react";
import CardsLayout from "../../assets/Components/layouts/LayoutCards"

type FAQ = { id: string; q: string; a: string };

export default function Faq() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/faqs.json").then(r=>r.json()).then(setFaqs);
  }, []);

  return (
    <CardsLayout title="Perguntas Frequentes">
      {faqs.map(f => (
        <div key={f.id} className="bg-[#0f1720] p-4 rounded-lg">
          <button className="w-full text-left" onClick={() => setOpenId(openId === f.id ? null : f.id)}>
            <h3 className="text-white font-semibold">{f.q}</h3>
          </button>
          {openId === f.id && <p className="mt-2 text-gray-300">{f.a}</p>}
        </div>
      ))}
    </CardsLayout>
  );
}
