import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import CatalogoPage from './pages/CatalogoPage/CatalogoPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/me" element={<Home/>} />
        <Route path="/cursos" element={<CatalogoPage/>} />
      </Route>
      <Route path="/entrar" element={<LoginPage />} />
    </Routes>
  )
}

export default App
