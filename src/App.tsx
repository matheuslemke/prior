import { useState } from 'react'
import './App.css'
import Area from './components/Area'
import Card from './components/Card'

type Position = {
  top: number
  left: number
}

export type CardProps = {
  content: string
  position: Position
}

const App = () => {
  const areas = [
    { id: '1', title: 'Low effort + High impact', bgColor: 'bg-green-400' },
    { id: '2', title: 'High effort + High impact', bgColor: 'bg-green-200' },
    { id: '3', title: 'Low effort + Low impact', bgColor: 'bg-lime-200' },
    { id: '4', title: 'High effort + Low impact', bgColor: 'bg-red-400' }
  ]

  const [cards, setCards] = useState<Array<CardProps>>([])

  const onClick = (evt: any) => {
    setCards([
      ...cards,
      {
        content: 'novo',
        position: {
          top: evt.clientY,
          left: evt.clientX
        }
      }
    ])
  }

  return (
    <>
      <div className="App grid grid-cols-2 gap-3 bg-neutral-800">
        {areas.map((area) => (
          <Area key={area.id} onClick={onClick} {...area} />
        ))}
      </div>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </>
  )
}

export default App
