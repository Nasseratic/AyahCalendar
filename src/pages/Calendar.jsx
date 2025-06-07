import { useState, useEffect } from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '../calendar.css'

import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card.jsx'

export default function CalendarPage() {
  const [ayaats, setAyaats] = useState([])
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const modules = import.meta.glob('../assets/surah/surah_*.json')
    const load = async () => {
      const events = []
      const year = new Date().getFullYear()
      for (let i = 1; i <= 12; i++) {
        const mod = await modules[`../assets/surah/surah_${i}.json`]()
        const element = mod.default
        for (let j = 1; j < element.count && j <= 12; j++) {
          events.push({
            date: new Date(year, j - 1, i),
            title: element.verse[`verse_${j}`],
            num: `[${i}:${j}]`
          })
        }
        for (let j = 1; j < element.count && j <= 31; j++) {
          events.push({
            date: new Date(year, i - 1, j),
            title: element.verse[`verse_${j}`],
            num: `[${i}:${j}]`
          })
        }
      }
      events.sort((a,b)=>a.date-b.date)
      setAyaats(events)
    }
    load()
  }, [])

  const eventsByDate = ayaats.reduce((acc, ayah) => {
    const key = ayah.date.toISOString().slice(0,10)
    acc[key] = acc[key] || []
    acc[key].push(ayah)
    return acc
  }, {})

  const tileContent = ({ date: d, view }) => {
    const key = d.toISOString().slice(0, 10)
    if (view === 'month' && eventsByDate[key]) {
      return <div className="bg-emerald-500 h-1" />
    }
  }

  return (
    <div className="p-10 text-center space-y-6">
      <ReactCalendar
        onChange={setDate}
        value={date}
        tileContent={tileContent}
        className="mx-auto"
      />
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle className="font-tajawal">Ayah for {date.toLocaleDateString()}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {(eventsByDate[date.toISOString().slice(0, 10)] || []).map((ayah, idx) => (
            <div key={idx} className="text-right border-b pb-2 last:border-none">
              <h3 className="font-tajawal text-lg">
                {ayah.title} <small className="text-gray-500">{ayah.num}</small>
              </h3>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
