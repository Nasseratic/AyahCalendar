import { Outlet, useNavigate } from 'react-router-dom'
import { Button } from './components/ui/button'
import brandImg from './assets/New Project.png'

export default function App() {
  const navigate = useNavigate()
  return (
    <div id="app">
      <header>
        <Button variant="ghost" onClick={() => navigate('/')}>
          <img src={brandImg} alt="Ayah Calendar" className="h-10" />
        </Button>
        <Button variant="link" onClick={() => navigate('/')}>Ayah Calendar</Button>
      </header>
      <br />
      <Outlet />
    </div>
  )
}
