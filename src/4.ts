// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

export const findMedianSortedArrays = (
  nums1: number[],
  nums2: number[],
): number => {
  let median = 0
  let prevMedian = 0

  for (
    let left = 0, right = 0;
    left + right <= Math.floor((nums1.length + nums2.length) / 2);

  ) {
    if (nums1[left] < nums2[right] || right >= nums2.length) {
      prevMedian = median
      median = nums1[left]
      left++
    } else {
      prevMedian = median
      median = nums2[right]
      right++
    }
  }

  return (nums1.length + nums2.length) % 2 === 0
    ? (prevMedian + median) / 2
    : median
}
