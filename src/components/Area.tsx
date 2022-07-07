type AreaProps = {
  title: string
  bgColor: string
}

const Area = ({ title, bgColor }: AreaProps) => {
  return (
    <div className={`h-[50vh] flex items-center justify-center font-sans ${bgColor}`}>
      <div>{title}</div>
    </div>
  )
}

export default Area
