import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const projects = [
  { name: "Make a paper mache volcano", time: "1hour", mood: "creative" },
  { name: "Create a scavenger hunt", time: "30min", mood: "active" },
  { name: "Build a pillow fort", time: "30min", mood: "relaxed" },
  { name: "Paint rocks", time: "30min", mood: "creative" },
  { name: "Make origami animals", time: "15min", mood: "creative" },
  { name: "Create a obstacle course", time: "30min", mood: "active" },
  { name: "Make a time capsule", time: "1hour", mood: "relaxed" }
]

export default function DIYProjects({ preferences, onComplete }) {
  const [project, setProject] = useState(null)

  useEffect(() => {
    const filteredProjects = projects.filter(p => {
      if (preferences.time === '5min') return false
      if (preferences.time === '15min' && p.time !== '15min') return false
      if (preferences.mood && p.mood !== preferences.mood) return false
      return true
    })
    const randomProject = filteredProjects[Math.floor(Math.random() * filteredProjects.length)]
    setProject(randomProject)
  }, [preferences])

  if (!project) return <div>Finding a project for you...</div>

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">DIY Project</h2>
      <p className="text-xl mb-4">{project.name}</p>
      <Button onClick={() => onComplete({ type: 'DIY Project', description: project.name })}>
        Let's create!
      </Button>
    </div>
  )
}

