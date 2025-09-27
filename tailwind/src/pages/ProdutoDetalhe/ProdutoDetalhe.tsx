// src/pages/ProdutoDetalhe/ProdutoDetalhe.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

type Produto = {
  id: string;
  title: string;
  desc?: string;
  image?: string;
};

export default function ProdutoDetalhe() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [produto, setProduto] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`/data/produtos.json`)
      .then(res => {
        if (!res.ok) throw new Error("Fetch error");
        return res.json();
      })
      .then((list: Produto[]) => {
        const p = list.find(item => item.id === id) ?? null;
        setProduto(p);
      })
      .catch(() => setProduto(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-6 text-white">Carregando...</div>;
  if (!produto) return (
    <div className="p-6 text-white">
      <p>Produto não encontrado.</p>
      <button className="mt-4 btn-secondary" onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );

  return (
    <article className="p-6 text-white max-w-3xl mx-auto">
      {produto.image && <img src={produto.image} alt={produto.title} className="w-full h-64 object-cover rounded mb-4" />}
      <h1 className="text-2xl font-semibold mb-2">{produto.title}</h1>
      <p className="text-gray-200">{produto.desc}</p>
      <button className="mt-4 btn-secondary" onClick={() => navigate(-1)}>Voltar</button>
    </article>
  );
}
