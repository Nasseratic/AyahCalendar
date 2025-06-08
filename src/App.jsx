import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import brandImg from './assets/New Project.png'

export default function App() {
  const navigate = useNavigate()
  return (
    <div id="app">
      <header className="flex-navbar">
        <img
          className="brand"
          src={brandImg}
          onClick={() => navigate('/')}
        />
        <span className="header-brand" onClick={() => navigate('/')}>Ayah Calendar</span>
      </header>
      <br />
      <Outlet />
    </div>
  )
}
