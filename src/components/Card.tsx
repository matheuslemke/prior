import { Position } from '../App'

type CardProps = {
  id: string
  position: Position
  onRemoveCard: any
  onPositionChanged: any
}

const Card = ({ id, position, onRemoveCard, onPositionChanged }: CardProps) => {
  return (
    <div
      draggable={true}
      className="absolute flex flex-col overflow-hidden resize w-48 h-24 border-2 shadow-lg border-neutral-600 rounded-xl"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`
      }}
      onDragEnd={(evt) => {
        console.log('evt', evt)
        onPositionChanged(id, { left: evt.pageX, top: evt.pageY })
      }}
    >
      <div className="bg-neutral-900 text-right">
        <button className="text-neutral-100 text-xs mr-2" onClick={() => onRemoveCard(id)}>
          X
        </button>
      </div>
      <textarea className="h-[inherit] bg-yellow-200 px-2" />
    </div>
  )
}

export default Card
