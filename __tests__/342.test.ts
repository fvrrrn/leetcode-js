import { isPowerOfFour } from '../src/342.js'

it('returns true for n=4', () => {
  expect(isPowerOfFour(4)).toEqual(true)
})

it('returns true for n=8', () => {
  expect(isPowerOfFour(8)).toEqual(false)
})

it('returns true for n=16', () => {
  expect(isPowerOfFour(16)).toEqual(true)
})

it('returns false for n=1', () => {
  expect(isPowerOfFour(1)).toEqual(true)
})

it('returns false for n=0', () => {
  expect(isPowerOfFour(0)).toEqual(false)
})

it('returns false for n=-1', () => {
  expect(isPowerOfFour(-1)).toEqual(false)
})
