// 316. Remove Duplicate Letters
// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is
// the smallest in lexicographical order
//  among all possible results.

// Example 1:
// Input: s = "bcabc"
// Output: "abc"

// Example 2:
// Input: s = "cbacdcbc"
// Output: "acdb"

// Constraints:
// 1 <= s.length <= 104
// s consists of lowercase English letters.

// Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

// Explanation of smallest lexicographical order among all possible results

// First, lexicographical order is first determined by string length and then alphabetical order. Since the string length is predetermined by the constraints of the question (every letter appears once and only once) we only care about the alphabetical order.

// Second, and more importantly, we're looking for lexicographical order among all possible results. That means for the second example of "cbacdcbc" we first determine what all possible results are...

// "cbacdcbc" = "cbad"
// "cbacdcbc" = "cadb"
// "cbacdcbc" = "bacd"
// "cbacdcbc" = "badc"
// "cbacdcbc" = "badc" (Note: This is a duplicate result but is a different subset of the original string than the last result.)
// "cbacdcbc" = "acdb"
// "cbacdcbc" = "adcb"
// "cbacdcbc" = "adbc"

// and once we order the results lexicographically...

// "acdb"
// "adbc"
// "adcb"
// "bacd"
// "badc"
// "badc"
// "cadb"
// "cbad"
// we see that our first result is "acdb".

export const removeDuplicateLetters = (s: string): string => {
  // const positions = []
  // const order = []
  // const map = {}
  // // const alphabet = 'abcdfghjklmnpqrstvwxyz'

  // for (let i = 0; i < s.length; i++) {
  //   if (map[s[i]] !== undefined) positions[map[s[i]]].push(i)
  //   else {
  //     positions.push([i])
  //     order.push(s[i])
  //     map[s[i]] = positions.length - 1
  //   }
  // }

  // let min = 'zzzz'
  // // for (const letter of alphabet) {
  // //   if (map[letter]) {
  // //     min = letter
  // //     break
  // //   }
  // // }

  // const follows = (
  //   position1: number[],
  //   position2: number[],
  //   i: number,
  // ): boolean => {
  //   const result = position1.some(
  //     (p1) => i < p1 && position2.some((p2) => i < p2 && p1 < p2),
  //   )

  //   return result
  // }

  // for (let i = 0; i < order.length; i++) {
  //   let combination = order[i]
  //   for (let j = 0; j < positions.length; j++) {
  //     if (order[i] === order[j]) continue
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     const a2 = combination[combination.length - 1]
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     const a1 = map[combination[combination.length - 1]]
  //     console.log(a1, a2)

  //     if (
  //       follows(
  //         positions[i],
  //         positions[j],
  //         map[combination[combination.length - 1]],
  //       )
  //     ) {
  //       combination += order[j]
  //     }
  //   }
  //   if (combination.length === positions.length && min > combination)
  //     min = combination
  // }

  // // return min

  const map = new Map()

  const freq = new Map()

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i)
  }

  const stack = []

  for (let i = 0; i < s.length; i++) {
    while (
      stack.length !== 0 &&
      !(freq.has(s[i]) && freq.get(s[i])) &&
      s[stack[stack.length - 1]] >= s[i] &&
      map.get(s[stack[stack.length - 1]]) > i
    ) {
      freq.set(s[stack[stack.length - 1]], false)
      stack.pop()
    }
    if (!(freq.has(s[i]) && freq.get(s[i]))) {
      stack.push(i)
      freq.set(s[i], true)
    }
  }

  const output = []
  for (const num of stack) {
    output.push(s[num])
  }

  return output.join('')
}
