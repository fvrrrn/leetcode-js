import { reverse } from '../src/7.js'

it('returns 321 with 123', () => {
  expect(reverse(123)).toEqual(321)
})

it('returns -321 with -123', () => {
  expect(reverse(-321)).toEqual(-123)
})

it('returns 0 instead of 9646324351 with 1534236469', () => {
  expect(reverse(1534236469)).toEqual(0)
})

it('returns 0 instead of -9646324351 with -1534236469', () => {
  expect(reverse(-1534236469)).toEqual(0)
})
