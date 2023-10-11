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

export const fullBloomFlowers = (
  flowers: number[][],
  people: number[],
): number[] => {
  const result = Array(people.length).fill(0)
  for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < flowers.length; j++) {
      if (people[i] >= flowers[j][0] && people[i] <= flowers[j][1]) result[i]++
    }
  }

  return result
}