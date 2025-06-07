import { Card, CardContent, CardHeader, CardTitle } from './ui/card.jsx'

export default function HelloWorld({ msg }) {
  return (
    <Card className="mt-8 text-center">
      <CardHeader>
        <CardTitle className="font-tajawal text-green-700 text-2xl font-bold">
          {msg}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mt-2">
          For guide and recipes on how to configure / customize this project,
          <br />
          check out the{' '}
          <a className="text-green-600" href="https://vitejs.dev" target="_blank">
            vite documentation
          </a>
          .
        </p>
        <h3 className="mt-10">Essential Links</h3>
        <ul className="list-none p-0">
          <li className="inline-block mx-2">
            <a className="text-green-600" href="https://react.dev" target="_blank">
              React
            </a>
          </li>
          <li className="inline-block mx-2">
            <a className="text-green-600" href="https://reactrouter.com" target="_blank">
              React Router
            </a>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
