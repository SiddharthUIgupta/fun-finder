'use client'

import { useState } from 'react'
import Questionnaire from './components/Questionnaire'
import MiniChallenges from './components/MiniChallenges'
import GameIdeas from './components/GameIdeas'
import DIYProjects from './components/DIYProjects'
import VirtualExplorer from './components/VirtualExplorer'
import Results from './components/Results'

export default function FunFinder() {
  const [stage, setStage] = useState('questionnaire')
  const [preferences, setPreferences] = useState({
    time: '',
    location: '',
    mood: ''
  })
  const [activity, setActivity] = useState(null)

  const handlePreferencesSubmit = (prefs) => {
    setPreferences(prefs)
    const activities = ['miniChallenge', 'gameIdea', 'diyProject', 'virtualExplorer']
    const randomActivity = activities[Math.floor(Math.random() * activities.length)]
    setStage(randomActivity)
  }

  const handleActivityComplete = (result) => {
    setActivity(result)
    setStage('results')
  }

  const handleReset = () => {
    setStage('questionnaire')
    setPreferences({ time: '', location: '', mood: '' })
    setActivity(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">FunFinder</h1>
        {stage === 'questionnaire' && (
          <Questionnaire onSubmit={handlePreferencesSubmit} />
        )}
        {stage === 'miniChallenge' && (
          <MiniChallenges preferences={preferences} onComplete={handleActivityComplete} />
        )}
        {stage === 'gameIdea' && (
          <GameIdeas preferences={preferences} onComplete={handleActivityComplete} />
        )}
        {stage === 'diyProject' && (
          <DIYProjects preferences={preferences} onComplete={handleActivityComplete} />
        )}
        {stage === 'virtualExplorer' && (
          <VirtualExplorer preferences={preferences} onComplete={handleActivityComplete} />
        )}
        {stage === 'results' && (
          <Results activity={activity} onReset={handleReset} />
        )}
      </div>
    </div>
  )
}

