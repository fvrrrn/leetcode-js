import { twoSum } from '../src/1.js'

it('returns [0,1] with target 9 and nums [2,7,11,15]', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})

it('returns [1,2] with target 6 and nums [3,2,4]', () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
})

it('returns [3,3] with target 6 and nums [0,1]', () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1])
})
