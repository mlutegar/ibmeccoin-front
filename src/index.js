
import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import HomeProfessor from "./pages/HomeProfessor";
import Cadastro from "./pages/Cadastro";
import TokenHandler from "./pages/TokenHandler";
import Grupo from "./pages/Grupo";
import QrCode from "./pages/QrCode";
import DoarPontosAlunoPage from "./pages/DoarPontosAlunoPage";
import DoarPontosGrupoPage from "./pages/DoarPontosGrupoPage";
import Doar from "./pages/Doar";
import Convites from "./pages/Convites";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/token/:tokenId" element={<TokenHandler />} />
        <Route path="/grupo" element={<Grupo/>} />
        <Route path="/convites" element={<Convites/>} />

        <Route path="/professor" element={<HomeProfessor/>} />
        <Route path="/qr-code" element={<QrCode/>} />
        <Route path="/doar-pontos-aluno" element={<DoarPontosAlunoPage/>} />
        <Route path="/doar-pontos-grupo" element={<DoarPontosGrupoPage/>} />
        <Route path="/doar" element={<Doar/>} />

        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/perfil" element={<Perfil/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
