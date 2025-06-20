import { Card, CardHeader, CardTitle, CardContent } from './ui/card'

export default function HelloWorld({ msg }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{msg}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          For guide and recipes on how to configure / customize this project,
          <br />
          check out the <a href="https://vitejs.dev" target="_blank">vite documentation</a>.
        </p>
        <h3>Essential Links</h3>
        <ul>
          <li><a href="https://react.dev" target="_blank">React</a></li>
          <li><a href="https://reactrouter.com" target="_blank">React Router</a></li>
        </ul>
      </CardContent>
    </Card>
  )
}
