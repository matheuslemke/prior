import { useState } from 'react'
import './App.css'
import Area from './components/Area'
import Card from './components/Card'
import { v4 as uuid } from 'uuid'

export type Position = {
  top: number
  left: number
}

type CardProps = {
  id: string
  content: string
  position: Position
}

const App = () => {
  const areas = [
    { id: '1', title: 'Low effort + High impact', bgColor: 'bg-green-400' },
    { id: '2', title: 'High effort + High impact', bgColor: 'bg-cyan-200' },
    { id: '3', title: 'Low effort + Low impact', bgColor: 'bg-lime-300' },
    { id: '4', title: 'High effort + Low impact', bgColor: 'bg-red-500' }
  ]

  const [cards, setCards] = useState<Array<CardProps>>([])

  const onClick = (evt: any) => {
    setCards([
      ...cards,
      {
        id: uuid(),
        content: '',
        position: {
          top: evt.clientY,
          left: evt.clientX
        }
      }
    ])
  }

  const onRemoveCard = (id: string) => {
    setCards(cards.filter((card) => card.id !== id))
  }

  return (
    <>
      <div className="App grid grid-cols-2 gap-3 bg-neutral-800">
        {areas.map((area) => (
          <Area key={area.id} onClick={onClick} {...area} />
        ))}
      </div>
      {cards.map((card) => (
        <Card key={card.id} {...card} closeCard={onRemoveCard} />
      ))}
    </>
  )
}

export default App
