import { useState } from 'react'
import './App.css'
import Area from './components/Area'

const App = () => {
  let areas = [
    { id: '1', title: 'Low effort + High impact', color: 'bg-green-400' },
    { id: '2', title: 'High effort + High impact', color: 'bg-green-200' },
    { id: '3', title: 'Low effort + Low impact', color: 'bg-lime-200' },
    { id: '4', title: 'High effort + Low impact', color: 'bg-red-400' }
  ]

  return (
    <div className="App grid grid-cols-2">
      {areas.map((area) => (
        <Area key={area.id} title={area.title} bgColor={area.color}></Area>
      ))}
    </div>
  )
}

export default App
