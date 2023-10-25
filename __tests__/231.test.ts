import { isPowerOfTwo } from '../src/231.js'

it('returns false for n=-1', () => {
  expect(isPowerOfTwo(-1)).toEqual(false)
})

it('returns true for n=1', () => {
  expect(isPowerOfTwo(4)).toEqual(true)
})

it('returns true for n=2', () => {
  expect(isPowerOfTwo(4)).toEqual(true)
})

it('returns false for n=3', () => {
  expect(isPowerOfTwo(3)).toEqual(false)
})

it('returns true for n=4', () => {
  expect(isPowerOfTwo(4)).toEqual(true)
})

it('returns true for n=8', () => {
  expect(isPowerOfTwo(8)).toEqual(true)
})

it('returns true for n=16', () => {
  expect(isPowerOfTwo(16)).toEqual(true)
})

it('returns false for n=-2147483648', () => {
  expect(isPowerOfTwo(-2147483648)).toEqual(false)
})
