import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import CalendarPage from './pages/Calendar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route index element={<CalendarPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
