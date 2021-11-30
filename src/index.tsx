import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// function mount(el: Element) {
//   ReactDOM.render(<App name="11" age={12} />, el)
// }

// if (process.env.NODE_ENV === 'development') {
//   const el = document.querySelector('#root')
//   if (el) mount(el)
// }

// export { mount }

ReactDOM.render(<App name="11" age={12} />, document.getElementById('root'))
