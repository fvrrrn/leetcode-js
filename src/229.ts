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

// 2. Boyer-Moore Voting Algorithm:
// Initialize two variables candidate1 and candidate2 to None, and two counters count1 and count2 to 0.
// Iterate through the array.
// For each element num in the array:
// If num is equal to candidate1, increment count1.
// If num is equal to candidate2, increment count2.
// If count1 is 0, set num as candidate1 and increment count1.
// If count2 is 0, set num as candidate2 and increment count2.
// If neither of the above conditions is met, decrement count1 and count2.
// Initialize count1 and count2 to 0.
// Iterate through the array again.
// For each element num in the array:
// If num is equal to candidate1, increment count1.
// If num is equal to candidate2, increment count2.
// Check if count1 and count2 are greater than ⌊n/3⌋. If they are, both candidates are potential majority elements.
// Iterate through the array again and count the occurrences of candidate1 and candidate2.
// Return the candidates that meet the majority criteria.
// Complexity
// ⏱️ Time Complexity: O(n) - This algorithm makes three passes through the array.

// 🚀 Space Complexity: O(1) - Constant extra space is used.

export const majorityElement = (nums: number[]): number[] => {
  let candidate1: number | null = null
  let candidate2: number | null = null
  let count1: number = 0
  let count2: number = 0

  for (const num of nums) {
    if (num === candidate1) {
      count1 += 1
    } else if (num === candidate2) {
      count2 += 1
    } else if (count1 === 0) {
      candidate1 = num
      count1 = 1
    } else if (count2 === 0) {
      candidate2 = num
      count2 = 1
    } else {
      count1 -= 1
      count2 -= 1
    }
  }

  count1 = 0
  count2 = 0

  for (const num of nums) {
    if (num === candidate1) {
      count1 += 1
    } else if (num === candidate2) {
      count2 += 1
    }
  }

  if (count1 > nums.length / 3) {
    if (count2 > nums.length / 3) {
      return [candidate1, candidate2]
    }

    return [candidate1]
  } else if (count2 > nums.length / 3) {
    return [candidate2]
  }
  return []
}
