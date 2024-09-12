import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Main/Dashboard/Dashboard";
import Students from "./components/Main/Students/Students";
import Instructors from "./components/Main/Instructors/Instructors";
import Register from "./components/Main/Register/Register";
import Audit from "./components/Main/Audit/Audit";
import Users from "./components/Main/Users/Users";
import UserDetails from "./components/Main/Users/UserDetails";
import Classes from "./components/Main/Classes/Classes";
import Grides from "./components/Main/Grides/Grides";
import Chat from "./components/Main/Chat/Chat";
import Settings from "./components/Main/Settings/Settings";
import Notification from "./components/Main/Notification/Notification";
import Profile from "./components/Main/Profile/Profile";

import "./App.css";
import Layout from "./Layout";
import Sign from "./components/Main/Sign/Sign";
import { ToastContainer } from "react-toastify";
import ProtectedRoutes from "./components/Main/ProtectedRoute";
import { UserProvider } from "./hooks/UserContext";
import Logout from "./components/Main/Logout";
/* import NewUser from "./components/Main/Users/NewUser"; */

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/formandos" element={<Students />} />
              <Route path="/formadores" element={<Instructors />} />
              <Route path="/turmas" element={<Classes />} />
              <Route path="/inscricoes" element={<Register />} />
              <Route path="/notas" element={<Grides />} />
              <Route path="/auditoria" element={<Audit />} />
              <Route path="/usuarios" element={<Users />} />
              {/*               <Route path="/usuarios/novousuario" element={<NewUser />} /> */}
              <Route path="/usuarios/:id" element={<UserDetails />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/notificacoes" element={<Notification />} />
              <Route path="/configuracoes" element={<Settings />} />
              <Route path="/perfil" element={<Profile />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
          </Route>
          <Route path="/entrar" element={<Sign />} />
        </Routes>
      </Router>
      <ToastContainer />
    </UserProvider>
  );
}

export default App;
