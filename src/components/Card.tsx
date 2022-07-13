import { CSSProperties } from 'react'
import { CardProps } from '../App'

const Card = ({ content, position }: CardProps) => {
  const style: CSSProperties = {
    position: 'absolute',
    top: `${position.top}px`,
    left: `${position.left}px`
  }
  return (
    <textarea
      className="w-48 h-24 bg-yellow-200 border-2 shadow-lg border-neutral-600 rounded-xl"
      style={style}
    />
  )
}

export default Card
