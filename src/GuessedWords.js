import React from 'react'

function GuessedWords({ guessedWords }) {
  return (
    <div data-test="component-guessed-words">
      {guessedWords.length ? (
        <div data-test="guessed-words">
          <h3>Guessed words:</h3>
          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map(({ guessedWord, letterMatchCount }, idx) => {
                return (
                  <tr data-test="guessed-word" key={idx}>
                    <td>{guessedWord}</td>
                    <td>{letterMatchCount}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <span data-test="component-guessed-instructions">
          Try to guess the secret word!
        </span>
      )}
    </div>
  )
}

export default GuessedWords
