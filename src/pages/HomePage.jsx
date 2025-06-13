import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-6">Welcome to Campus Club Finder</h1>
      <img src="assets\club.png" alt="" />
      <p className="mb-8">Discover and join amazing student clubs on campus.</p>
      <Link
        to="/clubs"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Browse Clubs
      </Link>
    </div>
  )
}
