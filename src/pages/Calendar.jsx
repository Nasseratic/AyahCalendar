import { useState, useEffect } from 'react'
import { Calendar } from '../components/ui/calendar'
import { Card, CardHeader, CardTitle } from '../components/ui/card'

export default function CalendarPage() {
  const [ayaats, setAyaats] = useState([])
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const modules = import.meta.glob('../assets/surah/surah_*.json')
    const load = async () => {
      const events = []
      const year = new Date().getFullYear()
      for (let i = 1; i <= 31; i++) {
        const mod = await modules[`../assets/surah/surah_${i}.json`]()
        const element = mod.default
        for (let j = 1; j < element.count && j <= 12; j++) {
          events.push({
            date: new Date(year, j - 1, i),
            title: element.verse[`verse_${j}`],
            num: `[${i}:${j}]`
          })
        }
        if (i <= 12) {
          for (let j = 1; j < element.count && j <= 31; j++) {
            events.push({
              date: new Date(year, i - 1, j),
              title: element.verse[`verse_${j}`],
              num: `[${i}:${j}]`
            })
          }
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

  return (
    <div>
      <Calendar mode="single" selected={date} onSelect={setDate} />
      <div>
        {(eventsByDate[date.toISOString().slice(0,10)] || []).map((ayah, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{ayah.title} <small>{ayah.num}</small></CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
