import { majorityElement } from '../src/229.js'

it('returns [3] with nums [3,2,3]', () => {
  expect(majorityElement([3, 2, 3])).toEqual([3])
})

it('returns [1] with nums [1]', () => {
  expect(majorityElement([1])).toEqual([1])
})

it('returns [1,2] with nums [1,2]', () => {
  expect(majorityElement([1, 2])).toEqual([1, 2])
})

it('returns [2] with nums [2,2]', () => {
  expect(majorityElement([2, 2])).toEqual([2])
})
