
import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import HomeProfessor from "./pages/HomeProfessor";
import Cadastro from "./pages/Cadastro";
import TokenHandler from "./pages/TokenHandler";
import Grupo from "./pages/Grupo";
import QrCode from "./pages/QrCode";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/professor" element={<HomeProfessor/>} />
        <Route path="/qr-code" element={<QrCode/>} />
        <Route path="/token/:tokenId" element={<TokenHandler />} />
        <Route path="/grupo" element={<Grupo/>} />

        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
