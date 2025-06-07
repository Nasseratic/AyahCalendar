import { Link, Outlet, useNavigate } from 'react-router-dom'

import brandImg from './assets/New Project.png'

export default function App() {
  const navigate = useNavigate()
  return (
    <div id="app">
      <header className="bg-gray-50 shadow-md flex flex-col sm:flex-row items-center px-4 py-2">
        <img
          className="w-16 my-2 cursor-pointer"
          src={brandImg}
          onClick={() => navigate('/calendar')}
        />
        <span
          className="cursor-pointer text-xl font-light mt-2 ml-2 text-green-600 font-[Tajawal]"
          onClick={() => navigate('/calendar')}
        >
          Ayah Calendar
        </span>
        <ul className="flex flex-col sm:flex-row items-center list-none text-gray-700 text-sm uppercase sm:ml-auto">
          <li className="mx-4 my-2">
            <Link className="text-gray-600 hover:text-red-600" to="/">
              Home
            </Link>
          </li>
          <li className="mx-4 my-2">
            <Link className="text-gray-600 hover:text-red-600" to="/calendar">
              Calendar
            </Link>
          </li>
        </ul>
      </header>
      <br />
      <Outlet />
    </div>
  )
}
