type AreaProps = {
  title: string
  bgColor: string
}

const Area = ({ title, bgColor }: AreaProps) => {
  const onClick = (evt: any) => {
    console.log('add a card', evt)
  }

  return (
    <div
      className={`h-[50vh] flex items-center justify-center font-sans ${bgColor}`}
      onClick={onClick}
    >
      <div className="w-40 text-2xl">{title}</div>
    </div>
  )
}

export default Area
