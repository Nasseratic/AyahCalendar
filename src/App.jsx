import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Button } from './components/ui/button.jsx'

import brandImg from './assets/New Project.png'

export default function App() {
  const navigate = useNavigate()
  return (
    <div id="app" className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-emerald-600 to-lime-500 text-white shadow-md flex flex-col sm:flex-row items-center px-6 py-3">
        <img
          className="w-16 my-2 cursor-pointer"
          src={brandImg}
          onClick={() => navigate('/calendar')}
        />
        <span
          className="cursor-pointer text-2xl font-semibold mt-2 ml-2 font-tajawal"
          onClick={() => navigate('/calendar')}
        >
          Ayah Calendar
        </span>
        <ul className="flex flex-col sm:flex-row items-center list-none text-sm uppercase sm:ml-auto space-y-2 sm:space-y-0 sm:space-x-4">
          <li>
            <Button variant="link" asChild>
              <Link to="/">Home</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link to="/calendar">Calendar</Link>
            </Button>
          </li>
        </ul>
      </header>
      <main className="flex-1 container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  )
}
