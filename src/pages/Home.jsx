import homeLogo from '../assets/New Project (1).png'
import HelloWorld from '../components/HelloWorld.jsx'
import { Button } from '../components/ui/button.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home container mx-auto py-8">
      <img className="max-w-xl block mx-auto" src={homeLogo} />
      <div className="p-8 text-center">
        <h2 className="text-4xl font-bold mb-4 font-tajawal text-green-700">
          About Us
        </h2>
        <p className="text-lg font-tajawal leading-relaxed text-gray-700">
          Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        </p>
      </div>
      <HelloWorld msg="Welcome to React" />
      <div className="text-center mt-6">
        <Button asChild>
          <Link to="/calendar">Open Calendar</Link>
        </Button>
      </div>
    </div>
  )
}
