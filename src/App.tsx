import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Layout from './components/Layout'
import Home from './pages/Home/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home/>} />
      </Route>
      <Route path="/entrar" element={<LoginPage />} />
    </Routes>
  )
}

export default App
