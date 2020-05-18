export function getLetterMatchCount(guessedWord, secretWord) {
  const guessedSet = new Set(guessedWord)
  const secretSet = new Set(secretWord)
  let count = 0

  for (let l of secretSet) {
    if (guessedSet.has(l)) count++
  }

  return count
}
