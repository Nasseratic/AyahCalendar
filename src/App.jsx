import { Link, Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import brandImg from './assets/New Project.png'

export default function App() {
  const navigate = useNavigate()
  return (
    <div id="app">
      <header className="flex-navbar">
        <img className="brand" src={brandImg} onClick={() => navigate('/calendar')} />
        <span className="header-brand" onClick={() => navigate('/calendar')}>Ayah Calendar</span>
        <ul className="items items-right">
          <li className="item"><Link to="/">Home</Link></li>
          <li className="item"><Link to="/calendar">Calendar</Link></li>
        </ul>
      </header>
      <br />
      <Outlet />
    </div>
  )
}
