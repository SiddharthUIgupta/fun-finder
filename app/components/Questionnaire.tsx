import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function Questionnaire({ onSubmit }) {
  const [time, setTime] = useState('')
  const [location, setLocation] = useState('')
  const [mood, setMood] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ time, location, mood })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">
          How much time do you have?
        </label>
        <Select onValueChange={setTime} required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5min">5 minutes</SelectItem>
            <SelectItem value="15min">15 minutes</SelectItem>
            <SelectItem value="30min">30 minutes</SelectItem>
            <SelectItem value="1hour">1 hour or more</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Where do you want to play?
        </label>
        <Select onValueChange={setLocation} required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="inside">Inside</SelectItem>
            <SelectItem value="outside">Outside</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="mood" className="block text-sm font-medium text-gray-700">
          What's your mood?
        </label>
        <Select onValueChange={setMood} required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select mood" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="creative">Creative</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="relaxed">Relaxed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">Find Fun!</Button>
    </form>
  )
}

