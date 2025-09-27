// src/pages/Home/Home.tsx
import React from "react";
import TwoColumnLayout from "../../assets/Components/layouts/LayoutDuasColunas";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const left = (
    <div
      className="h-[60vh] md:h-full bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/img/info.avif')" }}
    />
  );

  const right = (
    <div className="p-6 text-center md:text-left">
      <h1 className="text-3xl md:text-5xl text-white mb-4">Guia HC</h1>
      <p className="text-gray-200 mb-6 max-w-lg mx-auto md:mx-0">
        Bem-vindo ao Guia HC, onde você aprenderá como usar o aplicativo hospital das clínicas.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
        <button className="btn-primary" onClick={() => navigate("/integrantes")}>Ver integrantes</button>
        <button className="btn-secondary" onClick={() => navigate("/projeto")}>Ver projeto</button>
      </div>
    </div>
  );

  return <TwoColumnLayout left={left} right={right} />;
}
