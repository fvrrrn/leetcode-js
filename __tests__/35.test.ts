import { searchInsert } from '../src/35.js'

it('returns 2 for nums=[1,3,5,6] and target=5', () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
})

it('returns 1 for nums=[1,3,5,6] and target=2', () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1)
})

it('returns 4 for nums=[1,3,5,6] and target=7', () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
})
