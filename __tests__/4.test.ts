import { findMedianSortedArrays } from '../src/4.js'

it('returns 2 with nums1 [1,3] and nums2 [2]', () => {
  expect(findMedianSortedArrays([1, 3], [2])).toEqual(2)
})

it('returns 3 with nums1 [1,2,3,5] and nums2 [4]', () => {
  expect(findMedianSortedArrays([1, 2, 3, 5], [4])).toEqual(3)
})

it('returns 2.5 with nums1 [1,2] and nums[3,4]', () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5)
})

it('returns 0 with nums1 [0,0] and nums[0,0]', () => {
  expect(findMedianSortedArrays([0, 0], [0, 0])).toEqual(0)
})
