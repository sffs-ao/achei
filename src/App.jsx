import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Instructors from "./pages/Instructors";
import Register from "./pages/Register";
import Audit from "./pages/Audit";
import Users from "./pages/Users";
import Classes from "./pages/Classes";
import Grides from "./pages/Grides";
import Chat from "./pages/Chat";
import Settings from "./pages/settings";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";


import "./app.css";
import Layout from "./Layout";
import Sign from "./pages/Sign";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route path="/" element={<Dashboard />} />
          <Route path="/formandos" element={<Students />} />
          <Route path="/formadores" element={<Instructors />} />
          <Route path="/turmas" element={<Classes />} />
          <Route path="/inscricoes" element={<Register />} />
          <Route path="/notas" element={<Grides />} />
          <Route path="/auditoria" element={<Audit />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/notificacoes" element={<Notification />} />
          <Route path="/configuracoes" element={<Settings />} />
          <Route path="/perfil" element={<Profile />} />
         
        </Route>
        <Route path="/entrar" element={<Sign />} />
      </Routes>
    </Router>
  );
}

export default App;
