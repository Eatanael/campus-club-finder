import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded ${isActive ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-100'}`

  return (
    <nav className="bg-white shadow mb-4">
      <div className="max-w-4xl mx-auto px-4 flex space-x-4">
        <NavLink to="/" className={linkClasses} end>
          Home
        </NavLink>
        <NavLink to="/clubs" className={linkClasses}>
          Clubs
        </NavLink>
        <NavLink to="/about" className={linkClasses}>
          About
        </NavLink>
      </div>
    </nav>
  )
}
