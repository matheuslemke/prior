import { MouseEventHandler } from 'react'

type AreaProps = {
  title: string
  bgColor: string
  onClick: MouseEventHandler
}
const Area = ({ title, bgColor, onClick }: AreaProps) => {
  return (
    <div
      className={`h-[calc(50vh_-_6px)] flex items-center justify-center font-sans ${bgColor}`}
      onClick={onClick}
    >
      <div className="w-40 text-2xl">{title}</div>
    </div>
  )
}

export default Area
