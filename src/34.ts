// 34. Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

const first = (arr: number[], x: number, n = arr.length): number => {
  let low = 0,
    high = n - 1,
    res = -1
  while (low <= high) {
    // Normal Binary Search Logic
    const mid = Math.floor((low + high) / 2)

    if (arr[mid] > x) high = mid - 1
    else if (arr[mid] < x) low = mid + 1
    // If arr[mid] is same as x, we
    // update res and move to the left
    // half.
    else {
      res = mid
      high = mid - 1
    }
  }
  return res
}

/* If x is present in arr[] then returns
the index of LAST occurrence of x in
arr[0..n-1], otherwise returns -1 */
const last = (arr: number[], x: number, n = arr.length): number => {
  let low = 0,
    high = n - 1,
    res = -1
  while (low <= high) {
    // Normal Binary Search Logic
    const mid = Math.floor((low + high) / 2)

    if (arr[mid] > x) high = mid - 1
    else if (arr[mid] < x) low = mid + 1
    // If arr[mid] is same as x, we
    // update res and move to the right
    // half.
    else {
      res = mid
      low = mid + 1
    }
  }
  return res
}

export const searchRange = (nums: number[], target: number): number[] => [
  first(nums, target),
  last(nums, target),
]
