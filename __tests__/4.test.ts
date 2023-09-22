import { findMedianSortedArrays } from '../src/4.js'
// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

it('returns 2 with nums1 [1,3] and nums2 [2]', () => {
  expect(findMedianSortedArrays([1, 3], [2])).toEqual(2)
})

it('returns 3 with nums1 [1,2,3,5] and nums2 [4]', () => {
  expect(findMedianSortedArrays([1, 2, 3, 5], [4])).toEqual(3)
})

// it('returns 2.5 with nums1 [1,2] and nums[3,4]', () => {
//   expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5)
// })
