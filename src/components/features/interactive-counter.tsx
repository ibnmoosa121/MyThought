import { Plus, Minus, RotateCcw, TrendingUp, Target, Activity } from 'lucide-react'
import { useAppStore } from '../../stores/app-store'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'

// Counter display component
const CounterDisplay = () => {
  const { counter } = useAppStore()
  
  return (
    <div className="flex items-center justify-center">
      <div className="bg-muted rounded-2xl p-8 min-w-[120px]">
         <div className="text-4xl md:text-5xl font-bold text-center tabular-nums">
           {counter}
         </div>
       </div>
    </div>
  )
}

// Counter controls
const CounterControls = () => {
  const { incrementCounter, decrementCounter, resetCounter, counter } = useAppStore()
  
  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        onClick={decrementCounter}
        variant="outline"
        size="icon"
        className="h-12 w-12 rounded-full btn-enhanced hover:bg-muted hover:border-muted-foreground"
        disabled={counter <= 0}
        aria-label="Decrease counter"
      >
        <Minus size={24} />
      </Button>
      
      <Button
        onClick={resetCounter}
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-full btn-enhanced hover:bg-muted hover:border-muted-foreground"
        disabled={counter === 0}
        aria-label="Reset counter"
        title="Reset to 0"
      >
        <RotateCcw size={18} />
      </Button>
      
      <Button
        onClick={incrementCounter}
        size="icon"
        className="h-12 w-12 rounded-full btn-enhanced"
        aria-label="Increase counter"
      >
        <Plus size={24} />
      </Button>
    </div>
  )
}

// Statistics display
const CounterStats = () => {
  const { stats } = useAppStore()
  
  const statItems = [
    {
      icon: Activity,
      label: 'Total Clicks',
      value: stats.totalClicks,
      color: 'text-primary'
    },
    {
      icon: TrendingUp,
      label: 'Max Value',
      value: stats.maxValue,
      color: 'text-primary'
    },
    {
      icon: Target,
      label: 'Min Value',
      value: stats.minValue,
      color: 'text-muted-foreground'
    }
  ]
  
  return (
    <div className="bg-muted rounded-xl p-4">
      <h3 className="text-sm font-semibold opacity-70 mb-3 text-center">
        Statistics
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {statItems.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <div key={index} className="flex items-center gap-2 justify-center sm:justify-start">
              <IconComponent size={16} className={stat.color} />
              <div className="text-center sm:text-left">
                <div className="text-xs opacity-60">{stat.label}</div>
                <div className="font-semibold tabular-nums">{stat.value}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Mobile stats (simplified layout)
const MobileCounterStats = () => {
  const { stats } = useAppStore()
  
  return (
    <div className="bg-muted rounded-xl p-3">
      <h3 className="text-sm font-semibold opacity-70 mb-2 text-center">
        Stats
      </h3>
      <div className="flex justify-between text-xs">
        <div className="text-center">
          <div className="opacity-60">Clicks</div>
          <div className="font-semibold">{stats.totalClicks}</div>
        </div>
        <div className="text-center">
          <div className="opacity-60">Max</div>
          <div className="font-semibold">{stats.maxValue}</div>
        </div>
        <div className="text-center">
          <div className="opacity-60">Min</div>
          <div className="font-semibold">{stats.minValue}</div>
        </div>
       </div>
     </div>
  )
}

// Main interactive counter component
export const InteractiveCounter = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Interactive Counter</CardTitle>
          <CardDescription>
            Click the buttons to increment, decrement, or reset the counter
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Counter display */}
          <CounterDisplay />
          
          {/* Controls */}
          <CounterControls />
          
          {/* Statistics - Desktop */}
          <div className="hidden sm:block">
            <CounterStats />
          </div>
          
          {/* Statistics - Mobile */}
          <div className="block sm:hidden">
            <MobileCounterStats />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Compact counter variant
export const CompactCounter = () => {
  const { counter, incrementCounter, decrementCounter } = useAppStore()
  
  return (
    <div className="inline-flex items-center gap-3 bg-muted rounded-full p-2">
      <Button
        onClick={decrementCounter}
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        disabled={counter <= 0}
      >
        <Minus size={16} />
      </Button>
      
      <div className="px-4 py-2 bg-background rounded-full min-w-[60px] text-center font-semibold">
        {counter}
      </div>
      
      <Button
        onClick={incrementCounter}
        size="icon"
        className="h-8 w-8 rounded-full"
      >
        <Plus size={16} />
      </Button>
    </div>
  )
}

export default InteractiveCounter