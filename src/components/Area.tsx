type AreaProps = {
  title: string
}

const Area = ({ title }: AreaProps) => {
  return <div className="h-[50vh]">{title}</div>
}

export default Area
