import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container-x py-32 text-center">
      <h1 className="text-6xl md:text-8xl font-display font-bold text-electric-600 mb-4">404</h1>
      <h2 className="text-2xl font-display font-bold text-navy-500 mb-3">Page Not Found</h2>
      <p className="text-steel-500 mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        <Home className="w-5 h-5" />
        Back to Home
      </Link>
    </div>
  )
}
