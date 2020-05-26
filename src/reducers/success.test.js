import { actionTypes } from '../actions'
import success from './success'

it('returns default initial state of "false" when no action ispassed', () => {
  const newState = success()
  expect(newState).toBe(false)
})

it('returns state of true upon receiving correct guess', () => {
  const newState = success(false, { type: actionTypes.CORRECT_GUESS })
  expect(newState).toBe(true)
})
