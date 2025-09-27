// src/pages/Integrantes/Integrantes.tsx
import React, { useEffect, useState } from "react";
import CardsLayout from "../../assets/Components/layouts/LayoutCards";
import Card from "../../assets/Components//ui/Card";
import { useNavigate } from "react-router-dom";

type Member = { id: string; name: string; role: string; avatar?: string };

export default function Integrantes() {
  const [members, setMembers] = useState<Member[]>([]);
  useEffect(() => {
    // simples fetch local
    fetch("/data/integrantes.json")
      .then(res => res.json())
      .then((data: Member[]) => setMembers(data))
      .catch(() => setMembers([]));
  }, []);

  const navigate = useNavigate();

  return (
    <CardsLayout title="Integrantes">
      {members.map(m => (
        <Card
          key={m.id}
          title={m.name}
          subtitle={m.role}
          image={m.avatar}
          onClick={() => navigate(`/integrante/${m.id}`)} // exemplo de navegar pra detalhe (rota dinâmica opcional)
        />
      ))}
    </CardsLayout>
  );
}
