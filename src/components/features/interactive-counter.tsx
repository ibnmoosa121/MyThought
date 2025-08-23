import React from 'react'
import { Plus, Minus, RotateCcw, TrendingUp, Target, Activity } from 'lucide-react'
import { useAppStore } from '../../stores/app-store'

// Counter display component
const CounterDisplay = () => {
  const { counter } = useAppStore()
  
  return (
    <div className="flex items-center justify-center">
      <div className="bg-base-200 rounded-2xl p-8 min-w-[120px]">
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
      <button
        onClick={decrementCounter}
        className="btn btn-circle btn-lg btn-outline hover:btn-warning"
        disabled={counter <= 0}
        aria-label="Decrease counter"
      >
        <Minus size={24} />
      </button>
      
      <button
        onClick={resetCounter}
        className="btn btn-circle btn-outline hover:btn-info"
        disabled={counter === 0}
        aria-label="Reset counter"
        title="Reset to 0"
      >
        <RotateCcw size={18} />
      </button>
      
      <button
        onClick={incrementCounter}
        className="btn btn-circle btn-lg btn-primary"
        aria-label="Increase counter"
      >
        <Plus size={24} />
      </button>
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
      color: 'text-success'
    },
    {
      icon: Target,
      label: 'Min Value',
      value: stats.minValue,
      color: 'text-info'
    }
  ]
  
  return (
    <div className="bg-base-200 rounded-xl p-4">
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
    <div className="bg-base-200 rounded-xl p-3">
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
      <div className="card bg-base-100 shadow-xl border border-base-300">
        <div className="card-body p-6 space-y-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">Interactive Counter</h2>
            <p className="text-sm opacity-70">
              Click the buttons to increment, decrement, or reset the counter
            </p>
          </div>
          
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
        </div>
      </div>
    </div>
  )
}

// Compact counter variant
export const CompactCounter = () => {
  const { counter, incrementCounter, decrementCounter } = useAppStore()
  
  return (
    <div className="inline-flex items-center gap-3 bg-base-200 rounded-full p-2">
      <button
        onClick={decrementCounter}
        className="btn btn-circle btn-sm btn-outline"
        disabled={counter <= 0}
      >
        <Minus size={16} />
      </button>
      
      <div className="px-4 py-2 bg-base-100 rounded-full min-w-[60px] text-center font-semibold">
        {counter}
      </div>
      
      <button
        onClick={incrementCounter}
        className="btn btn-circle btn-sm btn-primary"
      >
        <Plus size={16} />
      </button>
    </div>
  )
}

export default InteractiveCounter