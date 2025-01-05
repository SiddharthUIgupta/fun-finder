import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const games = [
  { name: "Simon Says", players: "2+", location: "both" },
  { name: "I Spy", players: "2+", location: "both" },
  { name: "Charades", players: "2+", location: "inside" },
  { name: "Hide and Seek", players: "2+", location: "both" },
  { name: "Hopscotch", players: "1+", location: "outside" },
  { name: "Solitaire", players: "1", location: "inside" },
  { name: "Jump Rope", players: "1+", location: "outside" },
  { name: "Twenty Questions", players: "2+", location: "both" }
]

export default function GameIdeas({ preferences, onComplete }) {
  const [game, setGame] = useState(null)

  useEffect(() => {
    const filteredGames = games.filter(g => 
      g.location === preferences.location || g.location === "both"
    )
    const randomGame = filteredGames[Math.floor(Math.random() * filteredGames.length)]
    setGame(randomGame)
  }, [preferences])

  if (!game) return <div>Finding a game for you...</div>

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Game Idea</h2>
      <p className="text-xl mb-2">{game.name}</p>
      <p className="mb-4">Players: {game.players}</p>
      <Button onClick={() => onComplete({ type: 'Game', description: game.name })}>
        Let's play!
      </Button>
    </div>
  )
}

