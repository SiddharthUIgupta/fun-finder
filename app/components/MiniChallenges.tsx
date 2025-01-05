import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const challenges = [
  { task: "Find something blue in 10 seconds", time: 10 },
  { task: "Draw your favorite animal in 2 minutes", time: 120 },
  { task: "Do 10 jumping jacks", time: 30 },
  { task: "Make a paper airplane in 1 minute", time: 60 },
  { task: "Balance on one foot for 30 seconds", time: 30 }
]

export default function MiniChallenges({ preferences, onComplete }) {
  const [challenge, setChallenge] = useState(null)
  const [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    const filteredChallenges = challenges.filter(c => {
      if (preferences.time === '5min' && c.time > 60) return false
      if (preferences.time === '15min' && c.time > 300) return false
      return true
    })
    const randomChallenge = filteredChallenges[Math.floor(Math.random() * filteredChallenges.length)]
    setChallenge(randomChallenge)
    setTimeLeft(randomChallenge.time)
  }, [preferences])

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (challenge && timeLeft === 0) {
      onComplete({ type: 'Mini Challenge', description: challenge.task })
    }
  }, [timeLeft, challenge, onComplete])

  if (!challenge) return <div>Loading challenge...</div>

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Mini Challenge</h2>
      <p className="text-xl mb-4">{challenge.task}</p>
      <p className="text-3xl font-bold mb-4">{timeLeft} seconds left</p>
      <Button onClick={() => onComplete({ type: 'Mini Challenge', description: challenge.task })}>
        I did it!
      </Button>
    </div>
  )
}

