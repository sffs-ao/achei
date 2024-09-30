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
import ProfilePage from './pages/Profile/ProgilePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/me" element={<Home/>} />
        <Route path="/forum" element={<ForumPage/>} />
        <Route path="/cursos" element={<CatalogoPage/>} />
        <Route path="/cursos/:id" element={<CoursePage/>} />
        <Route path="/cursos/my" element={<MyCourseView/>} />
        <Route path="/notificacoes" element={<NotifyPage/>} />
        <Route path="/classroom/:id" element={<MyCourseView/>} />
        <Route path="/me/" element={<ProfilePage/>} />
      </Route>
      <Route path="/entrar" element={<LoginPage />} />
    </Routes>
  )
}

export default App
