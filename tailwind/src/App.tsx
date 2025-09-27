// src/App.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './index.css';

import HeaderComponent from './assets/Components/header/headerComponent';
import MenuNavComponent from './assets/Components/menuNav/menuNavComponent';
import MainComponent from './assets/Components/main/mainComponent';
import FooterFormatComponent from './assets/Components/footer/footerFormatComponent';

import Home from './pages/Home/Home';
import Integrantes from './pages/Integrantes/Integrantes';
// import Projeto from './pages/Projeto/Projeto';
import Faq from './pages/Faq/Faq';
// import Contato from './pages/Contato/Contato';
import ProdutoDetalhe from './pages/ProdutoDetalhe/ProdutoDetalhe';
// import NotFound from './pages/NotFound/NotFound';

export default function App() {
  return (
    <div id="container-geral" className="min-h-screen w-full flex flex-col bg-[#1f1d1d]">
      <HeaderComponent />
      <MenuNavComponent />
      <MainComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/integrantes" element={<Integrantes />} />
          {/* <Route path="/projeto" element={<Projeto />} /> */}
          <Route path="/faq" element={<Faq />} />
          {/* <Route path="/contato" element={<Contato />} /> */}
          <Route path="/produto/:id" element={<ProdutoDetalhe />} />
          {/* <Route path="/404" element={<NotFound />} /> */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </MainComponent>
      <FooterFormatComponent />
    </div>
  );
}
