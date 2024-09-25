import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Main/Dashboard/Dashboard";
import Students from "./components/Main/Students/Students";
import Instructors from "./components/Main/Instructors/Instructors";
import Register from "./components/Main/Register/Register";
import Audit from "./components/Main/Audit/Audit";
import Users from "./components/Main/Users/Users";
import Classes from "./components/Main/Classes/Classes";
import Grides from "./components/Main/Grides/Grides";
import Chat from "./components/Main/Chat/Chat";
import Settings from "./components/Main/Settings/Settings";
import Notification from "./components/Main/Notification/Notification";
import Profile from "./components/Main/Profile/Profile";


import Layout from "./Layout";
import Sign from "./components/Main/Sign/Sign";

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
