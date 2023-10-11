/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
// 2251. Number of Flowers in Full Bloom
// You are given a 0-indexed 2D integer array flowers, where flowers[i] = [starti, endi] means the ith flower will be in full bloom from starti to endi (inclusive). You are also given a 0-indexed integer array people of size n, where people[i] is the time that the ith person will arrive to see the flowers.
// Return an integer array answer of size n, where answer[i] is the number of flowers that are in full bloom when the ith person arrives.

// Input: flowers = [[1,6],[3,7],[9,12],[4,13]], poeple = [2,3,7,11]
// Output: [1,2,2,2]
// Explanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.
// For each person, we return the number of flowers in full bloom during their arrival.

// Input: flowers = [[1,6],[3,7],[9,12],[4,13]], poeple = [2,3,7,11]
// Output: [1,2,2,2]
// Explanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.
// For each person, we return the number of flowers in full bloom during their arrival.
// Constraints:

// 1 <= flowers.length <= 5 * 104
// flowers[i].length == 2
// 1 <= starti <= endi <= 109
// 1 <= people.length <= 5 * 104
// 1 <= people[i] <= 109

// Intuition
// The number of blooming flowers at any given time is determined by how many flowers have started blooming but have not yet finished. For a given time t, the number that have started blooming is every entry of flowers where flowers[0] <= t. Similarly, the number that have finished is flowers[1] < t. The difference between these two is the number of flowers blooming at t.
// Approach
// By sorting the starting times and ending times in flowers separately, we can use a binary search to determine how many flowers have started blooming and how many have finished blooming.
// Note: because the inequality for starting is <= while ending is <, we can either implement extra logic in the binary search to handle this, or we can just increment every end value by 1 and use <= for both.
// Additionally, we need a binary search that for an array of length n will return n if the target is bigger than every element in the array. To do this, we'll set the bounds to [0, n] instead of [0, n - 1] and compare our pointers via < rather than <= so we are guaranteed to break the loop when low = high = n.
// Complexity
// Time complexity: O((m+n)log⁡n)
// Space complexity: O(n)

const search = (arr: Uint32Array, target: number): number => {
  let low = 0
  let high = arr.length
  while (low < high) {
    const mid = ~~((low + high) / 2)
    if (arr[mid] > target) {
      high = mid
    } else {
      low = mid + 1
    }
  }
  return low
}

export const fullBloomFlowers = (
  flowers: number[][],
  people: number[],
): number[] => {
  const starts = new Uint32Array(flowers.length)
  const ends = new Uint32Array(flowers.length)
  for (let i = 0; i < flowers.length; i++) {
    starts[i] = flowers[i][0]
    ends[i] = flowers[i][1] + 1
  }
  starts.sort()
  ends.sort()
  return people.map((t) => search(starts, t) - search(ends, t))
}
