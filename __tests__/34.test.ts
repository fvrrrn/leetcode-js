import { searchRange } from '../src/34.js'

it('returns [3,4] with nums=[5,7,7,8,8,10] and target=9', () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4])
})

it('returns [-1,-1] with nums=[5,7,7,8,8,10] and target=6', () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1])
})

it('returns [-1,-1] with nums=[] and target=0', () => {
  expect(searchRange([], 0)).toEqual([-1, -1])
})
