import { CSSProperties } from 'react'
import { CardProps } from '../App'

const Card = ({ content, position }: CardProps) => {
  const style: CSSProperties = {
    position: 'absolute',
    top: `${position.top}px`,
    left: `${position.left}px`
  }
  return <div style={style}>{content}</div>
}

export default Card
