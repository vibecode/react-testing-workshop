import React, { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => setCounter((state) => state + 1)

  return (
    <div className="App" data-test="component-app">
      <div data-test="counter-display">{counter}</div>
      <button data-test="increment-button" onClick={handleIncrement}>
        +
      </button>
    </div>
  )
}

export default App
