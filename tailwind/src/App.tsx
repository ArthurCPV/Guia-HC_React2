import { Routes, Route, Navigate } from "react-router-dom";
import './index.css';

import HeaderComponent from './assets/Components/header/headerComponent';
import MainComponent from './assets/Components/main/mainComponent';
import FooterComponent from './assets/Components/footer/footerComponent';

import Home from './pages/Home/Home';
import Integrantes from './pages/Integrantes/Integrantes';
import IntegranteDetail from './assets/Components/integrantes/IntegranteDetail';
import Projeto from './pages/Projeto/Projeto';
import Faq from './pages/Faq/Faq';
import Contato from './pages/Contato/Contato';
import NotFound from './pages/NotFound/NotFound';
import Usuarios from './pages/Usuarios/Usuarios';

export default function App() {
  return (
    <div id="container-geral" className="min-h-screen w-full flex flex-col bg-[#1f1d1d]">
      <HeaderComponent />
      <MainComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrantes/:id" element={<IntegranteDetail />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/guia/usuarios" element={<Usuarios />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </MainComponent>
      <FooterComponent />
    </div>
  );
}
