import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Home
      </Link>
    </div>
  )
}
