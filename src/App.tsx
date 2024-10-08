import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import CatalogoPage from "./pages/CatalogoPage/CatalogoPage";
import ForumPage from "./pages/Forum/Forum";
import NotifyPage from "./pages/Notifity/NotifyPage";
import CoursePage from "./pages/CursoPage/CoursePage";
import MyCourseView from "./pages/MyCourseView/MyCourseView";
import ProfilePage from "./pages/Profile/ProfilePage";
import MyCourses from "./pages/MyCourse/MyCourse";
import QuizPage from "./pages/QuizPage";
import PostsForum from "./pages/PostsForum/PostsForum";
import Start from "./pages/HomePage/HomePage";
import { UserProvider } from "./hooks/UserContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
/* import { Toast } from '@radix-ui/react-toast' */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./ProtectedRoute";
import Logout from "./pages/Logout/Logout";

function App() {
  const client = new QueryClient();
  return (
    <UserProvider>
      <ToastContainer />
      <QueryClientProvider client={client}>
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/portal" element={<ProtectedRoutes />}>
                <Route path="" element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route path="forum" element={<ForumPage />} />
                <Route path="forum/:id" element={<PostsForum />} />
                <Route path="add-curso/:id" element={<PostsForum />} />
                <Route path="cursos" element={<CatalogoPage />} />
                <Route path="cursos/:id" element={<CoursePage />} />
                <Route path="cursos/my" element={<MyCourseView />} />
                <Route path="notificacoes" element={<NotifyPage />} />
                <Route path="classroom/:id" element={<MyCourseView />} />
                <Route path="meus-cursos/" element={<MyCourses />} />
                <Route path="me" element={<ProfilePage />} />
              </Route>
              
              <Route path="quiz" element={<ProtectedRoutes />} >
                  <Route path="" element={<QuizPage />} />
              </Route>
              <Route path="quiz" element={<QuizPage />} />
          </Route>
          <Route path="/entrar" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;
