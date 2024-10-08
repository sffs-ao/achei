import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import CatalogoPage from './pages/CatalogoPage/CatalogoPage'
import ForumPage from './pages/Forum/Forum'
import NotifyPage from './pages/Notifity/NotifyPage'
import CoursePage from './pages/CursoPage/CoursePage'
import MyCourseView from './pages/MyCourseView/MyCourseView'
import ProfilePage from './pages/Profile/ProfilePage'
import MyCourses from './pages/MyCourse/MyCourse'
import QuizPage from './pages/QuizPage'
import PostsForum from './pages/PostsForum/PostsForum'
import Start from './pages/HomePage/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/portal" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="forum" element={<ForumPage/>} />
        <Route path="forum/:id" element={<PostsForum/>} />
        <Route path="add-curso/:id" element={<PostsForum/>} />
        <Route path="cursos" element={<CatalogoPage/>} />
        <Route path="cursos/:id" element={<CoursePage/>} />
        <Route path="cursos/my" element={<MyCourseView/>} />
        <Route path="notificacoes" element={<NotifyPage/>} />
        <Route path="classroom/:id" element={<MyCourseView/>} />
        <Route path="meus-cursos/" element={<MyCourses/>} />
        <Route path="me" element={<ProfilePage/>} />
        <Route path="quiz" element={<QuizPage/>} />
      </Route>
      <Route path="/entrar" element={<LoginPage />} />
      
    </Routes>
  )
}

export default App
