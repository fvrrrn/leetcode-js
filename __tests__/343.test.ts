import { integerBreak } from '../src/343.js'

it('returns 486 with n=17', () => {
  expect(integerBreak(17)).toEqual(486)
})

it('returns 324 with n=12', () => {
  expect(integerBreak(16)).toEqual(324)
})

it('returns 81 with n=12', () => {
  expect(integerBreak(12)).toEqual(81)
})

it('returns 36 with n=10', () => {
  expect(integerBreak(10)).toEqual(36)
})

it('returns 1 with n=2', () => {
  expect(integerBreak(2)).toEqual(1)
})

it('returns 2 with n=3', () => {
  expect(integerBreak(3)).toEqual(2)
})
