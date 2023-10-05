// 229. Majority Element II
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:
// Input: nums = [3,2,3]
// Output: [3]

// Example 2:
// Input: nums = [1]
// Output: [1]

// Example 3:
// Input: nums = [1,2]
// Output: [1,2]

// Constraints:
// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109

// Follow up: Could you solve the problem in linear time and in O(1) space?

export const majorityElement = (nums: number[]): number[] => {
  const map = {}
  const result = []
  const div = nums.length / 3

  for (const n of nums) {
    if (map[n]) {
      map[n]++
    } else map[n] = 1

    if (map[n] > div && map[n] <= nums.length) {
      result.push(n)
      map[n] = nums.length + 1
    }
  }

  return result
}
