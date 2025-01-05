import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const explorations = [
  { name: "Visit the Louvre Museum", url: "https://www.louvre.fr/en/online-tours" },
  { name: "Explore Mars with NASA", url: "https://accessmars.withgoogle.com/" },
  { name: "Tour the Great Wall of China", url: "https://www.thechinaguide.com/destination/great-wall-of-china" },
  { name: "Dive into the Great Barrier Reef", url: "https://attenboroughsreef.com/" },
  { name: "Walk through Yellowstone National Park", url: "https://www.nps.gov/yell/learn/photosmultimedia/virtualtours.htm" }
]

export default function VirtualExplorer({ preferences, onComplete }) {
  const [exploration, setExploration] = useState(null)

  useEffect(() => {
    const randomExploration = explorations[Math.floor(Math.random() * explorations.length)]
    setExploration(randomExploration)
  }, [preferences])

  if (!exploration) return <div>Preparing your virtual adventure...</div>

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Virtual Explorer</h2>
      <p className="text-xl mb-4">{exploration.name}</p>
      <Button onClick={() => window.open(exploration.url, '_blank')}>
        Start Exploring
      </Button>
      <Button 
        onClick={() => onComplete({ type: 'Virtual Exploration', description: exploration.name })}
        className="mt-4"
        variant="outline"
      >
        I'm done exploring
      </Button>
    </div>
  )
}

