import { useState } from 'react'
import { Link } from 'react-router-dom'
import { clubs } from '../clubs'

export default function ClubListPage() {
  const [sort, setSort] = useState('asc')
  const [view, setView] = useState('grid')

  const sortedClubs = [...clubs].sort((a, b) =>
    sort === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  )

  const cardClass =
    view === 'grid'
      ? 'border rounded p-4 shadow'
      : 'border rounded p-4 shadow flex items-center space-x-4'

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="mr-2">Sort:</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border p-1"
          >
            <option value="asc">Name A-Z</option>
            <option value="desc">Name Z-A</option>
          </select>
        </div>
        <div>
          <button
            onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
            className="border px-2 py-1 rounded"
          >
            Toggle {view === 'grid' ? 'List' : 'Grid'} View
          </button>
        </div>
      </div>

      <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-4'}>
        {sortedClubs.map((club) => (
          <div key={club.id} className={cardClass}>
            <img src={club.image} alt={club.name} className="w-32 h-20 object-cover rounded" />
            <div className={view === 'list' ? 'flex-1' : ''}>
              <h2 className="text-xl font-bold mb-2">{club.name}</h2>
              <p className="mb-2">{club.shortDescription}</p>
              <Link
                to={`/clubs/${club.id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
