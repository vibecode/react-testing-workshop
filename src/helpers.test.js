import { getLetterMatchCount } from './helpers'

describe('getLetterMatchCount', () => {
  const secretWord = 'party'

  it('returns correct count when there are no matching letters', () => {
    const count = getLetterMatchCount('bones', secretWord)
    expect(count).toBe(0)
  })

  it('returns the correct count where there are 3 matching letters', () => {
    const count = getLetterMatchCount('train', secretWord)
    expect(count).toBe(3)
  })

  it('returns the correct count when there are duplicate letters in the guess', () => {
    const count = getLetterMatchCount('parka', secretWord)
    expect(count).toBe(3)
  })
})
