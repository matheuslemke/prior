import { CSSProperties, MouseEventHandler } from 'react'
import { Position } from '../App'

type CardProps = {
  id: string
  content: string
  position: Position
  closeCard: any
}

const Card = ({ id, content, position, closeCard }: CardProps) => {
  const style: CSSProperties = {
    top: `${position.top}px`,
    left: `${position.left}px`
  }
  const closeThisCard = () => {}
  return (
    <div
      className="absolute flex flex-col overflow-hidden resize w-48 h-24 border-2 shadow-lg border-neutral-600 rounded-xl"
      style={style}
    >
      <div className="bg-neutral-900 text-right">
        <button className="text-neutral-100 text-xs mr-2" onClick={() => closeCard(id)}>
          X
        </button>
      </div>
      <textarea className="h-[inherit] bg-yellow-200 px-2" />
    </div>
  )
}

export default Card
