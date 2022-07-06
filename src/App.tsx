import { useState } from 'react'
import './App.css'
import Area from './components/Area'

const App = () => {
  let titles = ['titulo 1', 'titulo 2', 'titulo 3', 'titulo 4']

  return (
    <div className="App grid grid-cols-2">
      <Area title={titles[0]}></Area>
      <Area title={titles[1]}></Area>
      <Area title={titles[2]}></Area>
      <Area title={titles[3]}></Area>
    </div>
  )
}

export default App
