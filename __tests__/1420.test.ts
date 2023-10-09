import { numOfArrays } from '../src/1420.js'

it('returns 10 with n=5, m=3, k=5', () => {
  expect(numOfArrays(5, 3, 5)).toEqual(10)
})

it('returns 35 with n=7, m=4, k=7', () => {
  expect(numOfArrays(7, 4, 7)).toEqual(35)
})
