import React from 'react'
import GuessedWords from './GuessedWords'
import { shallow } from 'enzyme'
import { findByTestAttr } from './testUtils'

const defaultProps = {
  guessedWords: [{ guessedWord: 'train' }],
}

describe('if there are no words guessed', () => {
  const wrapper = shallow(<GuessedWords guessedWords={defaultProps} />)

  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  })

  it('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(
      wrapper,
      'component-guessed-instructions'
    )
    expect(instructions.text().length).not.toBe(0)
  })
})

describe('if there are words guessed', () => {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ]

  const wrapper = shallow(<GuessedWords guessedWords={guessedWords} />)

  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  })

  it('renders guessed words section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
    expect(guessedWordsNode.length).toBe(1)
  })

  it('displays correct number of guessed words', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordsNodes.length).toBe(guessedWords.length)
  })
})
