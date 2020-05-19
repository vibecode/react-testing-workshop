import React from 'react'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'

function App() {
  return (
    <div className="App" data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={true}></Congrats>
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      ></GuessedWords>
    </div>
  )
}

export default App
