import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { clubs } from '../clubs'

export default function ClubDetailPage() {
  const { clubId } = useParams()
  const club = clubs.find((c) => c.id === clubId)
  const [joined, setJoined] = useState(false)

  useEffect(() => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]')
    setJoined(joinedClubs.includes(clubId))
  }, [clubId])

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]')
    if (!joinedClubs.includes(clubId)) {
      joinedClubs.push(clubId)
      localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs))
      setJoined(true)
    }
  }

  if (!club) {
    return <p className="p-4">Club not found.</p>
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{club.name}</h1>
      <img src={club.image} alt={club.name} className="w-full h-64 object-cover rounded mb-4" />
      <p className="mb-4">{club.description}</p>
      <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
      <ul className="mb-4 list-disc list-inside">
        {club.events.map((e) => (
          <li key={e.name}>
            {e.name} - {e.date}
          </li>
        ))}
      </ul>
      {!joined ? (
        <button
          onClick={handleJoin}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Join Club
        </button>
      ) : (
        <p className="font-semibold text-green-600">You have joined this club!</p>
      )}
    </div>
  )
}
