export default function HelloWorld({ msg }) {
  return (
    <div className="text-center bg-white rounded-lg shadow p-6 mt-8">
      <h1 className="text-2xl font-bold font-tajawal text-green-700">{msg}</h1>
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
    </div>
  )
}
