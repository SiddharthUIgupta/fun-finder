import { Button } from '@/components/ui/button'

export default function Results({ activity, onReset }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Activity Completed!</h2>
      <p className="text-xl mb-2">You just finished:</p>
      <p className="text-2xl font-bold mb-4">{activity.type}: {activity.description}</p>
      <p className="mb-4">Did you have fun? Are you ready for another activity?</p>
      <Button onClick={onReset}>Find More Fun!</Button>
    </div>
  )
}

