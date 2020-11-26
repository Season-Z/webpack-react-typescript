import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'

interface IProps {
  name: string
  age: number
}

const App = (props: IProps) => {
  return (
    <div className="app">
      <span className="hhh">{`Hello! I'm ${props.name}, ${props.age} years old.`}</span>
    </div>
  )
}

if (module && module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App name="vortesnail" age={25} />, document.querySelector('#root'))
